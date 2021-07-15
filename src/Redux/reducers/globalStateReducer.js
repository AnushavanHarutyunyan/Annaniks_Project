import types from '../actionTypes';

const initialState = {
    isLoading: false,
};

const globalStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_OR_REMOVE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        default:
            return state;
    }
};

export default globalStateReducer;
