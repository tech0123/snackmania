import axios from "axios";
import { server1 } from "../store"


export const getDashboardStats = () => async (dispatch) => {

    try {
        dispatch({
            type: "getDashboardStatsRequest"
        })


        const { data } = await axios.get(`${server1}/admin/stats`, {
            withCredentials: true
        })

        dispatch({
            type: "getDashboardStatsSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "getDashboardStatsFailure",
            payload: error.response.data.message
        })
    }

}




export const getAdminUsers = () => async (dispatch) => {

    try {
        dispatch({
            type: "getAdminUsersRequest"
        })


        const { data } = await axios.get(`${server1}/admin/users`, {
            withCredentials: true
        })

        dispatch({
            type: "getAdminUsersSuccess",
            payload: data.users,
        })


    } catch (error) {

        dispatch({
            type: "getAdminUsersFailure",
            payload: error.response.data.message
        })
    }

}



export const getAdminOrders = () => async (dispatch) => {

    try {
        dispatch({
            type: "getAdminOrdersRequest"
        })


        const { data } = await axios.get(`${server1}/admin/orders`, {
            withCredentials: true
        })

        dispatch({
            type: "getAdminOrdersSuccess",
            payload: data.orders,
        })


    } catch (error) {

        dispatch({
            type: "getAdminOrdersFailure",
            payload: error.response.data.message
        })
    }

}




export const processOrder = (id) => async (dispatch) => {

    try {
        dispatch({
            type: "processOrderRequest"
        })


        const { data } = await axios.get(`${server1}/admin/order/${id}`, {
            withCredentials: true
        })

        dispatch({
            type: "processOrderSuccess",
            payload: data.message,
        })


    } catch (error) {

        dispatch({
            type: "processOrderFailure",
            payload: error.response.data.message
        })
    }

}