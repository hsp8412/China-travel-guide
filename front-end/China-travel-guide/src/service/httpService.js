import axios from "axios";

// axios.interceptors.response.use(null, async (err) => {
//     this.$vToastify.error(err.response.data);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
