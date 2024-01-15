<script setup lang="ts">
    import AuthVue from '@/components/auth/auth'
    import { useAuthStore } from '@/stores/auth'

    definePageMeta({
        layout: 'plain'
    })


    const authStore = useAuthStore();

    const onSubmit = () => {
        authStore.login()
        console.log("EMITED");
        
    }


</script>

<template>
    <div>
        <AuthVue type="Login" @onSubmit="onSubmit" />
    </div>
</template>