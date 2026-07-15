<template>
  <DocPage
    eyebrow="Feedback"
    title="Alert"
    description="Message contextuel pour informer, confirmer ou alerter l'utilisateur."
    status="stable"
  >
    <section class="doc-section">
      <h2>Variantes</h2>
      <DemoBlock :code="code" stack>
        <BaseAlert variant="info" title="Information">Une mise à jour est disponible.</BaseAlert>
        <BaseAlert variant="success" title="Succès">Vos modifications ont été enregistrées.</BaseAlert>
        <BaseAlert variant="warning" title="Attention">Cette action est irréversible.</BaseAlert>
        <BaseAlert variant="danger" title="Erreur">Impossible de contacter le serveur.</BaseAlert>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>L'alerte n'a pas d'état interactif : sa variante <em>est</em> son état, et porte le sens.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Variante</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><code>info</code></td><td>Information neutre, contexte, annonce.</td></tr>
            <tr><td><code>success</code></td><td>Confirmation d'une opération aboutie.</td></tr>
            <tr><td><code>warning</code></td><td>Situation à surveiller, action recommandée mais non bloquante.</td></tr>
            <tr><td><code>danger</code></td><td>Échec ou risque : quelque chose ne marche pas.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        L'alerte est persistante : elle reste tant que l'état dure. Pour un retour éphémère,
        voir le pattern <router-link class="doc-link" to="/patterns/feedback">Notifications &amp; feedback</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="alert"</code> : le contenu est annoncé dès son apparition, sans attendre que l'utilisateur y arrive.</li>
        <li><strong>Apparition</strong> - pour que l'annonce fonctionne, l'alerte doit être <strong>ajoutée</strong> au DOM au moment de l'événement, pas masquée en CSS.</li>
        <li><strong>Ne pas abuser</strong> - <code>role="alert"</code> interrompt la lecture en cours : réservé aux messages qui le méritent. Une alerte purement informative présente au chargement peut s'en passer.</li>
        <li><strong>Couleur</strong> - jamais seule porteuse du sens : le <code>title</code> dit ce qui se passe, indépendamment de la variante.</li>
        <li><strong>Contenu</strong> - dire quoi faire, pas seulement ce qui ne va pas.</li>
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
import { BaseAlert } from '@tom/design-system/vue';

const code = `<BaseAlert variant="info" title="Information">Une mise à jour est disponible.</BaseAlert>
<BaseAlert variant="success" title="Succès">Vos modifications ont été enregistrées.</BaseAlert>
<BaseAlert variant="warning" title="Attention">Cette action est irréversible.</BaseAlert>
<BaseAlert variant="danger" title="Erreur">Impossible de contacter le serveur.</BaseAlert>`;

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'danger'",
    default: "'info'",
    description: 'Tonalité du message.',
  },
  { name: 'title', type: 'string', default: '-', description: 'Titre affiché en gras.' },
];
</script>
