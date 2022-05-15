import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/city";

const citiesUrl = (provinceId) => {
  return `${apiEndpoint}/province/${provinceId}`;
};

const cityUrl = (cityId) => {
  return `${apiEndpoint}/${cityId}`;
};

export function getCityByProvinceId(provinceId) {
  return http.get(citiesUrl(provinceId));
}

export function getCityById(cityId) {
  return http.get(cityUrl(cityId));
}
