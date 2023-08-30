<template>
  <div class="d-flex align-center">
    <div v-for="dropdown in props.menuItems" :key="dropdown.label">
      <v-btn size="large" class="text-white" v-if="dropdown.options && dropdown.isDropDown">
        {{ dropdown.label }}

        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="item in dropdown.options"
              :key="item.label"
              :value="item.label"
              @click="props.handleNavigation(item.path)"
            >
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn
        class="text-white"
        v-if="!dropdown.isDropDown"
        @click="props.handleNavigation(dropdown.options[0].path)"
      >
        {{ dropdown.options[0].label }}
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NavDropDown } from '../interfaces/navbar'

const props = defineProps<{
  menuItems: NavDropDown[]
  handleNavigation: (path: string) => void
}>()
</script>
../interfaces/navbar