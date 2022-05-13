import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/city";

const citiesUrl = (provinceId) => {
  return `${apiEndpoint}/${provinceId}`;
};

export function getCityByProvinceId(provinceId) {
  return http.get(citiesUrl(provinceId));
}
