import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/province";

const provinceUrl = (id) => {
  return `${apiEndpoint}/${id}`;
};

export function getProvinces() {
  return http.get(apiEndpoint);
}

export function getProvinceById(id) {
  return http.get(provinceUrl(id));
}
