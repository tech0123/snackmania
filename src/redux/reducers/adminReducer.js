import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({ orders: [], users: [] },
    (builder) => {
        builder

            .addCase("getDashboardStatsRequest", (state) => {
                state.loading = true;
            })

            .addCase("getDashboardStatsSuccess", (state, action) => {
                state.loading = false;
                state.usersCount = action.payload.usersCount;
                state.ordersCount = action.payload.ordersCount;
                state.totalIncome = action.payload.totalIncome;
            })

            .addCase("getDashboardStatsFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })





            .addCase("getAdminUsersRequest", (state) => {
                state.loading = true;
            })

            .addCase("getAdminUsersSuccess", (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })

            .addCase("getAdminUsersFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })




            .addCase("getAdminOrdersRequest", (state) => {
                state.loading = true;
            })

            .addCase("getAdminOrdersSuccess", (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })

            .addCase("getAdminOrdersFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })



            .addCase("processOrderRequest", (state) => {
                state.loading = true;
            })

            .addCase("processOrderSuccess", (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })

            .addCase("processOrderFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })



            .addCase("clearError", (state) => {
                state.error = null;
            })

            .addCase("clearMessage", (state) => {
                state.message = null;
            })
    }
);