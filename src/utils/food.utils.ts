import customAxios from "@/service"
interface poastFood{
    name: Record<string, string>,
    description: Record<string, string>,
    price: number,
    image: File,
    categoryId: string,
    restaurantId : string
}
interface editFood{
    name: Record<string, string>,
    description: Record<string, string>,
    price: number,
    image: File,
    id:string
}

export const foodUtils = {
    getFood: async (restuaranId: string) => {
        const {data} = await customAxios.get(`food/${restuaranId}`)
        return data
    },
    getFoodId: async (id: string) => {
        const {data} = await customAxios.get(`food/${id}`)
        return data
    },
    postFood: async ({categoryId,description,image,name,price,restaurantId}: poastFood) => {
        const formData = new FormData()
        formData.append('categoryId',categoryId)
        formData.append('description',JSON.stringify(description))
        formData.append('image',image)
        formData.append('name',JSON.stringify(name))
        formData.append('price', price.toString())
        formData.append('restaurantId',restaurantId)
        const {data} = await customAxios.post('food/', formData)
        return data
    },
    editFood: async ({id,description,image,name,price,}: editFood) => {
        const formData = new FormData()
        formData.append('description',JSON.stringify(description))
        formData.append('image',image)
        formData.append('name',JSON.stringify(name))
        formData.append('price', price.toString())
        const {data} = await customAxios.patch(`food/${id}`, formData)
        return data
    },
    deleteFood: async (id:string) => {
        const {data} = await customAxios.delete(`food/${id}`)
        return data
    }
}