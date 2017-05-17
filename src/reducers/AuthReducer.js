import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const InitialState = {
    email: '',
    password: '',
    user: null,
    loading: false,
    error: ''
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...InitialState,
                user: action.payload
            };
        case LOGIN_USER_FAIL: //show error message.
            return {
                ...state,
                error: 'Authentication Failed.',
                loading: false,
                password: '' //password reset.
            };
        default:
            return state;
    }
};
