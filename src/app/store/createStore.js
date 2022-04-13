import contactsReducer from "./contacts";
// import userReducer from "./user";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    contacts: contactsReducer,
    // user: userReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
