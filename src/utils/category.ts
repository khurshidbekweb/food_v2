import customAxios from "@/service"

interface postCategory{
    name: Record<string, string> | string,
    image: string,
    restaurantId: string
}
interface editCategory{
    id: string
    name: Record<string, string> | string,
    image: string,
    restaurantId: string
}

export const categoryUtils = {
    getCategory: async (restaurantId: string) => {
        const {data} = await customAxios.get(`category/all/${restaurantId}`)
        return data
    },
    getCategoryOne: async (id: string) => {
        const {data} = await customAxios.get(`category/one/${id}`)
        return data
    },
    postCategory: async ({image, name, restaurantId}: postCategory) => {
        const {data} = await customAxios.post('category', {
            image, name, restaurantId
        })
        return data
    },
    editCategory: async ({image, name, restaurantId, id}: editCategory) => {
        const {data} = await customAxios.patch(`category/${id}`, {
            image, name, restaurantId
        })
        return data
    },
    deleteCategory: async (id: string) => {
        const {data} = await customAxios.delete(`category/${id}`)
        return data
    }
}