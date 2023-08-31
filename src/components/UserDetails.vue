<template>
  <div class="user-details-form elevation-2 px-16 py-12">
    <div class="d-flex justify-center">
      <div class="avatar-wrapper">
        <v-avatar class="text-white" variant="outlined" style="width: 140px; height: 140px">
          <v-img
            :src="usersStore.currentUser.avatar"
            :alt="usersStore.currentUser.first_name"
          ></v-img>
        </v-avatar>
      </div>
      <div class="user-details_grid">
        <v-row class="d-flex v-col-12">
          <v-col class="v-col-3 ml-3">
            <p class="label">Name</p>
            {{ userFullName }}
          </v-col>
          <v-col class="v-col-3 ml-3">
            <p class="label">Phone number</p>
            {{ usersStore.currentUser.phone_number }}
          </v-col>
          <v-col class="v-col-3 ml-3">
            <p class="label">Address</p>
            {{ usersStore.currentUser.address }}
          </v-col>
          <v-col class="v-col-3 ml-3">
            <p class="label">Date joined</p>
            {{ usersStore.currentUser.created_at }}
          </v-col>
          <v-col class="v-col-3 ml-3">
            <p class="label">Email</p>
            {{ usersStore.currentUser.email }}
          </v-col>
          <v-col class="v-col-3 ml-3">
            <p class="label">Marketing preferences</p>
            {{ marketingPreferences }}
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUsersStore } from '../stores/users'
import { computed } from 'vue'

const usersStore = useUsersStore()

const userFullName = computed(
  () => `${usersStore.currentUser.first_name} ${usersStore.currentUser.last_name}`
)

const marketingPreferences = computed(() => (usersStore.currentUser.is_marketing ? 'Si' : 'No'))
</script>
