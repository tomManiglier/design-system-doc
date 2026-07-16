<template>
  <DocPage
    eyebrow="Formulaires"
    title="Fieldset"
    description="Regroupe des champs liés sous une légende commune."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="fieldset-w">
          <BaseFieldset legend="Livraison" description="Adresse utilisée pour l'expédition.">
            <BaseField label="Adresse">
              <BaseInput v-model="address" placeholder="1 rue de la Paix" />
            </BaseField>
            <BaseField label="Ville">
              <BaseInput v-model="city" placeholder="Paris" />
            </BaseField>
          </BaseFieldset>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>Le fieldset est un conteneur : il n'a pas d'état propre. Il rend une légende et empile ses champs avec un espacement régulier.</p>
      <p>Ses enfants (<router-link class="doc-link" to="/docs/field">Field</router-link>, <router-link class="doc-link" to="/docs/checkbox">Checkbox</router-link>, <router-link class="doc-link" to="/docs/radio">Radio Group</router-link>) portent leurs propres états.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Légende</strong> - nomme le groupe et est annoncée avec chaque champ : c'est l'intérêt du composant. Un fieldset sans légende n'apporte rien.</li>
        <li><strong>Quand l'utiliser</strong> - dès que plusieurs contrôles répondent à une même question (groupe de cases, boutons radio, adresse en plusieurs champs).</li>
        <li><strong>Ne pas empiler</strong> - un fieldset dans un fieldset alourdit chaque annonce : une seule profondeur.</li>
        <li><strong>Pas décoratif</strong> - pour un simple regroupement visuel, utiliser une <router-link class="doc-link" to="/docs/card">Card</router-link> ou de l'espacement.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseFieldset, BaseField, BaseInput } from '@tommaniglier/design-system-lib/vue';

const address = ref('');
const city = ref('');

const code = `<BaseFieldset legend="Livraison" description="Adresse utilisée pour l'expédition.">
  <BaseField label="Adresse">
    <BaseInput v-model="address" placeholder="1 rue de la Paix" />
  </BaseField>
  <BaseField label="Ville">
    <BaseInput v-model="city" placeholder="Paris" />
  </BaseField>
</BaseFieldset>`;

const rows: PropRow[] = [
  { name: 'legend', type: 'string', default: '-', description: 'Titre du groupe de champs.' },
  { name: 'description', type: 'string', default: '-', description: 'Texte descriptif sous la légende.' },
];
</script>

<style scoped lang="scss">
.fieldset-w {
  width: 420px;
  max-width: 100%;
}
</style>
