
<script setup lang="ts">

definePageMeta({
  middleware: [
    'auth',
  ],
});

</script>


<template>
    <div>
        <h1>Profile Page</h1>

        <nuxt-link to="/">home link</nuxt-link>
    </div>
</template>




