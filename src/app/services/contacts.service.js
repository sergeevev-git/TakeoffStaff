import httpService from "./http.service";

const contactsEndPoint = "todos/";

const contactsService = {
    fetchAll: async (userId) => {
        const { data } = await httpService.get(todosEndPoint, {
            params: { userId },
        });

        return data;
    },

    add: async (todo) => {
        const { data } = await httpService.post(todosEndPoint, todo);

        return data;
    },

    edit: async (payload) => {
        const { data } = await httpService.patch(
            todosEndPoint + `edit/${payload._id}`,
            payload
        );

        return data;
    },

    delete: async (id) => {
        const { data } = await httpService.delete(
            todosEndPoint + `delete/${id}`,
            { id }
        );

        return data;
    },
};

export default contactsService;
