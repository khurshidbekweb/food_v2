import customAxios from "@/service";

interface postLanguage {
    code: string,
    name: string
    image: File
}
interface editLanguage {
    name: string
    image: File
    id: string
}


export const languageUtils = {
    getLanguage: async () => {
        const { data } = await customAxios.get("language");
        return data;
    },
    getLanguageId: async (id: string) => {
        const { data } = await customAxios.get(`language/${id}`);
        return data;
    },
    postLanguage: async ({ code, name, image }: postLanguage) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("code", code);
        const { data } = await customAxios.post("language", formData);
        return data;
    },
    pachtLanguage: async ({ id, name, image }: editLanguage) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        const { data } = await customAxios.patch(`language/${id}`, formData);
        return data;
    },
    deletLanguage: async (id: string) => {
        const { data } = await customAxios.delete(`language/${id}`);
        return data;
    },
}