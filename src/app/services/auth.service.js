import axios from "axios";
import configFile from "../config/config.json";

const httpAuth = axios.create({
    baseURL: configFile.API_END_POINT + "users/",
});

const authService = {
    login: async (payload) => {
        const { data } = await httpAuth.get("/", payload);

        const user = data.find((user) => {
            if (
                user.login === payload.login &&
                user.password === payload.password
            ) {
                return user;
            }
        });

        if (user) {
            return user;
        } else {
            throw new Error("user not found");
        }
    },
};

export default authService;
