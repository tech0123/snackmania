import axios from "axios";
import { server1 } from "../store"


export const loadUser = () => async (dispatch) => {

    try {
        dispatch({
            type: "loadUserRequest"
        })


        const { data } = await axios.get(`${server1}/me`, {
            withCredentials: true
        })

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        })


    } catch (error) {

        dispatch({
            type: "loadUserFailure",
            payload: error.response.data.message
        })
    }

}



export const logout = () => async (dispatch) => {

    try {
        dispatch({
            type: "logoutRequest"
        })


        const { data } = await axios.get(`${server1}/logout`, {
            withCredentials: true
        })


        dispatch({
            type: "logoutSuccess",
            payload: data.message
        })


    } catch (error) {

        dispatch({
            type: "logoutFailure",
            payload: error.response.data.message
        })
    }

}