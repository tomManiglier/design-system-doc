<template>
  <DocPage
    eyebrow="Patterns"
    title="Réglages & préférences"
    description="Une page de paramètres qui distingue ce qui s'applique tout de suite de ce qui doit être enregistré."
  >
    <section class="doc-section">
      <h2>Exemple complet</h2>
      <p>
        Les cases à bascule (<router-link class="doc-link" to="/docs/switch">Switch</router-link>)
        s'appliquent immédiatement, sans bouton d'enregistrement associé. Les réglages plus
        structurants (thème, langue) passent par une barre d'enregistrement explicite qui
        n'apparaît que si quelque chose a changé.
      </p>
      <DemoBlock :code="settingsCode" stack>
        <div class="settings-w">
          <BaseFieldset legend="Notifications" description="Ces réglages s'appliquent immédiatement.">
            <div class="settings-row">
              <div class="settings-row__text">
                <p class="settings-row__label">Notifications par e-mail</p>
                <p class="settings-row__hint">Résumé quotidien de l'activité de l'équipe.</p>
              </div>
              <BaseSwitch v-model="emailNotifs" />
            </div>
            <div class="settings-row">
              <div class="settings-row__text">
                <p class="settings-row__label">Notifications push</p>
                <p class="settings-row__hint">Alertes en temps réel sur cet appareil.</p>
              </div>
              <BaseSwitch v-model="pushNotifs" />
            </div>
          </BaseFieldset>

          <BaseFieldset legend="Apparence" description="Modifie l'interface pour tout le compte.">
            <BaseRadioGroup v-model="theme" :options="themeOptions" />
          </BaseFieldset>

          <BaseFieldset legend="Langue">
            <BaseField label="Langue de l'interface">
              <BaseSelect v-model="locale" :options="localeOptions" />
            </BaseField>
          </BaseFieldset>

          <div class="settings-save">
            <span v-if="dirty" class="settings-save__hint">Modifications non enregistrées</span>
            <BaseButton variant="outline" :disabled="!dirty" @click="discard">Annuler</BaseButton>
            <BaseButton variant="primary" :disabled="!dirty" @click="save">Enregistrer</BaseButton>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li>
          <strong>Switch = application immédiate</strong>, jamais dans une barre d'enregistrement -
          c'est la règle documentée sur <router-link class="doc-link" to="/docs/switch">Switch</router-link>.
          Un réglage qui doit être validé avec le reste d'un formulaire passe par une
          <router-link class="doc-link" to="/docs/checkbox">Checkbox</router-link>, pas un Switch.
        </li>
        <li><strong>La barre d'enregistrement n'apparaît que si l'état a changé</strong> : pas de boutons Enregistrer/Annuler visibles en permanence sur une page où rien n'a bougé.</li>
        <li><strong>Regrouper par Fieldset thématique</strong>, une légende par groupe, jamais de fieldset imbriqué.</li>
        <li>Un enregistrement de préférences reste discret : pas de Dialog de confirmation pour ça, un simple retour temporaire suffit (voir <router-link class="doc-link" to="/patterns/feedback">Notifications &amp; feedback</router-link>).</li>
        <li>Le bouton Annuler restaure la dernière valeur enregistrée, pas les valeurs par défaut de l'application.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseButton,
  BaseField,
  BaseFieldset,
  BaseRadioGroup,
  BaseSelect,
  BaseSwitch,
} from '@tommaniglier/design-system-lib/vue';
import type { RadioOption, SelectOption } from '@tommaniglier/design-system-lib/vue';

const emailNotifs = ref(true);
const pushNotifs = ref(false);

const themeOptions: RadioOption[] = [
  { label: 'Clair', value: 'light' },
  { label: 'Sombre', value: 'dark' },
  { label: 'Système', value: 'system' },
];
const localeOptions: SelectOption[] = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
];

const savedTheme = ref('system');
const savedLocale = ref('fr');
const theme = ref(savedTheme.value);
const locale = ref(savedLocale.value);

const dirty = computed(() => theme.value !== savedTheme.value || locale.value !== savedLocale.value);

function save() {
  savedTheme.value = theme.value;
  savedLocale.value = locale.value;
}

function discard() {
  theme.value = savedTheme.value;
  locale.value = savedLocale.value;
}

const settingsCode = `<BaseFieldset legend="Notifications" description="Ces réglages s'appliquent immédiatement.">
  <BaseSwitch v-model="emailNotifs" />
  <BaseSwitch v-model="pushNotifs" />
</BaseFieldset>

<BaseFieldset legend="Apparence">
  <BaseRadioGroup v-model="theme" :options="themeOptions" />
</BaseFieldset>

<BaseFieldset legend="Langue">
  <BaseField label="Langue de l'interface">
    <BaseSelect v-model="locale" :options="localeOptions" />
  </BaseField>
</BaseFieldset>

<!-- barre visible seulement si theme/locale diffèrent des valeurs enregistrées -->
<BaseButton variant="outline" :disabled="!dirty">Annuler</BaseButton>
<BaseButton variant="primary" :disabled="!dirty">Enregistrer</BaseButton>`;
</script>

<style scoped lang="scss">
.settings-w {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 480px;
}

.settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  & + & {
    margin-top: 16px;
  }
}

.settings-row__label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  margin: 0;
}

.settings-row__hint {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
  margin: 2px 0 0;
}

.settings-save {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.settings-save__hint {
  margin-right: auto;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}
</style>
