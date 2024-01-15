<script setup lang="ts">

    import HeaderVue from "../components/global/header.vue"
    import DrawerVue from "../components/global/drawer.vue"

</script>


<template>


    <v-app>

        <HeaderVue />        
        
        <DrawerVue />

        <v-main>
            <v-container>
                <NuxtPage />
            </v-container>
        </v-main>

    </v-app>


</template>

