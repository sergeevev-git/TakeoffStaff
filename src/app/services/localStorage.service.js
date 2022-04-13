const USER_NAME = "username";
const USER_ID = "id";

export function setAuthData({ name, id }) {
    localStorage.setItem(USER_NAME, name);
    localStorage.setItem(USER_ID, id);
}

export function getAuthData() {
    return localStorage.getItem(USER_ID);
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
