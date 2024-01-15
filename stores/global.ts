import { defineStore } from 'pinia'

type NavLink = {
    label: string
    icon: string
    to: string
}

export const useGlobalStore = defineStore('global', () => {
    const navDrawer = ref(true);
    const navRail = ref(false);

    const navLink: NavLink[] = [
        {
            label: "Home",
            icon: "mdi-home",
            to: "/"
        },
        {
            label: "Users",
            icon: "mdi-account-group",
            to: "/users"
        },
        {
            label: "App Settings",
            icon: "mdi-application-cog",
            to: "/settings"
        },
        {
            label: "Roles",
            icon: "mdi-sitemap",
            to: "/roles",
        },
        {
            label: "Accesses",
            icon: "mdi-lock-check",
            to: "/accesses",
        },
        {
            label: "Service Map",
            icon: "mdi-routes",
            to: "/service-map"
        },
    ];
    
    return { navDrawer, navLink, navRail }
  })


