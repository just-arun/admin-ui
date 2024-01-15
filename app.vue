<script setup lang="ts">

  const config = useRuntimeConfig();
  
  onBeforeMount(() => {

    window.env = config.public

    console.log(window.env);
    
  })

</script>


<template>
  <NuxtLayout>
  </NuxtLayout>
</template>
