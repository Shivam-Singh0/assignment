import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { fileUploadReducer, getFilesReducer } from './Reducers'



const reducer = combineReducers({
    fileUpload: fileUploadReducer,
    getFiles: getFilesReducer,
})

const middleware = [thunk]


const intialstate = {

}

const store = createStore(reducer, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store
