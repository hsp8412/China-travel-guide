import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/province";

export function getProvinces() {
    return http.get(apiEndpoint);
}


