<template>
  <DocPage
    eyebrow="Patterns"
    title="Planification"
    description="Choisir une date et un créneau parmi des disponibilités réelles, ou saisir une date libre dans un formulaire."
  >
    <section class="doc-section">
      <h2>Prise de rendez-vous</h2>
      <p>
        Quand le choix se fait parmi des créneaux réellement disponibles :
        <router-link class="doc-link" to="/docs/calendar">Calendar</router-link> pour la date, puis
        une liste de créneaux à choisir.
      </p>
      <DemoBlock :code="planningCode" stack>
        <div class="planning">
          <div class="planning__grid">
            <BaseCalendar v-model="date" />
            <div class="planning__slots">
              <p class="planning__slots-label">
                Créneaux disponibles<template v-if="date"> — {{ formattedDate }}</template>
              </p>
              <div v-if="date" class="planning__slot-list">
                <button
                  v-for="slot in slots"
                  :key="slot"
                  type="button"
                  class="planning__slot"
                  :class="{ 'planning__slot--selected': slot === selectedSlot }"
                  @click="selectedSlot = slot"
                >
                  {{ slot }}
                </button>
              </div>
              <p v-else class="planning__slots-empty">Choisissez une date pour voir les créneaux.</p>
            </div>
          </div>

          <div class="planning__confirm">
            <BaseButton variant="primary" :disabled="!selectedSlot" @click="confirm">
              Confirmer le rendez-vous
            </BaseButton>
            <span v-if="confirmed" class="planning__confirmed">
              <BaseIcon name="check" :size="14" /> Rendez-vous confirmé le {{ formattedDate }} à {{ selectedSlot }}.
            </span>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Date libre dans un formulaire</h2>
      <p>
        Quand la date n'est pas contrainte par des disponibilités (planifier une intervention, fixer
        une échéance) : <router-link class="doc-link" to="/docs/datetime-picker">DateTime Picker</router-link>
        seul, dans un <router-link class="doc-link" to="/docs/field">Field</router-link>.
      </p>
      <DemoBlock :code="freeCode" stack>
        <div class="planning-free">
          <BaseField label="Date de l'intervention" hint="Format jour/mois/année, heure sur 24h.">
            <BaseDatetimePicker v-model="freeValue" placeholder="Planifier une intervention" />
          </BaseField>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Deux approches, selon le contexte</strong> : Calendar + créneaux pour un choix parmi des disponibilités réelles ; DateTime Picker seul pour une date libre dans un formulaire plus large.</li>
        <li>Les créneaux indisponibles n'apparaissent pas dans la liste, ou apparaissent désactivés avec une raison - jamais retirés sans explication.</li>
        <li><strong>Aucun créneau n'est présélectionné</strong> : le premier choix vient toujours de la personne.</li>
        <li>La confirmation reprend la date et l'heure en toutes lettres (« le 12 mars à 14h30 »), jamais un simple « Réservé ! » sans rappel du choix.</li>
        <li>La date sélectionnée est annoncée ailleurs qu'en couleur (texte, résumé) - même règle que <router-link class="doc-link" to="/docs/calendar">Calendar</router-link>.</li>
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
  BaseCalendar,
  BaseDatetimePicker,
  BaseField,
  BaseIcon,
} from '@tommaniglier/design-system-lib/vue';

const date = ref('');
const slots = ['9h00', '10h30', '14h00', '15h30', '17h00'];
const selectedSlot = ref('');
const confirmed = ref(false);

const formattedDate = computed(() => {
  if (!date.value) return '';
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(`${date.value}T00:00:00`),
  );
});

function confirm() {
  confirmed.value = true;
}

const freeValue = ref('');

const planningCode = `<BaseCalendar v-model="date" />

<div v-if="date" class="slots">
  <button v-for="slot in slots" :key="slot"
          :class="{ selected: slot === selectedSlot }"
          @click="selectedSlot = slot">
    {{ slot }}
  </button>
</div>

<BaseButton variant="primary" :disabled="!selectedSlot" @click="confirm">
  Confirmer le rendez-vous
</BaseButton>`;

const freeCode = `<BaseField label="Date de l'intervention" hint="Format jour/mois/année, heure sur 24h.">
  <BaseDatetimePicker v-model="value" placeholder="Planifier une intervention" />
</BaseField>`;
</script>

<style scoped lang="scss">
.planning {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.planning__grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.planning__slots {
  flex: 1;
  min-width: 220px;
}

.planning__slots-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  margin: 0 0 12px;
}

.planning__slots-empty {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}

.planning__slot-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.planning__slot {
  padding: 8px 14px;
  font-family: inherit;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-foreground);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background-color 0.12s ease,
    border-color 0.12s ease;

  &:hover {
    background: var(--color-muted);
  }
}

.planning__slot--selected {
  color: var(--color-primary-foreground);
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.planning__confirm {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.planning__confirmed {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}

.planning-free {
  width: 320px;
  max-width: 100%;
}
</style>
