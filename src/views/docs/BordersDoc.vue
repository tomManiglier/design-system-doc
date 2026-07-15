<template>
  <DocPage
    eyebrow="Fondations"
    title="Bordures, rayons & ombres"
    description="Comment délimiter une surface : bordure pour la structure, ombre pour l'élévation, rayon pour la famille de composant."
  >
    <section class="doc-section">
      <h2>Rayons</h2>
      <div class="radius-demo">
        <div v-for="r in radii" :key="r.token" class="radius-demo__item">
          <span class="radius-demo__box" :style="{ borderRadius: `var(${r.token})` }" />
          <code>{{ r.token }}</code>
          <span class="radius-demo__meta">{{ r.value }} · {{ r.usage }}</span>
        </div>
      </div>
      <ul class="doc-list">
        <li><code>--radius-sm</code> (8px) - petits éléments : badges, kbd, pastilles de couleur.</li>
        <li><code>--radius-md</code> (10px) - boutons, champs, selects, alertes.</li>
        <li><code>--radius-lg</code> (16px) - cards, dialogs, panneaux, blocs de démo.</li>
        <li>Rond complet (<code>999px</code>) - avatars, pastilles de statut, switch.</li>
        <li>Un élément n'a jamais un rayon plus grand que son conteneur.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Bordures</h2>
      <ul class="doc-list">
        <li>Une seule épaisseur : <strong>1px</strong>, couleur <code>--color-border</code>.</li>
        <li>La bordure marque une <strong>structure</strong> : le contour d'une card, une séparation, le contour d'un champ.</li>
        <li>Au survol, la bordure fonce plutôt que de s'épaissir - épaissir ferait bouger la mise en page.</li>
        <li>Le focus clavier n'utilise pas la bordure mais un <code>outline</code> autour de l'élément.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Ombres</h2>
      <div class="shadow-demo">
        <div class="shadow-demo__item" style="box-shadow: var(--shadow-sm)">
          <code>--shadow-sm</code>
          <span>Élévation légère : éléments posés</span>
        </div>
        <div class="shadow-demo__item" style="box-shadow: var(--shadow-md)">
          <code>--shadow-md</code>
          <span>Élévation franche : surfaces flottantes</span>
        </div>
      </div>
      <ul class="doc-list">
        <li>L'ombre marque l'<strong>élévation</strong> : un élément posé au-dessus de la page.</li>
        <li><code>--shadow-sm</code> - une ombre légère, pour les cards interactives au survol.</li>
        <li><code>--shadow-md</code> - une ombre plus marquée, pour tout ce qui flotte : dialogs, menus, popovers.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Bordure, ombre, ou les deux ?</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Situation</th><th>Choix</th></tr>
          </thead>
          <tbody>
            <tr><td>Card dans le flux de la page</td><td>Bordure seule</td></tr>
            <tr><td>Menu, popover, tooltip riche</td><td>Bordure + <code>--shadow-md</code></td></tr>
            <tr><td>Dialog / drawer</td><td>Bordure + <code>--shadow-md</code>, avec voile sur le fond</td></tr>
            <tr><td>Séparer deux contenus dans une même surface</td><td>Ni l'un ni l'autre : un <router-link class="doc-link" to="/docs/separator">Separator</router-link> ou de l'espacement</td></tr>
          </tbody>
        </table>
      </div>
      <p>En thème sombre, les ombres se voient peu : la bordure reste indispensable sur les surfaces flottantes.</p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';

const radii = [
  { token: '--radius-sm', value: '8px', usage: 'badges, kbd' },
  { token: '--radius-md', value: '10px', usage: 'boutons, champs' },
  { token: '--radius-lg', value: '16px', usage: 'cards, dialogs' },
];
</script>

<style scoped lang="scss">
.radius-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 20px;
}

.radius-demo__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: var(--text-xs);
}

.radius-demo__box {
  width: 96px;
  height: 64px;
  background: var(--color-muted);
  border: 1px solid var(--color-border);
}

.radius-demo__meta {
  color: var(--color-muted-foreground);
}

.shadow-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 20px;
}

.shadow-demo__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  min-width: 220px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  font-size: var(--text-xs);

  span {
    color: var(--color-muted-foreground);
  }
}
</style>
