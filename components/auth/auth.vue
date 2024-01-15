


<script setup lang="ts">
    import { ref, } from 'vue'
    const form = ref(null);


    const props = defineProps({
        type: {
            type: String,
            default: '',
            required: true
        }
    })

    const authStore = useAuthStore();


    const TitleText = computed(() => {
        switch (props.type) {
            case "Login":
                return "Login"
            case "ForgotPassword":
                return "Forgot Password"
            default:
                return "login"
        }
    })


    const submitBtnText = computed(() => {
        switch (props.type) {
            case "Login":
                return "LOGIN"
            case "ForgotPassword":
                return "SUBMIT"
            default:
                return "login"
        }
    })

    const emit = defineEmits()


    async function validate() {
        const { valid } = await form.value.validate()

        console.log(form);
        
        if (valid) emit("onSubmit", "")
    }

</script>

<template>
    <div>
        <v-card class="pa-4 " style="width:350px; max-width: 100%;">
            <h1 class="py-2">{{ TitleText }}</h1>

            <v-form ref="form" @submit.prevent="validate">
                
                <v-text-field
                    v-model="authStore.form.email"
                    :counter="10"
                    :rules="authStore.emailRules"
                    label="Email"
                    required
                    variant="outlined"
                ></v-text-field>
                
                
                <v-text-field
                    v-if="['Login'].includes(props.type)"
                    v-model="authStore.form.password"
                    :counter="10"
                    :rules="authStore.passwordRules"
                    label="Password"
                    required
                    type="password"
                    variant="outlined"
                ></v-text-field>

                <div class="py-2">
                    <v-btn :loading="authStore.loading" type="submit" block>{{ submitBtnText }}</v-btn>
                </div>

                <p class="py-2 text-center" v-if="props.type == 'Login'">
                    forgot password? click <nuxt-link to="/auth/forgot">here</nuxt-link>
                </p>

                <p class="py-2 text-center" v-if="props.type == 'ForgotPassword'">
                    go back to <nuxt-link to="/auth/login">login</nuxt-link>
                </p>

            </v-form>

        </v-card>
    </div>
</template>



