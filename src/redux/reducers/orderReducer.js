import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ loading: false },
    (builder) => {
        builder

            .addCase("createOrderRequest", (state) => {
                state.loading = true;
            })

            .addCase("createOrderSuccess", (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })

            .addCase("createOrderFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase("clearError", (state) => {
                state.error = null;
            })

            .addCase("clearMessage", (state) => {
                state.message = null;
            })


            .addCase("paymentVerificationRequest", (state) => {
                state.loading = true;
            })

            .addCase("paymentVerificationSuccess", (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })

            .addCase("paymentVerificationFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
);



export const ordersReducer = createReducer({ orders: [] },
    (builder) => {
        builder

            .addCase("getMyOrdersRequest", (state) => {
                state.loading = true;
            })

            .addCase("getMyOrdersSuccess", (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            
            .addCase("getMyOrdersFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })



            .addCase("getOrderDetailsRequest", (state) => {
                state.loading = true;
            })

            .addCase("getOrderDetailsSuccess", (state, action) => {
                state.loading = false;
                state.order = action.payload;
            })

            .addCase("getOrderDetailsFailure", (state, action) => {
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


