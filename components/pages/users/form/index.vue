
<script setup lang="ts">
import { useUserStore } from '@/stores/user.ts'
import { useRoleStore } from '@/stores/role.ts'

const userStore = useUserStore()
const roleStore = useRoleStore()
const emit = defineEmits(["close"]);

onMounted(() => {
    roleStore.fetchRoles();
})

const form = ref(null);

const validate = async () => {
    const { valid } = await form.value.validate()

    if (valid) userStore.onSubmit();
}


</script>

<template>
    <v-card >
        <template v-slot:title class="">
            <div class="d-flex justify-space-between py-2">
                <span>User</span>
                <v-icon 
                @click="emit('close')"
                >mdi-close</v-icon>
            </div>
        </template>


        <template v-slot:text>
            <v-form ref="form" @submit.prevent="validate()">
                <v-text-field
                    v-model="userStore.userForm.userName"
                    :rules="userStore.userNameRules"
                    label="User Name"
                    required
                ></v-text-field>
        
                <v-text-field
                    v-model="userStore.userForm.email"
                    :rules="userStore.emailRules"
                    label="Email"
                    required
                ></v-text-field>
                
        
                <v-select
                    v-model="userStore.userForm.type"
                    :items="userStore.userTypeList"
                    label="Type"
                    required
                    :rules="userStore.userTypeRules"
                ></v-select>
        
                <v-select
                    v-model="userStore.userRoles"
                    :items="roleStore.roles"
                    label="Roles"
                    multiple
                    item-title="name"
                    item-value="id"
                    required
                    :rules="userStore.userRoleRules"
                ></v-select>
        
                <div>
                    <v-btn flat 
                    @click="userStore.userFormCard = false;userStore.cancelForm()" 
                    >cancel</v-btn>
                    <v-btn type="submit" >create</v-btn>
                </div>
            </v-form>
        </template>
        

    </v-card>
</template>