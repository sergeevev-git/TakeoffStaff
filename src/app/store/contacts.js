import { createAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsService from "../services/contacts.service";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: null,
        isLoading: false,
        dataLoaded: false,
        error: null,
    },
    reducers: {
        contactsRequested: (state) => {
            state.isLoading = true;
        },
        contactsReceved: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        contactsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        contactAdded: (state, action) => {
            state.entities.push(action.payload);
        },
        contactUpdated: (state, action) => {
            const elementIndex = state.entities.findIndex(
                (c) => c.id === action.payload.id
            );
            state.entities[elementIndex] = {
                ...state.entities[elementIndex],
                ...action.payload,
            };
        },
        contactRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c.id !== action.payload
            );
        },
    },
});

const { reducer: contactsReducer, actions } = contactsSlice;
const {
    contactsRequested,
    contactsReceved,
    contactsRequestFailed,
    contactAdded,
    contactUpdated,
    contactRemoved,
} = actions;

const contactCreateRequested = createAction("contacts/contactCreateRequested");
const createContactFailed = createAction("contacts/createContactFailed ");
const contactUpdateRequested = createAction("contacts/contactUpdateRequested");
const contactUpdateFailed = createAction("contacts/contactUpdateFailed");
const contactDeleteRequested = createAction("contacts/contactDeleteRequested");
const contactDeleteFailed = createAction("contacts/contactDeleteFailed");

export const loadContacts = () => async (dispatch) => {
    dispatch(contactsRequested());
    try {
        const data = await contactsService.fetchAll();
        dispatch(contactsReceved(data));
    } catch (error) {
        dispatch(contactsRequestFailed(error.message));
    }
};

export const addContact = (payload) => async (dispatch) => {
    dispatch(contactCreateRequested());
    try {
        const contact = await contactsService.add({
            id: nanoid(),
            ...payload,
        });
        dispatch(contactAdded(contact));
    } catch (error) {
        dispatch(contactDeleteFailed(error.message));
    }
};

export const updateContact = (payload) => async (dispatch) => {
    dispatch(contactUpdateRequested());
    try {
        const contact = await contactsService.update(payload);
        dispatch(contactUpdated(contact));
    } catch (error) {
        dispatch(contactUpdateFailed(error.message));
    }
};

export const removeContact = (id) => async (dispatch) => {
    dispatch(contactDeleteRequested());
    try {
        const data = await contactsService.delete(id);
        if (JSON.stringify(data) === "{}") {
            dispatch(contactRemoved(id));
        }
    } catch (error) {
        dispatch(createContactFailed(error.message));
    }
};

export const getContactsList = () => (state) => state.contacts.entities;
export const getDataStatus = () => (state) => state.contacts.dataLoaded;
export const getContactsLoadingStatus = () => (state) =>
    state.contacts.isLoading;

export default contactsReducer;
