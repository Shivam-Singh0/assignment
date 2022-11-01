import {
    FILE_UPLOAD_REQUEST,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_FAIL,
    FILE_UPLOAD_RESET,

    FILE_GET_REQUEST,
    FILE_GET_SUCCESS,
    FILE_GET_FAIL,
} from './constants'


export const fileUploadReducer = (state = {}, action) => {

    switch (action.type) {

        case FILE_UPLOAD_REQUEST:
            return { loading: true }

        case FILE_UPLOAD_SUCCESS:
            return { loading: false, uploaded: true }

        case FILE_UPLOAD_FAIL:
            return { loading: false, error: action.payload }

        case FILE_UPLOAD_RESET:
            return {}

        default:
            return state
    }

}
export const getFilesReducer = (state = { files: [] }, action) => {

    switch (action.type) {

        case FILE_GET_REQUEST:
            return { ...state, loading: true }

        case FILE_GET_SUCCESS:
            return { loading: false, files: action.payload }

        case FILE_GET_FAIL:
            return { loading: false, error: action.payload }


        default:
            return state
    }

}