
<script setup lang="ts">

    import { useGlobalStore } from '@/stores/global'

    const global = useGlobalStore()

</script>



<template>


        <v-app-bar app scroll-threshold="0" title="Application Management">
            <v-btn icon="mdi-menu" @click="global.navDrawer = !global.navDrawer" ></v-btn>
        </v-app-bar>

</template>