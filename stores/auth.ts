
import { AuthService } from '@/service/auth';


export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()

    const form = ref({
        email: "",
        password: "",
    });


    const emailRules = [
        (value:any)  => {
            if (!!!value) return 'Email is required!'
            if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return 'Must be a valid e-mail.'
            return true
        },
    ]
    
    const passwordRules = [
        (value:any)  => {
            if (!!!value) return 'Password is required!'
            return true
        },
    ]

    const loading = ref(false);
    const login = async () => {
        try {

            loading.value = true
            
            const { data } = await AuthService.getPublicKey()
            await AuthService.login(form.value.email, form.value.password, data.data.key )
            loading.value = false
            router.push("/")
        } catch (err) {
            loading.value = false
            console.error(err);
        }
    }

    return {
        form, emailRules, passwordRules,
        loading, login,
    }
})





