import { createAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";

const initialState = localStorageService.getAuthData()
    ? {
          error: null,
          auth: localStorageService.getAuthData(),
          isLoggedIn: true,
      }
    : {
          error: null,
          auth: null,
          isLoggedIn: false,
      };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.auth = null;
        },
    },
});

const { reducer: userReducer, actions } = userSlice;
const { authRequested, authRequestSuccess, authRequestFailed, userLoggedOut } =
    actions;

const logoutRequested = createAction("user/logOutRequested");
const logoutFailed = createAction("user/logOutFailed");

export const login = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.login(payload);
        localStorageService.setAuthData(data.login, data.id);
        dispatch(
            authRequestSuccess({ userLogin: data.login, userId: data.id })
        );
        toast.success(`Welcome`);
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(logoutRequested());
    try {
        dispatch(userLoggedOut());
        localStorageService.removeAuthData();
        toast.success(`Bye!`);
    } catch (error) {
        dispatch(logoutFailed(error.message));
    }
};

export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getCurrentUserData = () => (state) => state.user.auth;
export const getCurrentUserId = () => (state) => state.user.auth.userId;
export const getUserError = () => (state) => state.user.error;

export default userReducer;
