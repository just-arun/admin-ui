import { UserService } from "~/service/user";
import moment from 'moment'
import { useForm } from "vee-validate";

export const useUserStore = defineStore("userStore", () => {
    const roleStore = useRoleStore()
    const headers = [
        { title: 'ID', value: 'id', },
        { title: 'Name', value: 'userName', },
        { title: 'Email', value: 'email', },
        { title: 'Type', value: 'type', },
        { title: 'Created At', value: 'createdAt' },
        { title: 'Actions', value: 'actions', sortable: false },
    ]
    const page = ref(1);
    const totalCount = ref(10);

    const users = ref<any>([]);


    const fetchUsers = async () => {
        try {
            const { data } = await UserService.getMany({})
            users.value = [...data.data.users].map((e) => {
                let el = {...e}
                el.createdAt = moment(e.createdAt).format("DD MMM, YYYY HH:mm:ss")
                return el
            });
            console.log(data.data.users);
            
        } catch (err) {
            console.error(err);
        }
    }

    const userFormCard = ref(false);
    const userFormCardType = ref<"CREATE"|"UPDATE"|"">("")

    const userForm = ref<any>({
        email: "",
        userName: "",
        roles: [],
        type: "UN_VERIFIED"
    });
    const userTypeList = ["UN_VERIFIED", "VERIFIED"]
    const userRoles = ref([]);

// watch works directly on a ref
    watch(userRoles, async (newQuestion, oldQuestion) => {
        userForm.value.roles = [...newQuestion
            .map((id) => roleStore.roles.find((el: any) => el.id == id))]
    })

    const cancelForm = () => {
        userForm.value = {
            email: "",
            userName: "",
            roles: [],
            type: "UN_VERIFIED"
        }
    }

    const emailRules = [
        (value:any)  => {
            if (!!!value) return 'Email is required!'
            if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return 'Must be a valid e-mail.'
            return true
        },
    ]
    
    const userNameRules = [
        (value:any)  => {
            if (!!!value) return 'User Name is required!'
            if (String(value).length <= 2) return 'User Name should be greater than 2 charecter'
            return true
        },
    ]
    
    const userTypeRules = [
        (value:any)  => {
            if (!!!value) return 'User Type is required!'
            return true
        },
    ]
    
    const userRoleRules = [
        (value:any)  => {
            if (!!!value.length) return 'User Should have atlease one rule'
            return true
        },
    ]

    const onSubmit = async () => {
        try {
            const res =  await UserService.saveUser(userForm.value)
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    return {
        headers, users, fetchUsers, userFormCard,
        userTypeList, userForm, userRoles, cancelForm,
        userFormCardType, onSubmit, emailRules, userNameRules,
        userTypeRules, userRoleRules,
    }
})