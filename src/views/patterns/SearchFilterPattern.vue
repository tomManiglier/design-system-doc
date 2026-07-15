<template>
  <DocPage
    eyebrow="Patterns"
    title="Recherche & filtres"
    description="Un champ de recherche, des filtres visibles et des résultats qui réagissent immédiatement - sans page de résultats séparée."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="pattern-search">
          <div class="pattern-search__bar">
            <BaseInput v-model="query" placeholder="Rechercher un membre…">
              <template #icon>
                <BaseIcon name="search" :size="16" />
              </template>
            </BaseInput>
            <BaseSelect v-model="role" :options="roles" placeholder="Tous les rôles" />
          </div>

          <div v-if="role" class="pattern-search__active">
            <span class="pattern-search__count">{{ filtered.length }} résultat(s)</span>
            <button type="button" class="pattern-search__chip" @click="role = ''">
              {{ roleLabel }}
              <BaseIcon name="close" :size="14" />
            </button>
          </div>

          <div class="pattern-search__results">
            <BaseItem
              v-for="m in filtered"
              :key="m.name"
              :title="m.name"
              :description="m.roleLabel"
            >
              <template #media>
                <BaseAvatar :initials="m.initials" />
              </template>
            </BaseItem>
            <p v-if="!filtered.length" class="pattern-search__empty">
              Aucun membre ne correspond à « {{ query }} ». Essayez un autre nom ou retirez un filtre.
            </p>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Filtrage immédiat</strong> pour des listes locales ; bouton « Rechercher » uniquement quand la requête coûte cher (API, gros volumes).</li>
        <li><strong>Les filtres actifs restent visibles</strong> sous la barre, chacun retirable d'un clic - jamais de filtre invisible qui tronque les résultats sans explication.</li>
        <li><strong>Annoncer le nombre de résultats</strong> dès qu'un filtre est actif.</li>
        <li>L'état « aucun résultat » propose une sortie : élargir la recherche, retirer un filtre - voir <router-link class="doc-link" to="/patterns/empty-states">États vides</router-link>.</li>
        <li>La recherche globale d'application passe par <router-link class="doc-link" to="/docs/command">Command</router-link> (⌘K) ; ce pattern couvre la recherche dans une liste.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import { BaseAvatar, BaseIcon, BaseInput, BaseItem, BaseSelect } from '@tom/design-system/vue';
import type { SelectOption } from '@tom/design-system/vue';

const query = ref('');
const role = ref('');

const roles: SelectOption[] = [
  { label: 'Design', value: 'design' },
  { label: 'Développement', value: 'dev' },
  { label: 'Produit', value: 'produit' },
];

const members = [
  { name: 'Marie Dupont', initials: 'MD', role: 'design', roleLabel: 'Design' },
  { name: 'Nicolas Sy', initials: 'NS', role: 'dev', roleLabel: 'Développement' },
  { name: 'Lina Roche', initials: 'LR', role: 'produit', roleLabel: 'Produit' },
  { name: 'Tom Maniglier', initials: 'TM', role: 'dev', roleLabel: 'Développement' },
];

const roleLabel = computed(() => roles.find((r) => r.value === role.value)?.label ?? '');

const filtered = computed(() =>
  members.filter(
    (m) =>
      m.name.toLowerCase().includes(query.value.trim().toLowerCase()) &&
      (!role.value || m.role === role.value),
  ),
);

const code = `<BaseInput v-model="query" placeholder="Rechercher un membre…">
  <template #icon><BaseIcon name="search" :size="16" /></template>
</BaseInput>
<BaseSelect v-model="role" :options="roles" placeholder="Tous les rôles" />

<!-- filtres actifs retirables + compte de résultats -->
<span>{{ filtered.length }} résultat(s)</span>

<BaseItem v-for="m in filtered" :key="m.name"
          :title="m.name" :description="m.roleLabel" />`;
</script>

<style scoped lang="scss">
.pattern-search {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 520px;
}

.pattern-search__bar {
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 10px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.pattern-search__active {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pattern-search__count {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
}

.pattern-search__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 10px;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-foreground);
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    border-color: var(--color-muted-foreground);
  }
}

.pattern-search__results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pattern-search__empty {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  padding: 20px 0;
  margin: 0;
  text-align: center;
}
</style>
