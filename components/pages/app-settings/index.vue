
<script setup lang="ts">
    import { useAppSettingsStore } from '@/stores/app-settings'

    const appSetting = useAppSettingsStore()

</script>

<template>
    <div style="padding-bottom: 50vh;">
        <h1>App Settings</h1>
        <form>
            <v-text-field
                v-model="appSetting.state.name"
                variant="outlined"
                label="Name"
                required
                class="pt-2"
            ></v-text-field>

            <v-switch
                v-model="appSetting.state.canLogin"
                hide-details
                color="#ff0051"
                :label="`Can Login`"
            ></v-switch>

            <v-switch
                v-model="appSetting.state.canRegister"
                hide-details
                color="#ff0051"
                :label="`Can Register`"
            ></v-switch>

            <v-switch
                disabled
                v-model="appSetting.state.httpOnlyCookie"
                hide-details
                color="#ff0051"
                :label="`Http Only Cookie`"
            ></v-switch>

            <v-text-field
                v-model="appSetting.state.accessTokenExpireTime"
                variant="outlined"
                label="Access token expire time"
                type="number"
                required
                class="pt-2"
            ></v-text-field>
            
            <v-text-field
                v-model="appSetting.state.refreshTokenExpireTime"
                variant="outlined"
                label="Refresh token expire time"
                type="number"
                required
                class="pt-2"
            ></v-text-field>
            
            
            <v-text-field
                v-model="appSetting.state.organizationEmailDomain"
                variant="outlined"
                label="Email Domain"
                required
                class="pt-2"
            ></v-text-field>


            <v-text-field
                v-model="appSetting.state.tokenPlacement"
                variant="outlined"
                label="Token Placement"
                required
                class="pt-2"
            ></v-text-field>

            <v-select
                variant="outlined"
                :items="appSetting.tokenPlacement"
                v-model="appSetting.state.tokenPlacement"
                label="Token Placement"
            ></v-select>
        
            <v-btn
              class="me-4"
            >
              submit
            </v-btn>
          </form>
    </div>
</template>