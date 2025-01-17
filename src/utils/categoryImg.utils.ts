import customAxios from "@/service"

interface addCategoryImg{
    description: Record<string, string>
    image: File
}
interface editCategoryImg{
    description:  Record<string, string>
    image: File,
    id:string
}

export const categoryImgUtils = {
    getcategoryImg: async () => {
        const {data} = await customAxios.get('category-image/all')
        return data
    },
    getcategoryImgOneId: async (id:string) => {
        const {data} = await customAxios.get(`category-image/one/${id}`)
        return data
    },
    postCategoryImg: async ({description, image}:addCategoryImg) => {
        const formData = new FormData()
        formData.append('description', JSON.stringify(description))
        formData.append('image', image)
        const {data} = await customAxios.post('category-image', formData)
        return data
    },
    editCategoryImg: async ({description, image, id}: editCategoryImg) => {        
        const formData = new FormData()
        formData.append('description', JSON.stringify(description))
        formData.append('image', image)
        const {data} = await customAxios.patch(`category-image/${id}`)
        return data
    },
    deleteCategoryImg: async (id:string) => {
        const {data} = await customAxios.delete(`category-image/${id}`)
        return data
    }
}