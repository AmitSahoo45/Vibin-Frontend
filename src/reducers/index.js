import { combineReducers } from 'redux'

import posts from './posts'
import authReducer from './auth'

export default combineReducers({
    posts,
    // React_Tip_2
    // As both the key and the value as same we can only key the first one
    authReducer
})
