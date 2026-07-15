<template>
  <DocPage
    eyebrow="Affichage"
    title="Skeleton"
    description="Placeholder animé affiché pendant le chargement du contenu."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="row">
          <BaseSkeleton width="48px" height="48px" radius="50%" />
          <div class="lines">
            <BaseSkeleton width="180px" />
            <BaseSkeleton width="120px" />
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>loading</code></td><td>Bloc animé aux dimensions données (<code>width</code>, <code>height</code>).</td></tr>
            <tr><td><code>reduced-motion</code></td><td>L'animation doit être neutralisée si l'utilisateur la refuse.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le skeleton n'est pas un état vide : il dit « ça arrive », pas « il n'y a rien ». Quand le chargement échoue, basculer sur un <router-link class="doc-link" to="/patterns/error-states">état d'erreur</router-link> ; quand il n'y a rien à afficher, sur un <router-link class="doc-link" to="/patterns/empty-states">état vide</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Décoratif</strong> - <code>aria-hidden="true"</code> : les blocs ne sont pas lus, ce serait du bruit.</li>
        <li><strong>Annoncer le chargement</strong> - le skeleton ne dit rien aux lecteurs d'écran : ajouter un message dans une zone <code>aria-live="polite"</code> (« Chargement des projets »).</li>
        <li><strong>Fidélité</strong> - refléter la forme du contenu attendu : un skeleton trop éloigné du résultat crée un saut de mise en page.</li>
        <li><strong>Durée</strong> - sous ~300 ms, ne rien afficher : un flash de skeleton est plus gênant qu'une courte attente.</li>
        <li><strong>Nombre</strong> - quelques lignes suffisent : ne pas simuler la page entière.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseSkeleton } from '@tom/design-system/vue';

const code = `<BaseSkeleton width="48px" height="48px" radius="50%" />
<BaseSkeleton width="180px" />
<BaseSkeleton width="120px" />`;

const rows: PropRow[] = [
  { name: 'width', type: 'string', default: "'100%'", description: 'Largeur CSS.' },
  { name: 'height', type: 'string', default: "'16px'", description: 'Hauteur CSS.' },
  { name: 'radius', type: 'string', default: "'6px'", description: 'Rayon des coins.' },
];
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  gap: 16px;
}
.lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
