import { AccessService } from "~/service/access";



export const useAccessesStore = defineStore("accessesStore", () => {

    const accesses = ref([]);
    const search = ref("");
    const page = ref(1);
    const limit = ref(10);
    const total = ref(0);

    const fetchAccesses = async () => {
        try {
            const { data } = await AccessService.getAccess({
                limit: limit.value > 1 ? limit.value : 9999,
                search: search.value,
                page: page.value,
            })
            accesses.value = data.data.accesses;
            
            if (!!data.metaData) {
                total.value = data.metaData.total;
            }
        } catch (err) {
            console.error(err);
        }
    }


    watch([page, limit, search], (_newData, _oldData) => {
        fetchAccesses();
    })


    const headers = [
        {title: "ID", value: "id"},
        {title: "Name", value: "name"},
        {title: "Key", value: "key"},
    ];

    const roleFormCard = ref(false);

    const selected = ref([]);

    return {
        fetchAccesses, accesses, headers, selected,
        search, limit, page, total, roleFormCard,
    }
})




