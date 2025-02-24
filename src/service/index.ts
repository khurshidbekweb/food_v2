import { BASE_URL_SERVER } from "@/constants";
import axios from "axios";

const customAxios = axios.create({
    baseURL: BASE_URL_SERVER,
    timeout: 10000
});

customAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;


customAxios.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response?.status === 422) {
            localStorage.clear()
            window.location.reload()
        }
        return Promise.reject(err);
    }
);

export default customAxios;