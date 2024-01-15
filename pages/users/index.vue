
<script setup lang="ts">
import UserVue from '@/components/pages/users/index'
import { useUserStore } from '@/stores/user.ts'


const userStore = useUserStore()

onMounted(() => {
    userStore.fetchUsers();
})


onUnmounted(() => {
    userStore.users.value = [];
})


</script>

<template>
    <div>
        <UserVue />
    </div>
</template>