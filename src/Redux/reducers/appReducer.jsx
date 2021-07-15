import types from '../actionTypes';

const initialState = {
    loginPageState: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOGIN_PAGE: {
            return {
                ...state,
                loginPageState: action.payload,
            };
        }
        default:
            return state;
    }
};

export default appReducer;
