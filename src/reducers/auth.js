import { AUTH, LOGOUT } from '../constants/ActionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('authData', JSON.stringify({ ...action?.payload }))
            return { ...state, authData: action?.payload }

        case LOGOUT:
            localStorage.removeItem('authData')
            return { ...state, authData: null }

        default:
            return state
    }
}

export default authReducer