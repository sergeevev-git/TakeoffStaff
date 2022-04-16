const USER_NAME = "username";
const USER_ID = "id";

export function setAuthData(login, id) {
    localStorage.setItem(USER_NAME, login);
    localStorage.setItem(USER_ID, id);
}

export function getAuthData() {
    if (localStorage.getItem(USER_NAME) && localStorage.getItem(USER_ID))
        return {
            userLogin: localStorage.getItem(USER_NAME),
            userId: localStorage.getItem(USER_ID),
        };
    else return null;
}

export function removeAuthData() {
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(USER_ID);
}

const localStorageService = {
    setAuthData,
    getAuthData,
    removeAuthData,
};

export default localStorageService;
