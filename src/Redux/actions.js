import types from './actionTypes';

const getFoods = () => {
    return {
        type: types.GET_FOODS,
    };
};

const setFoods = (foodsData) => {
    return {
        type: types.SET_FOODS,
        payload: foodsData,
    };
};

const getUserById = (id) => {
    return {
        type: types.GET_USER_BY_ID,
        payload: id,
    };
};

const setUserById = (foodItem) => {
    return {
        type: types.SET_USER_BY_ID,
        payload: foodItem,
    };
};
const setOrRemoveLoading = (boolean) => {
    return {
        type: types.SET_OR_REMOVE_LOADING,
        payload: boolean,
    };
};
const toggleSignIn = (bool) => {
    return {
        type: types.TOGGLE_LOGIN_PAGE,
        payload: bool,
    };
};

export {
    getFoods,
    setFoods,
    setUserById,
    getUserById,
    toggleSignIn,
    setOrRemoveLoading,
};
