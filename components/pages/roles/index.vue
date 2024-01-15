

<script setup lang="ts">
import { useRoleStore } from '@/stores/role.ts'

const roleStore = useRoleStore();
const router = useRouter()


</script>


<template>


    <div>
        <v-data-table
            :headers="roleStore.headers"
            :items="roleStore.roles"
            item-key="name"
            :items-per-page="10"
            :search="roleStore.search"
            :loading="roleStore.loading"
        >
    
    
              <template v-slot:top>
                <v-toolbar
                  flat
                >
                
                  <v-toolbar-title>Role List</v-toolbar-title>
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
                    v-model="roleStore.search"
                  ></v-text-field>


                  <v-spacer></v-spacer>

                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>


                        <v-btn prepend-icon="mdi-plus" size="large"
                        to="/roles/new"
                        >new Role</v-btn>



                </v-toolbar>
              </template>
    



              
              <template v-slot:item.actions="{ item }">
                <v-btn
                    small
                    class="mr-2"
                    :to="`/roles/${item.id}`"
                    icon="mdi-pencil"
                ></v-btn>
                <v-icon small>
                  mdi-delete
                </v-icon>
              </template>


              
              
              <template v-slot:no-data>
                <v-btn
                  color="primary"
                  @click="roleStore.fetchRoles()"
                >
                  Reset
                </v-btn>
              </template>

    
    
    </v-data-table>

    </div>


</template>