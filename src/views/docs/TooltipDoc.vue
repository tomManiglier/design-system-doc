<template>
  <DocPage
    eyebrow="Feedback"
    title="Tooltip"
    description="Info-bulle révélée au survol ou au focus pour apporter un complément d'information."
    status="beta"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseTooltip content="Enregistrer le projet">
          <BaseButton variant="primary">Survolez-moi</BaseButton>
        </BaseTooltip>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Bulle masquée (<code>opacity: 0</code>, <code>pointer-events: none</code>).</td></tr>
            <tr><td><code>hover</code></td><td>Bulle visible au-dessus de l'élément, apparition en 150 ms.</td></tr>
            <tr><td><code>focus</code></td><td>Même apparition quand l'élément déclencheur reçoit le focus clavier.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le contenu est sur une seule ligne (<code>white-space: nowrap</code>) : le tooltip est fait
        pour quelques mots. Pour une explication longue, utiliser l'aide d'un
        <router-link class="doc-link" to="/docs/field">Field</router-link> ou un texte visible.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - la bulle porte <code>role="tooltip"</code>.</li>
        <li><strong>Clavier</strong> - le tooltip apparaît aussi au focus, pas seulement au survol : un élément non focusable ne doit pas porter d'information en tooltip.</li>
        <li><strong>Jamais essentiel</strong> - l'information d'un tooltip est un complément. Ce qui est indispensable à l'action est visible à l'écran.</li>
        <li><strong>Liaison</strong> - <code>aria-describedby</code> entre le déclencheur et la bulle n'est pas posé automatiquement : à ajouter si le tooltip porte une information à annoncer.</li>
        <li><strong>Tactile</strong> - pas de survol sur mobile : ne jamais réserver une information au tooltip seul.</li>
        <li><strong>Contenu</strong> - texte court et factuel, jamais d'élément interactif dans la bulle.</li>
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
import { BaseTooltip, BaseButton } from '@tom/design-system/vue';

const code = `<BaseTooltip content="Enregistrer le projet">
  <BaseButton variant="primary">Survolez-moi</BaseButton>
</BaseTooltip>`;

const rows: PropRow[] = [
  { name: 'content', type: 'string', default: '-', description: "Texte de l'info-bulle." },
];
</script>
