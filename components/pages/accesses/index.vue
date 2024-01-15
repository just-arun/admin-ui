
<script setup lang="ts">
import { useAccessesStore } from '@/stores/accesses'

const props = defineProps(['selectable'])

const accessesStore = useAccessesStore()

onMounted(() => {
    accessesStore.fetchAccesses();
})


const loadItems = (e) => {
    console.log(e);
    accessesStore.page = e.page

}

</script>

<template>
    <div>
    <v-data-table-server
        :search="search"
        :headers="accessesStore.headers"
        :items="accessesStore.accesses"
        :items-length="accessesStore.total"
        v-model:items-per-page="accessesStore.limit"
        @update:options="loadItems"
        class="elevation-1"
        :show-select="props.selectable"
        v-model="accessesStore.selected"
    >



              <template v-slot:top>
                <v-toolbar
                  flat
                >
                
                  <v-toolbar-title>Accesses List</v-toolbar-title>
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
                    v-model="accessesStore.search"
                    hide-details clearable
                  ></v-text-field>


                  <v-spacer></v-spacer>

                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>












                        <v-btn prepend-icon="mdi-plus" size="large"
                            v-bind="props"
                        >New Accesses</v-btn>
















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
                  @click="accessesStore.fetchAccesses();"
                >
                  Reset
                </v-btn>
              </template>





</v-data-table-server>
    </div>
</template>