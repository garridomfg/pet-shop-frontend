<template>
  <div class="pa-2" v-for="schema in fields" :key="schema.name" :class="schema.class">
    <Field
      v-model="schema.value"
      :type="schema.type"
      :name="schema.name"
      :rules="schema.rules"
      :as="schema.as || ''"
      v-slot="{ field, meta, errorMessage }"
    >
      <v-text-field
        v-bind="field"
        v-if="schema.type !== 'checkbox'"
        :label="schema.label"
        :type="schema.type"
        variant="outlined"
        :error="(meta.touched && !meta.valid) || !!errorMessage"
        :error-messages="errorMessage"
        :readonly="schema.readonly"
      ></v-text-field>
      <v-checkbox v-else v-model="schema.value" :label="schema.label"></v-checkbox>
      <ErrorMessage class="text-red" :name="schema.name" />
    </Field>
  </div>
</template>
<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { SchemaField } from '../interfaces/login'

defineProps<{
  fields: SchemaField[]
}>()
</script>
