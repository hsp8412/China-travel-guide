import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/region";

const regionUrl =(id)=>{
    return `${apiEndpoint}/${id}`
}

export function getRegion(id) {
    return http.get(regionUrl(id));
}


