import httpService from "./http.service";

const contactsEndPoint = "contacts/";

const contactsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(contactsEndPoint);

        return data;
    },

    add: async (payload) => {
        const { data } = await httpService.post(contactsEndPoint, payload);

        return data;
    },

    update: async (payload) => {
        const { data } = await httpService.patch(
            contactsEndPoint + `${payload.id}`,
            payload
        );

        return data;
    },

    delete: async (id) => {
        const { data } = await httpService.delete(contactsEndPoint + `${id}`);

        return data;
    },
};

export default contactsService;
