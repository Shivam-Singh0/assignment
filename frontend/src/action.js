import {
    FILE_UPLOAD_REQUEST,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_FAIL,

    FILE_GET_REQUEST,
    FILE_GET_SUCCESS,
    FILE_GET_FAIL,
} from './constants'

import axios from 'axios'

export const uploadFile = (update) => async (dispatch) => {
    try {
        dispatch({ type: FILE_UPLOAD_REQUEST })


        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }


        const { data } = await axios.post('/api/files/upload/', update, config)

        dispatch({
            type: FILE_UPLOAD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FILE_UPLOAD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const downloadFiles = () => async (dispatch) => {
    try {
        dispatch({ type: FILE_GET_REQUEST })




        const { data } = await axios.get('/api/files/get/')

        dispatch({
            type: FILE_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FILE_GET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}
