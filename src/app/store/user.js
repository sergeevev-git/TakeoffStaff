import { createAction, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
// import { generetaAuthError } from "../utils/generateAuthError";
// import history from "../utils/history";

// const initialState = localStorageService.getAuthData()
//     ? {
//           entities: null,
//           isLoading: true,
//           error: null,
//           auth: { userId: localStorageService.getUserId() },
//           isLoggedIn: true,
//           dataLoaded: false,
//       }
//     : {
//           entities: null,
//           isLoading: false,
//           error: null,
//           auth: null,
//           isLoggedIn: false,
//           dataLoaded: false,
//       };

const userSlice = createSlice({
    name: "user",
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
        // authRequestSuccess: (state, action) => {
        //     state.auth = action.payload;
        //     state.isLoggedIn = true;
        // },
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

const { reducer: userReducer, actions } = userSlice;
const {
    // usersRequested,
    // usersReceved,
    // usersRequestFiled,
    // authRequestFailed,
    // authRequestSuccess,
    // userLoggedOut,
    // userUpdateSuccessed,
} = actions;

const authRequested = createAction("users/authRequested");
const userCreateRequested = createAction("users/userCreateRequested");
const createUserFailed = createAction("users/createUserFailed ");
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");

// export const login = (payload) => {
//     const { email, password } = payload;
//     try {
//         dispatch(authRequestSuccess({ userId: data.localId }));
//         localStorageService.setTokens(data);
//     } catch (error) {
//         const { code, message } = error.response.data.error;
//         if (code === 400) {
//             const errorMessage = generetaAuthError(message);
//             dispatch(authRequestFailed(errorMessage));
//         } else {
//             dispatch(authRequestFailed(error.message));
//         }
//     }
// };

// export const logOut = () => (dispatch) => {
//     localStorageService.removeAuthData();
//     dispatch(userLoggedOut());
//     history.push("/");
// };

export default userReducer;
