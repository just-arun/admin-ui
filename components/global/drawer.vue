
<script setup lang="ts">

    import { useGlobalStore } from '@/stores/global'

    const global = useGlobalStore()

</script>



<template>


    <v-navigation-drawer
        app
        dark
        elevation="0"
        v-model="global.navDrawer"
        :rail="global.navRail"
    >
        <v-list density="compact" nav>


            <v-list-item 
                v-for="(item, i) in global.navLink" 
                :key="`${item.label}-${i}`"
                :prepend-icon="item.icon" 
                :title="item.label" 
                :value="item.to"
                :to="item.to"
            ></v-list-item>

            <v-list-item
                :prepend-icon="!global.navRail ? 'mdi-chevron-left' : 'mdi-chevron-right'"
                title="MINEMISE"
                @click="global.navRail = !global.navRail"
            ></v-list-item>

        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn to="/auth/login" v-if="!global.navRail" color="error" :block="!global.navRail">logout</v-btn>
                <v-btn to="/auth/login" v-else icon="mdi-logout" ></v-btn>
            </div>
        </template>


    </v-navigation-drawer>


</template>

<style>



</style>
