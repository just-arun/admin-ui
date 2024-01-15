<script setup lang="ts">
import appSettingsVue from '@/components/pages/app-settings/index.vue'

const settingStore = useAppSettingsStore()

onMounted(() => {
    settingStore.fetchSettings();
})

onUnmounted(() => {
    settingStore.reset();
})

</script>


<template>
    <div>
        <appSettingsVue />
    </div>
</template>