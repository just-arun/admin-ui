import { GeneralService } from '~/service/general'


type State = {
    id: number
    name: string
    canLogin: boolean
    canRegister: boolean
    httpOnlyCookie: boolean
    accessTokenExpireTime: number
    refreshTokenExpireTime: number
    organizationEmailDomain: string
    tokenPlacement: string
  }
  


export const useAppSettingsStore = defineStore('appSettings', () => {
  

  const state = ref<State>({
    id: 0,
    name: "",
    canLogin: false,
    canRegister: false,
    httpOnlyCookie: false,
    accessTokenExpireTime: 0,
    refreshTokenExpireTime: 0,
    organizationEmailDomain: "",
    tokenPlacement: "",
  })

  const tokenPlacement = ref(["header", "cookie"])


  const fetchSettings = async () => {
    try {
        const { data } = await GeneralService.getData()
        state.value = data.data.general
    } catch (err) {
        console.error(err);
    }
  }

  const reset = () => {
    state.value = {
    id: 0,
    name: "",
    canLogin: false,
    canRegister: false,
    httpOnlyCookie: false,
    accessTokenExpireTime: 0,
    refreshTokenExpireTime: 0,
    organizationEmailDomain: "",
    tokenPlacement: "",
    }
  }

  return {
    state,
    fetchSettings,
    tokenPlacement,
    reset,
  }

})


