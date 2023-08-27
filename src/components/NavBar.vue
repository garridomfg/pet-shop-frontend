<template>
  <v-toolbar color="primary">
    <v-container class="py-0 fill-height d-flex justify-space-between">
      <!-- Brand logo -->
      <div class="d-flex align-center" style="cursor: pointer" @click="goToHome">
        <finger-print />
        <finger-print-text />
      </div>
      <!-- /Brand logo -->
      <!-- Center menu -->
      <div class="d-flex align-center">
        <div v-for="dropdown in navDropDowns" :key="dropdown.label">
          <v-btn class="text-white" v-if="dropdown.options && dropdown.isDropDown">
            {{ dropdown.label }}
            <v-menu activator="parent">
              <v-list>
                <v-list-item
                  v-for="item in dropdown.options"
                  :key="item.label"
                  :value="item.label"
                  @click="handleNavigation(item.path)"
                >
                  <v-list-item-title>{{ item.label.value }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>

          <v-btn
            class="text-white"
            v-if="!dropdown.isDropDown"
            @click="handleNavigation(dropdown.options[0].path)"
          >
            {{ dropdown.options[0].label.value }}
          </v-btn>
        </div>
      </div>
      <!-- /Center menu -->
      <!-- Right menu -->
      <div class="d-flex align-center">
        <v-btn
          class="mx-1 text-white"
          variant="outlined"
          v-for="button in navButtons"
          :key="button.label"
          @click="button.fn"
          :prepend-icon="button.icon"
        >
          <template v-if="button.icon ? button.icon : undefined" v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          {{ button.label }}
          <span v-if="button.count >= 0">({{ button.count }})</span>
        </v-btn>
      </div>
      <!-- /Right menu -->
    </v-container>
  </v-toolbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, type Router } from 'vue-router'
import useNavBarOpts from '../composables/useNavBarOpts'
import { FingerPrint, FingerPrintText } from '@/assets/icons'

const router: Router = useRouter()
const { navDropDowns, navButtons } = useNavBarOpts()

const showMenu = ref<boolean>(false)

const goToHome = (): void => {
  router.push({ path: '/' })
  if (showMenu.value) closeNav()
}

const closeNav = (): void => {
  showMenu.value = false
}

const handleNavigation = (path: string): void => {
  router.push({ path })
  closeNav()
}
</script>
