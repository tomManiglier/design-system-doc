<template>
  <DocPage
    eyebrow="Démarrer"
    title="Fondations"
    description="Les tokens de base - couleurs, dégradés et typographies - qui fondent l'identité visuelle du design system."
  >
    <section class="doc-section">
      <h2>Couleurs principales</h2>
      <p>Les trois couleurs socles de l'identité visuelle. Cliquez sur une valeur pour la copier.</p>
      <div class="palette">
        <ColorCard v-for="c in principales" :key="c.hex" :name="c.name" :hex="c.hex" />
      </div>
    </section>

    <section class="doc-section">
      <h2>Couleurs secondaires</h2>
      <p>À utiliser avec parcimonie pour dynamiser les interfaces.</p>
      <div class="palette">
        <ColorCard v-for="c in secondaires" :key="c.hex" :name="c.name" :hex="c.hex" />
      </div>
    </section>

    <section class="doc-section">
      <h2>Échelle neutre</h2>
      <p>Noir, gris et blanc utilisés dans l'interface : fonds, textes, bordures.</p>
      <div class="palette palette--neutral">
        <ColorCard v-for="c in neutres" :key="c.hex" :name="c.name" :hex="c.hex" />
      </div>
    </section>

    <section class="doc-section">
      <h2>Backgrounds</h2>
      <p>Les fonds de page du design system selon le thème actif.</p>
      <div class="palette palette--two">
        <ColorCard name="Light" hex="#FDFDFD" />
        <ColorCard name="Dark" hex="#111111" />
      </div>
    </section>

    <section class="doc-section">
      <h2>Dégradés signature</h2>
      <p>Le dégradé signature (bleu → violet) et le dégradé bleu (bleu clair → bleu foncé).</p>
      <div class="gradients">
        <div class="gradients__item">
          <span class="gradients__block" style="background: var(--gradient-brand)" />
          <span class="palette__name">Signature</span>
          <code>45° · #009adf → #7c2c7e</code>
        </div>
        <div class="gradients__item">
          <span class="gradients__block" style="background: var(--gradient-brand-cool)" />
          <span class="palette__name">Bleu</span>
          <code>45° · #009adf → #005ca9</code>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <h2>Typographies</h2>
      <p>
        Quicksand pour les titres, Helvetica pour les corps de texte, Roboto en police
        complémentaire. Voir la page <router-link class="doc-link" to="/docs/typography">Typography</router-link>.
      </p>
      <div class="type-grid">
        <div class="type-card">
          <p class="type-card__sample" style="font-family: var(--font-title)">Aa</p>
          <span class="palette__name">Quicksand</span>
          <code>--font-title · titres</code>
        </div>
        <div class="type-card">
          <p class="type-card__sample" style="font-family: var(--font-body)">Aa</p>
          <span class="palette__name">Helvetica</span>
          <code>--font-body · corps</code>
        </div>
        <div class="type-card">
          <p class="type-card__sample" style="font-family: var(--font-roboto)">Aa</p>
          <span class="palette__name">Roboto</span>
          <code>--font-roboto · complémentaire</code>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <h2>Rôles des couleurs</h2>
      <p>
        Les composants n'utilisent jamais une couleur brute : ils passent par un token qui change
        de valeur selon le thème (clair ou sombre). On choisit le rôle - fond, texte, bordure -
        pas la valeur.
      </p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Light</th>
              <th>Dark</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--color-background</code></td>
              <td>#FDFDFD</td>
              <td>#111111</td>
              <td>Fond de page. Une seule occurrence par écran.</td>
            </tr>
            <tr>
              <td><code>--color-surface</code></td>
              <td>#FFFFFF</td>
              <td>#1A1A1A</td>
              <td>Cards, panneaux, popovers : tout ce qui est posé sur le fond.</td>
            </tr>
            <tr>
              <td><code>--color-muted</code></td>
              <td>#F5F5F5</td>
              <td>#1E1E1E</td>
              <td>Fonds discrets : survols, code inline, en-têtes de table.</td>
            </tr>
            <tr>
              <td><code>--color-foreground</code></td>
              <td>#4A4A49</td>
              <td>#EDEDEC</td>
              <td>Texte principal, icônes actives.</td>
            </tr>
            <tr>
              <td><code>--color-muted-foreground</code></td>
              <td>#8A8A89</td>
              <td>#9A9A99</td>
              <td>Texte secondaire : aides, légendes, métadonnées.</td>
            </tr>
            <tr>
              <td><code>--color-border</code></td>
              <td>#ECECEC</td>
              <td>#2A2A2A</td>
              <td>Bordures et séparateurs. Jamais pour du texte.</td>
            </tr>
            <tr>
              <td><code>--color-primary</code></td>
              <td>#1A1A1A</td>
              <td>#FAFAFA</td>
              <td>Actions principales : fond des boutons <code>primary</code>.</td>
            </tr>
            <tr>
              <td><code>--color-accent</code></td>
              <td>#009ADF</td>
              <td>#009ADF</td>
              <td>Accent de marque : liens, éléments actifs, focus.</td>
            </tr>
            <tr>
              <td><code>--color-ring</code></td>
              <td>#009ADF</td>
              <td>#009ADF</td>
              <td>Anneau de focus clavier, via <code>outline</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Contrastes minimaux</h2>
      <ul class="doc-list">
        <li>Texte courant : ratio <strong>4.5:1</strong> minimum.</li>
        <li>Texte large (≥ 24px, ou ≥ 18.5px gras) : ratio <strong>3:1</strong> minimum.</li>
        <li>Bordures de champ, focus, icônes porteuses de sens : ratio <strong>3:1</strong> minimum contre le fond.</li>
        <li>Le jaune <code>#FEEB17</code> ne s'utilise jamais en texte sur fond clair : seulement en aplat décoratif, avec du texte noir dessus.</li>
      </ul>
      <p>
        Voir aussi <router-link class="doc-link" to="/docs/spacing">Espacement</router-link>,
        <router-link class="doc-link" to="/docs/borders">Bordures &amp; ombres</router-link> et
        <router-link class="doc-link" to="/docs/motion">Motion</router-link> pour les autres fondations.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import ColorCard from '../../components/docs/ColorCard.vue';

const principales = [
  { name: 'Bleu clair', hex: '#009ADF' },
  { name: 'Bleu foncé', hex: '#005CA9' },
  { name: 'Anthracite', hex: '#4A4A49' },
];

const secondaires = [
  { name: 'Violet', hex: '#7C2C7E' },
  { name: 'Aubergine', hex: '#4D267B' },
  { name: 'Jaune', hex: '#FEEB17' },
];

const neutres = [
  { name: 'Noir', hex: '#111111' },
  { name: 'Gris 900', hex: '#1A1A1A' },
  { name: 'Gris 700', hex: '#4A4A49' },
  { name: 'Gris 500', hex: '#8A8A89' },
  { name: 'Gris 300', hex: '#D4D4D4' },
  { name: 'Gris 200', hex: '#ECECEC' },
  { name: 'Gris 100', hex: '#F5F5F5' },
  { name: 'Blanc cassé', hex: '#FDFDFD' },
  { name: 'Blanc', hex: '#FFFFFF' },
];
</script>

<style scoped lang="scss">
.palette {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.palette__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}

.gradients {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.gradients__item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.gradients__block {
  height: 120px;
  border-radius: var(--radius-md);
}

.type-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.type-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.type-card__sample {
  font-size: 4rem;
  line-height: 1;
  margin: 0 0 8px;
}

code {
  font-size: 12px;
  color: var(--color-muted-foreground);
}

@media (max-width: 560px) {
  .type-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
