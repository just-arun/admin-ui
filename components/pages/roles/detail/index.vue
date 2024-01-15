<script setup lang="ts">
import { useRoleStore } from '@/stores/role'
import { useAccessesStore } from '@/stores/accesses'
import AccessWrapperVue from '@/components/pages/accesses/index.vue'

const accessesStore = useAccessesStore()
const props = defineProps(["variant"])

const roleStore = useRoleStore()


onMounted(() => {
    accessesStore.selected = roleStore.role.accesses.map((e) => e.id)
})

watch([
    () => accessesStore.selected,
    () => accessesStore.accesses,
], async ([newValue, oldValue]) => {
    console.log("WATCH]", newValue);
    roleStore.role.accesses = newValue.map((id) => ({ id: id }))
})

const router = useRouter()

const backBtn = () => {
    router.back()
}

</script>


<template>
    <v-card>
        <div class="d-flex" style="height:40px">
            <v-btn @click="backBtn()" >
                <template v-slot:prepend>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
                <span>back</span>


            </v-btn>
                
            <v-spacer></v-spacer>
            
            <v-btn 
            v-if="props.variant == 'NEW' && roleStore.role.name.length > 2" 
            @click="roleStore.createNew()"
            size="large" >save</v-btn>
        </div>
        <v-card-title primary-title>
            <div v-if="props.variant == 'EDIT'" class="d-flex" style="height:40px">
                    <span>
                        {{ props.variant }} Role:
                        <span class="text-uppercase">{{ roleStore.role.name }}</span>
                    </span>
                <v-spacer></v-spacer>
                    <v-btn v-if="roleStore.roleAccessChanged" @click="roleStore.updateRole()">
                        <template v-slot:prepend>
                            <v-icon>mdi-content-save-all</v-icon>
                        </template>
                        <span>update</span>
                    </v-btn>
            </div>
            <div
                v-else
                class="d-flex"
            >
            <v-text-field
                v-model="roleStore.role.name"
                name="name"
                label="Role Name"
                id="name"
                variant="outlined"
            ></v-text-field>
            </div>
        </v-card-title>
        <v-card-text>
            <AccessWrapperVue :selectable="true" />
        </v-card-text>
    </v-card>
</template>