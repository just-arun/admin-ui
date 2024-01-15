<script setup lang="ts">
    import { useRoleStore } from '@/stores/role'
    import { useAccessesStore } from '@/stores/accesses'
    import { useRoute } from 'vue-router'
    import { onMounted, onUnmounted } from 'vue'
    import RoleDetail from '@/components/pages/roles/detail/index.vue'



    const roleStore = useRoleStore()
    const accessesStore = useAccessesStore()
    const route = useRoute();


    onMounted(() => {
        roleStore.role = {id: 0, name: "", accesses: []}
        accessesStore.fetchAccesses();
    })

    onUnmounted(() => {
        roleStore.role = null;
        accessesStore.roles.value = [];
    })



</script>

<template>

    <div>
        <div v-if="!!roleStore.role">
            
            <RoleDetail variant="NEW" />
        
        </div>
    </div>

</template>