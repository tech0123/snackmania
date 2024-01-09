import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
    {
        loading: true,
        isAuthenticated: false,
        user: null,
        error: null,
        message: null,
    },
    (builder) => {
        builder
            .addCase("loadUserRequest", (state) => {
                state.loading = true;
            })

            .addCase("loadUserSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })

            .addCase("loadUserFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })


            .addCase("clearError", (state) => {
                state.error = null;
            })

            .addCase("clearMessage", (state) => {
                state.message = null;
            })


            .addCase("logoutRequest", (state) => {
                state.loading = true;
            })

            .addCase("logoutSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.message = action.payload;
            })

            .addCase("logoutFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })

    }
);
