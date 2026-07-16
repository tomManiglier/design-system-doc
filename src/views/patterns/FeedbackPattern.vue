<template>
  <DocPage
    eyebrow="Patterns"
    title="Notifications & feedback"
    description="Confirmer qu'une action a abouti, signaler ce qui se passe : choisir le bon canal selon l'urgence et la portée du message."
  >
    <section class="doc-section">
      <h2>Choisir le canal</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Besoin</th><th>Canal</th><th>Durée</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Confirmer une action réussie</td>
              <td>Feedback temporaire près de l'action</td>
              <td>2–3 s, disparaît seul</td>
            </tr>
            <tr>
              <td>Informer sur l'état d'une section</td>
              <td><router-link class="doc-link" to="/docs/alert">Alert</router-link> dans le flux</td>
              <td>Persistant tant que l'état dure</td>
            </tr>
            <tr>
              <td>Signaler une erreur de saisie</td>
              <td><router-link class="doc-link" to="/docs/field">Field</router-link> (message d'erreur)</td>
              <td>Jusqu'à correction</td>
            </tr>
            <tr>
              <td>Bloquer sur une décision</td>
              <td><router-link class="doc-link" to="/docs/dialog">Dialog</router-link></td>
              <td>Jusqu'à réponse</td>
            </tr>
            <tr>
              <td>Indiquer une opération en cours</td>
              <td><router-link class="doc-link" to="/docs/spinner">Spinner</router-link> / <router-link class="doc-link" to="/docs/progress">Progress</router-link></td>
              <td>Le temps de l'opération</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Feedback temporaire</h2>
      <p>
        Pour une action réussie sans conséquence : le retour apparaît près du déclencheur et
        s'efface seul. Il ne bloque rien.
      </p>
      <DemoBlock :code="inlineCode">
        <BaseButton variant="outline" @click="copy">
          <template #icon>
            <BaseIcon :name="copied ? 'check' : 'copy'" :size="16" />
          </template>
          {{ copied ? 'Copié' : 'Copier le lien' }}
        </BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Choisir la variante</h2>
      <p>
        Le choix de la variante porte du sens : ne pas utiliser <code>danger</code> pour attirer
        l'œil sur une information neutre. Les quatre variantes sont démontrées sur la page
        <router-link class="doc-link" to="/docs/alert">Alert</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Opération longue</h2>
      <p>
        Au-delà d'une seconde, montrer que quelque chose se passe : <code>Spinner</code> quand la
        durée est inconnue, <code>Progress</code> dès qu'elle est mesurable.
      </p>
      <DemoBlock :code="progressCode" stack>
        <div class="feedback-progress">
          <BaseProgress :value="progress" />
          <p class="feedback-progress__label">
            <template v-if="progress < 100">Import en cours - {{ progress }} %</template>
            <template v-else>Import terminé.</template>
          </p>
          <BaseButton variant="outline" @click="runImport">Relancer la démo</BaseButton>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Règles</h2>
      <ul class="doc-list">
        <li><strong>Proportionner le canal à l'enjeu :</strong> un Dialog pour une copie de lien est une interruption inutile ; une ligne de texte pour un échec critique est insuffisant.</li>
        <li><strong>Le feedback se place près de l'action</strong> qui l'a déclenché - pas dans un coin de l'écran où il passera inaperçu.</li>
        <li><strong>Un message temporaire ne porte jamais une information critique</strong> : ce qui doit être lu reste à l'écran.</li>
        <li>Une seule Alert par zone : empiler les bandeaux revient à n'en faire lire aucun.</li>
        <li>Rédaction courte et directe : « Projet créé. » plutôt que « Opération effectuée avec succès !!! ».</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import { BaseButton, BaseIcon, BaseProgress } from '@tommaniglier/design-system-lib/vue';

const copied = ref(false);
let copyTimer: ReturnType<typeof setTimeout> | undefined;

function copy() {
  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = false), 2000);
}

const progress = ref(64);
let importTimer: ReturnType<typeof setInterval> | undefined;

function runImport() {
  clearInterval(importTimer);
  progress.value = 0;
  importTimer = setInterval(() => {
    progress.value = Math.min(100, progress.value + 8);
    if (progress.value >= 100) clearInterval(importTimer);
  }, 220);
}

onBeforeUnmount(() => {
  clearTimeout(copyTimer);
  clearInterval(importTimer);
});

const inlineCode = `<BaseButton variant="outline" @click="copy">
  <template #icon>
    <BaseIcon :name="copied ? 'check' : 'copy'" :size="16" />
  </template>
  {{ copied ? 'Copié' : 'Copier le lien' }}
</BaseButton>`;

const progressCode = `<!-- durée mesurable -->
<BaseProgress :value="progress" />
<p>Import en cours - {{ progress }} %</p>

<!-- durée inconnue -->
<BaseSpinner :size="20" />`;
</script>

<style scoped lang="scss">
.feedback-progress {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  max-width: 380px;
}

.feedback-progress__label {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
