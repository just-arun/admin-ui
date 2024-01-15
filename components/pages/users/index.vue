<script setup lang="ts">

import { useUserStore } from '@/stores/user.ts'
import UserFormVue from './form/index.vue'

const userStore = useUserStore()

const itemsPerPage = ref(1)
const itemLength = ref(50)




</script>


<template>

    <div>
            <v-data-table-server
              :headers="userStore.headers"
              :items="userStore.users"
              :items-length="itemLength"
              v-model:items-per-page="itemsPerPage"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                >
                
                  <v-toolbar-title>User List</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>

                  <v-spacer></v-spacer>

                  <v-text-field
                    density="compact"
                    variant="solo"
                    label="Search users"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details clearable
                  ></v-text-field>


                  <v-spacer></v-spacer>

                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>












                <v-dialog
                    v-model="userStore.userFormCard"
                    max-width="500px"
                    persistent
                >
                    <template v-slot:activator="{ props }">
                        <v-btn prepend-icon="mdi-plus" size="large"
                            v-bind="props"
                        >new user</v-btn>
                    </template>
                    <div v-if="userStore.userFormCard">
                        <UserFormVue @close="userStore.userFormCard = false" />
                    </div>
                </v-dialog>
















                </v-toolbar>
              </template>
              
              
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                >
                  mdi-delete
                </v-icon>
              </template>
              
              
              <template v-slot:no-data>
                <v-btn
                  color="primary"
                >
                  Reset
                </v-btn>
              </template>
            </v-data-table-server>
    </div>

</template>