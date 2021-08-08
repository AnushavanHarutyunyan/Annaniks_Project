import types from '../actionTypes';

const initialState = {
    isLoading: true,
    errorMessage: '',
};

const globalStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_OR_REMOVE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case types.SET_ERROR_MESSAGES: {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        default:
            return state;
    }
};

export default globalStateReducer;
