<template>
  <q-tr>
    <q-td auto-width>
      <q-chip icon="mdi-identifier" size="xs" label="New" />
    </q-td>
    <q-td>
      <q-input
        v-model="schoolYearRef.school_year"
        dense
        borderless
        :error="schoolYearRef.errors?.school_year !== undefined"
        :error-message="schoolYearRef.errors?.school_year?.toString()"
      />
    </q-td>
    <q-td>
      <q-btn-toggle
        :model-value="schoolYearRef.status"
        toggle-color="primary"
        :options="[
          { label: 'Open', value: 'open' },
          { label: 'Close', value: 'close' },
        ]"
        size="sm"
        @update:model-value="onToggleStatus"
      />
    </q-td>
    <q-td auto-width>
      <q-btn
        flat
        round
        dense
        size="xs"
        icon="mdi-content-save"
        color="positive"
        @click="onSaved"
      />
      <q-btn
        flat
        round
        dense
        size="xs"
        icon="mdi-delete"
        color="negative"
        @click="emit('deleted', schoolYearRef.$guid as string)"
      />
    </q-td>
  </q-tr>
</template>

<script setup lang="ts">
import { SchoolYear, SchoolYearStatus } from 'src/stores/school-year';
import { toRef, watch } from 'vue';

const emit = defineEmits<{
  saved: [id: string];
  deleted: [id: string];
  toggleStatus: [id: string, value: SchoolYearStatus];
}>();

const props = defineProps<{
  schoolYear: SchoolYear;
}>();

const schoolYearRef = toRef(props.schoolYear);

const onToggleStatus = (value: SchoolYearStatus) => {
  emit('toggleStatus', schoolYearRef.value.$guid as string, value);
};

const onSaved = () => {
  emit('saved', schoolYearRef.value.$guid as string);
};

watch(
  () => schoolYearRef.value.school_year,
  (newVal) => {
    schoolYearRef.value.school_year = newVal.toUpperCase();
  }
);
</script>
