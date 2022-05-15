import http from "./httpService";
const apiUrl = import.meta.env.VITE_BASE_URL;

const apiEndpoint = apiUrl + "/mustDo";

const mustDosUrl = (cityId) => {
  return `${apiEndpoint}/city/${cityId}`;
};

export function getMustDosByCityId(id) {
  return http.get(mustDosUrl(id));
}
