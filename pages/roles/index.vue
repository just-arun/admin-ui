<script setup lang="ts">
import RolesVue from '@/components/pages/roles/index.vue'
import { useRoleStore } from '@/stores/role.ts'

const roleStore = useRoleStore();

onMounted(() => {
    roleStore.fetchRoles();
})

onUnmounted(() => {
    roleStore.roles.value = [];
})




</script>

<template>

    <div>
        <RolesVue />
    </div>

</template>

