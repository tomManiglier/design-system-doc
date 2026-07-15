<template>
  <DocPage
    eyebrow="Démarrer"
    title="Typography"
    description="Styles de texte du design system : titres Quicksand, corps Helvetica, Roboto en complément."
  >
    <section class="doc-section">
      <h2>H1</h2>
      <DemoBlock :code="`<h1>Un design system moderne</h1>`" stack>
        <p class="t-h1">Un design system moderne</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>H2</h2>
      <DemoBlock :code="`<h2>Construire des interfaces cohérentes</h2>`" stack>
        <p class="t-h2">Construire des interfaces cohérentes</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>H3</h2>
      <DemoBlock :code="`<h3>Des composants accessibles</h3>`" stack>
        <p class="t-h3">Des composants accessibles</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>H4</h2>
      <DemoBlock :code="`<h4>Pensés pour durer</h4>`" stack>
        <p class="t-h4">Pensés pour durer</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Paragraph</h2>
      <DemoBlock :code="`<p>Le design system fournit...</p>`" stack>
        <p class="t-p">
          Le design system fournit un langage commun entre le design et le développement.
          Chaque composant respecte la même charte graphique.
        </p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Lead</h2>
      <DemoBlock :code="`<p class=&quot;lead&quot;>Une introduction mise en avant.</p>`" stack>
        <p class="t-lead">
          Une introduction mise en avant, plus grande et plus douce que le corps de texte.
        </p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Large</h2>
      <DemoBlock :code="`<div class=&quot;large&quot;>Texte large</div>`" stack>
        <p class="t-large">Vous êtes sûr de vouloir continuer ?</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Small</h2>
      <DemoBlock :code="`<small>Adresse e-mail</small>`" stack>
        <p class="t-small">Adresse e-mail</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Muted</h2>
      <DemoBlock :code="`<p class=&quot;muted&quot;>Entrez votre adresse e-mail.</p>`" stack>
        <p class="t-muted">Entrez votre adresse e-mail.</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Blockquote</h2>
      <DemoBlock :code="`<blockquote>« La qualité n'est jamais un accident. »</blockquote>`" stack>
        <blockquote class="t-blockquote">
          « La qualité n'est jamais un accident ; elle est toujours le résultat d'un effort
          intelligent. »
        </blockquote>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Inline Code</h2>
      <DemoBlock :code="`<code>npm install @acme/design-system</code>`" stack>
        <p class="t-p">
          Installez la librairie avec <code class="t-code">npm install @acme/design-system</code>.
        </p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>List</h2>
      <DemoBlock :code="listCode" stack>
        <ul class="t-list">
          <li>Des tokens partagés entre les équipes</li>
          <li>Des composants accessibles par défaut</li>
          <li>Une documentation vivante</li>
        </ul>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Table</h2>
      <DemoBlock :code="tableCode" stack>
        <div class="t-table-wrap">
          <table class="t-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Valeur</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bleu clair</td>
                <td>#009ADF</td>
                <td>Accent, liens, focus</td>
              </tr>
              <tr>
                <td>Bleu foncé</td>
                <td>#005CA9</td>
                <td>Survols, contrastes</td>
              </tr>
              <tr>
                <td>Signature</td>
                <td>Dégradé 45°</td>
                <td>Élément identitaire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Hiérarchie et usages</h2>
      <p>Chaque niveau a un rôle précis. Ne pas choisir un style pour sa taille, mais pour sa fonction :</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Style</th>
              <th>Token</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>H1</td><td><code>--text-3xl</code> · Quicksand bold</td><td>Titre de page. Un seul par écran.</td></tr>
            <tr><td>H2</td><td><code>--text-2xl</code> · Quicksand bold</td><td>Titre de section principale.</td></tr>
            <tr><td>H3</td><td><code>--text-xl</code> · Quicksand bold</td><td>Sous-section. Ne jamais sauter un niveau.</td></tr>
            <tr><td>H4</td><td><code>--text-lg</code> · Quicksand medium</td><td>Titre de card ou de panneau.</td></tr>
            <tr><td>Lead</td><td><code>--text-xl</code> · muted</td><td>Chapô sous un H1, une phrase maximum.</td></tr>
            <tr><td>Paragraph</td><td><code>--text-base</code></td><td>Corps de texte par défaut.</td></tr>
            <tr><td>Small / Muted</td><td><code>--text-sm</code></td><td>Labels, aides, métadonnées, légendes.</td></tr>
            <tr><td>Code</td><td><code>--font-mono</code></td><td>Valeurs techniques, tokens, extraits.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Densité</h2>
      <ul class="doc-list">
        <li>Corps de texte : lignes espacées (interligne <strong>1.6</strong>) pour rester agréable à lire.</li>
        <li>Titres : lignes plus resserrées, l'espacement diminue avec le niveau du titre.</li>
        <li>Tables et listes denses : texte plus petit (<code>--text-sm</code>), mais jamais en dessous de <code>--text-xs</code> pour du contenu à lire.</li>
        <li>Largeur de lecture : viser des lignes de 65 à 75 caractères, pas plus.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Règles éditoriales</h2>
      <ul class="doc-list">
        <li>Titres en phrase normale (« Créer un projet »), jamais tout en majuscules.</li>
        <li>Pas de point final dans les titres, labels et boutons ; un point dans les phrases d'aide et les messages.</li>
        <li>Unités et dates dans un format cohérent partout (24 px, 5 min, 12 mars 2026).</li>
        <li>Un même mot pour un même concept : un « projet » ne devient pas un « dossier » plus loin.</li>
        <li>Le gras pour ce qui est important, l'italique rarement, et jamais de souligné en dehors des liens.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const listCode = `<ul>
  <li>Des tokens partagés entre les équipes</li>
  <li>Des composants accessibles par défaut</li>
  <li>Une documentation vivante</li>
</ul>`;

const tableCode = `<table>
  <thead>...</thead>
  <tbody>...</tbody>
</table>`;
</script>

<style scoped lang="scss">
.t-h1 {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-3xl);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0;
}

.t-h2 {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-2xl);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.t-h3 {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
  line-height: 1.3;
  margin: 0;
}

.t-h4 {
  font-family: var(--font-title);
  font-weight: var(--weight-medium);
  font-size: var(--text-lg);
  line-height: 1.4;
  margin: 0;
}

.t-p {
  font-size: var(--text-base);
  line-height: 1.65;
  margin: 0;
}

.t-lead {
  font-size: var(--text-xl);
  line-height: 1.5;
  color: var(--color-muted-foreground);
  margin: 0;
}

.t-large {
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  margin: 0;
}

.t-small {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  line-height: 1;
  margin: 0;
}

.t-muted {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}

.t-blockquote {
  margin: 0;
  padding-left: 20px;
  border-left: 2px solid var(--color-border);
  font-style: italic;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-foreground);
}

.t-code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--color-muted);
  padding: 2px 6px;
  border-radius: 6px;
}

.t-list {
  list-style: square;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: var(--text-base);
  line-height: 1.5;
}

.t-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.t-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);

  th {
    text-align: left;
    font-weight: var(--weight-medium);
    color: var(--color-muted-foreground);
    padding: 10px 12px;
    border-bottom: 1px solid var(--color-border);
  }

  td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--color-border);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--color-muted);
  }
}
</style>
