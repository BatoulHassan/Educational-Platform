import axios from "axios";

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = "Bearer token";
    console.log('sending the request')
    return config;
  },
  (error) => {
     console.log(error)
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('request has been received')
    return response;
  },

  (error) => {
    console.log(error)
  }
);

export default axiosInstance;