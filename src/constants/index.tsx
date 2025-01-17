
import { navLinkType } from "@/types";
import { CassetteTape, Home, Languages, Soup, User, Utensils } from "lucide-react";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";


export const BASE_URL_SERVER = import.meta.env.VITE_SERVER_BASE_URL; 
export const IMG_BASE_URL = import.meta.env.VITE_SERVER_IMG_BASE_URL; 


export const navLinkSuperAdmin:navLinkType[] = [
    {
        icon: <Home size={20}/>,
        path: '/dashboard',
        element: 'Home'
    },
    {
        icon: <Utensils size={20}/>,
        path: '/dashboard/restaran',
        element: 'Restaran'
    },
    {
        icon: <Languages size={20}/>,
        path: '/dashboard/language',
        element: 'Language'
    },
    {
        path: '/dashboard/user',
        icon: <User size={20}/>,
        element: 'User'
    },
    {
        path: '/dashboard/category-img',
        icon: <CassetteTape size={20}/>,
        element: 'Category Image'
    },
]

export const navLinkAdmin:navLinkType[] = [
    {
        icon: <Home size={20}/>,
        path: '/dashboard',
        element: 'Home'
    },
    {
        icon: <BiCategory size={20}/>,
        path: '/dashboard/category',
        element: 'Category'
    },
    {
        icon: <Soup size={20}/>,
        path: '/dashboard/food',
        element: 'Food'
    },
    {
        icon: <CgProfile size={20}/>,
        path: '/dashboard/profile',
        element: 'Profile'
    },

]