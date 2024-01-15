import { RolesService } from "~/service/roles";



export const useRoleStore = defineStore("roleStore", () => {

    const roles = ref([]);
    const search = ref("");
    const page = ref(1);
    const limit = ref(10);
    const total = ref(0);
    const loading = ref(false);

    const fetchRoles = async () => {
        try {
            loading.value = true
            roles.value = [];
            const { data } = await RolesService.getAll();
            roles.value = data.data.roles;
            loading.value = false
        } catch (err) {
            loading.value = false
            console.error(err);
        }
    }


    watch([page, limit, search], (_newData, _oldData) => {
        fetchRoles();
    })


    const headers = [
        {title: "ID", value: "id"},
        {title: "Name", value: "name"},
        {title: "Actions", value: "actions"},
    ];

    const roleFormCard = ref(false);

    const role = ref<any>(null);
    const accesses = ref([])

    const fetchSingleRole = async (id: any) => {
        try {
            role.value = null
            const { data } = await RolesService.getOne(id)
            let da = {...data.data.role}
            da.accesses = da.accesses.map((e: any) => ({id: e.id}))
            accesses.value = JSON.parse(JSON.stringify(da.accesses))
            role.value = da
        } catch (err) {
            console.error(err);
        }
    }

    const roleAccessChanged = computed(() => {
        return JSON.stringify(accesses.value) != JSON.stringify(role.value.accesses)
    })

    const updateRole = async () => {
        try {
            let payload = role.value.accesses
            const { data } = await RolesService
            .updateAccesses(role.value.id, {accesses: payload})
            await fetchSingleRole(role.value.id)
        } catch (err) {
            console.error(err);
        }
    }

    const router = useRouter()
    const createNew = async () => {
        try {
            await RolesService.saveOne(role.value)
            router.push("/roles")
        } catch (err) {
            console.error(err);
        }
    }

    return {
        roles, headers, fetchSingleRole, updateRole,loading,
        search, page, limit, total, accesses, createNew,
        roleFormCard, fetchRoles, role, roleAccessChanged,
    }
})




