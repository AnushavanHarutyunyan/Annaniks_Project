import types from '../actionTypes';

const initialState = {
    userData: {},
    isLogin: false,
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SIGNIN_USER_DATA: {
            return {
                ...state,
                userData: action.payload,
            };
        }
        case types.IS_LOGIN: {
            return {
                ...state,
                isLogin: action.payload,
            };
        }
        default:
            return state;
    }
};

export default userDataReducer;
