<script setup lang="ts">
import { Config } from '@/config'

const config = useRuntimeConfig()


definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});

</script>


<template>

    <div>
        <h1>Home Page</h1>
        <nuxt-link to="/profile">profile link</nuxt-link>
        {{ Config.BASE_URL }} {{ config.public.BASE_URL }}
    </div>

</template>

~/config