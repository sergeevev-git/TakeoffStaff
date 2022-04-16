import axios from "axios";
import configFile from "../config/config.json";

const axiosInstance = axios.create({
    baseURL: configFile.API_END_POINT,
});

axiosInstance.interceptors.request.use(
    function (config) {
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: axiosInstance.get,
    post: axiosInstance.post,
    delete: axiosInstance.delete,
    patch: axiosInstance.patch,
};

export default httpService;
