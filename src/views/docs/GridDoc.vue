<template>
  <DocPage
    eyebrow="Fondations"
    title="Grille & layout"
    description="Largeurs de page, colonnes, gouttières et points de rupture pour construire des écrans cohérents du mobile au desktop."
  >
    <section class="doc-section">
      <h2>Conteneur de page</h2>
      <ul class="doc-list">
        <li>Largeur maximale du contenu : <strong>1280px</strong>, centré sur la page.</li>
        <li>Marge sur les côtés : <code>--space-6</code> (24px) sur desktop, <code>--space-4</code> (16px) en dessous de 640px.</li>
        <li>Pour un long texte à lire (pages de doc) : <strong>780px</strong> de large maximum.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Colonnes et gouttières</h2>
      <p>
        Les pages s'organisent en colonnes égales avec CSS Grid. Espace entre colonnes :
        <code>--space-5</code> (20px) pour une grille de cards, <code>--space-6</code> (24px)
        pour la mise en page générale.
      </p>
      <div class="grid-demo">
        <div v-for="n in 4" :key="n" class="grid-demo__col">{{ n }}</div>
      </div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Layout</th><th>Desktop</th><th>Tablette (&lt; 900px)</th><th>Mobile (&lt; 560px)</th></tr>
          </thead>
          <tbody>
            <tr><td>Grille de cards</td><td>4 colonnes</td><td>2 colonnes</td><td>1 colonne</td></tr>
            <tr><td>Formulaire</td><td>1 colonne (640px max)</td><td>1 colonne</td><td>1 colonne</td></tr>
            <tr><td>Doc / contenu + sidebar</td><td>220px + 1fr</td><td>Sidebar au-dessus (&lt; 820px)</td><td>Empilé</td></tr>
            <tr><td>Dashboard</td><td>12 colonnes implicites</td><td>6</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Points de rupture</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Seuil</th><th>Rôle</th></tr>
          </thead>
          <tbody>
            <tr><td><code>560px</code></td><td>Passage en une colonne, paddings réduits.</td></tr>
            <tr><td><code>820px</code></td><td>La sidebar de navigation passe au-dessus du contenu.</td></tr>
            <tr><td><code>900px</code></td><td>Les grilles 4 colonnes passent à 2.</td></tr>
            <tr><td><code>1280px</code></td><td>Largeur maximale : au-delà, le contenu est centré.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Construire une page</h2>
      <ul class="doc-list">
        <li>1. Un conteneur : largeur max 1280px, marge latérale <code>--space-6</code>.</li>
        <li>2. Des sections empilées, séparées par <code>--space-12</code> (48px).</li>
        <li>3. Dans chaque section, une grille de colonnes égales avec un écart de <code>--space-5</code>.</li>
        <li>4. Chaque composant gère son propre espacement interne ; la page ne s'occupe que de l'espace entre eux.</li>
        <li>5. Rétrécir la fenêtre pour vérifier chaque point de rupture : rien ne doit déborder.</li>
      </ul>
      <p>
        Les valeurs d'espacement viennent de la page
        <router-link class="doc-link" to="/docs/spacing">Espacement</router-link>.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>

<style scoped lang="scss">
.grid-demo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.grid-demo__col {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  background: var(--color-muted);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-sm);
}

@media (max-width: 900px) {
  .grid-demo {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid-demo {
    grid-template-columns: 1fr;
  }
}
</style>
