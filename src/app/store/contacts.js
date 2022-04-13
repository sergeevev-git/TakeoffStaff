import { createAction, createSlice } from "@reduxjs/toolkit";
import contacts from "../mockData/contacts.json";
import { nanoid } from "nanoid";
import localStorageService from "../services/localStorage.service";

// import { generetaAuthError } from "../utils/generateAuthError";

// import history from "../utils/history";

const initialState = localStorageService.getAuthData()
    ? {
          entities: contacts,
          error: null,
          auth: { userId: localStorageService.getAuthData() },
          isLoggedIn: true,
      }
    : {
          entities: contacts,
          error: null,
          auth: null,
          isLoggedIn: false,
      };

// const initialState = {
//     entities: contacts,
//     error: null,
//     auth: { userId: localStorageService.getAuthData() },
//     isLoggedIn: true,
// };

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        // usersRequested: (state) => {
        //     state.isLoading = true;
        // },
        // usersReceved: (state, action) => {
        //     state.entities = action.payload;
        //     state.dataLoaded = true;
        //     state.isLoading = false;
        // },
        // usersRequestFailed: (state, action) => {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // },
        authSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        // authRequestFailed: (state, action) => {
        //     state.error = action.payload;
        // },
        contactAdded: (state, action) => {
            state.entities.push(action.payload);
        },
        contactRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        // userLoggedOut: (state) => {
        //     state.entities = null;
        //     state.isLoggedIn = false;
        //     state.auth = null;
        //     state.dataLoaded = false;
        // },
        // userUpdateSuccessed: (state, action) => {
        //     state.entities[
        //         state.entities.findIndex((u) => u._id === action.payload._id)
        //     ] = action.payload;
        // },
        // authRequested: (state) => {
        //     state.error = null;
        // },
    },
});

const { reducer: contactsReducer, actions } = contactsSlice;
const {
    // usersRequested,
    // usersReceved,
    // usersRequestFiled,
    // authRequestFailed,
    authSuccess,
    contactAdded,
    contactRemoved,
    // userLoggedOut,
    // userUpdateSuccessed,
} = actions;

const authRequested = createAction("users/authRequested");
const userCreateRequested = createAction("users/userCreateRequested");
const createUserFailed = createAction("users/createUserFailed ");
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");

export const login = (payload) => (dispatch) => {
    const { login, password } = payload;
    { _id: nanoid(), ...payload })
    try {
        dispatch(authSuccess({ userId: data.localId }));
        localStorageService.setAuthData(data);
        // history.push(redirect);
    } catch (error) {
        const { code, message } = error.response.data.error;
        if (code === 400) {
            const errorMessage = generetaAuthError(message);
            dispatch(authRequestFailed(errorMessage));
        } else {
            dispatch(authRequestFailed(error.message));
        }
    }
};

// export const signUp =
//     ({ email, password, ...rest }) =>
//     async (dispatch) => {
//         dispatch(authRequested());
//         try {
//             const data = await authService.register({ email, password });
//             localStorageService.setTokens(data);
//             dispatch(authRequestSuccess({ userId: data.localId }));
//             dispatch(
//                 createUser({
//                     _id: data.localId,
//                     email,
//                     rate: getRandomInt(1, 5),
//                     completedMeetings: getRandomInt(0, 200),
//                     image: `https://avatars.dicebear.com/api/avataaars/${(
//                         Math.random() + 1
//                     )
//                         .toString(36)
//                         .substring(7)}.svg`,
//                     ...rest,
//                 })
//             );
//         } catch (error) {
//             dispatch(authRequestFailed(error.message));
//         }
//     };
// export const logOut = () => (dispatch) => {
//     localStorageService.removeAuthData();
//     dispatch(userLoggedOut());
//     history.push("/");
// };

export const addContact = (payload) => (dispatch) => {
    dispatch(contactAdded({ _id: nanoid(), ...payload}));
};

export const removeContact = (payload) => (dispatch) => {
    console.log(payload);
    dispatch(contactRemoved(payload));
};

// export const loadUsersList = () => async (dispatch) => {
//     dispatch(usersRequested());
//     try {
//         const { content } = await userService.get();
//         dispatch(usersReceved(content));
//     } catch (error) {
//         dispatch(usersRequestFiled(error.message));
//     }
// };
// export const updateUser = (payload) => async (dispatch) => {
//     dispatch(userUpdateRequested());
//     try {
//         const { content } = await userService.update(payload);
//         dispatch(userUpdateSuccessed(content));
//         history.push(`/users/${content._id}`);
//     } catch (error) {
//         dispatch(userUpdateFailed(error.message));
//     }
// };

export const getContactsList = () => (state) => state.contacts.entities;

// export const getCurrentUserData = () => (state) => {
//     return state.users.entities
//         ? state.users.entities.find((u) => u._id === state.users.auth.userId)
//         : null;
// };
// export const getUserById = (userId) => (state) => {
//     if (state.users.entities) {
//         return state.users.entities.find((u) => u._id === userId);
//     }
// };

// export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
// export const getDataStatus = () => (state) => state.users.dataLoaded;
// export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
// export const getCurrentUserId = () => (state) => state.users.auth.userId;
// export const getAuthErrors = () => (state) => state.users.error;
export default contactsReducer;
