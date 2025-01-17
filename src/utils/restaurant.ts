import customAxios from "@/service"

interface postRestaurant{
    image: File,
    name: {
        uz:string,
        ru:string,
        en:string,
        tr:string,
    },
    userId: string,
    languages: string[],
    description: string
}
interface editRestaurant{
    image: File,
    name: {
        uz:string,
        ru:string,
        en:string,
        tr:string,
    },
    id:string
    languages: string[]
}

export const restaurantUtils = {
    getRestaurant: async () => {
        const  {data} = await customAxios.get('restaurant/')
        return data
    },
    getRestaurantOneId: async (id:string) => {
        const  {data} = await customAxios.get(`restaurant/one/${id}`)
        return data
    },
    getRestaurantQrCode: async () => {
        const  {data} = await customAxios.get('restaurant/generate/qrcode')
        return data
    },
    postRestaurant: async ({image, languages, name,userId, description}:postRestaurant) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", JSON.stringify(name));
        formData.append("userId", userId);
        formData.append("description", description);
        formData.append("languages", JSON.stringify(languages));
        const  {data} = await customAxios.post('restaurant/', formData)
        return data
    },
    editRestaurant: async ({image, languages, name,id}:editRestaurant) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", JSON.stringify(name));
        formData.append("languages", JSON.stringify(languages));
        const  {data} = await customAxios.patch(`restaurant/${id}`, formData)
        return data
    },
    deleteRestuarant: async (id:string) => {
        const  {data} = await customAxios.delete(`restaurant/${id}`)
        return data
    }
}