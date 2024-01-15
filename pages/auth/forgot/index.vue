<script setup lang="ts">
import AuthVue from '@/components/auth/auth'

definePageMeta({
  layout: 'plain'
})
</script>

<template>
    <div>
        <AuthVue type="ForgotPassword" />
    </div>
</template>