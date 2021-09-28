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

const signIn = (data) => {
    return {
        type: types.SIGN_IN,
        payload: data,
    };
};

const signUp = (data) => {
    return {
        type: types.SIGN_UP,
        payload: data,
    };
};

const isLogin = (boolean) => {
    return {
        type: types.IS_LOGIN,
        payload: boolean,
    };
};
const setSignInUser = (userData) => {
    return {
        type: types.SET_SIGNIN_USER_DATA,
        payload: userData,
    };
};

const outUserPage = () => {
    return {
        type: types.OUT_USER_PAGE,
    };
};

const setErrorMessages = (errorMessage) => {
    return {
        type: types.SET_ERROR_MESSAGES,
        payload: errorMessage,
    };
};

export {
    getFoods,
    setFoods,
    setUserById,
    getUserById,
    signIn,
    signUp,
    isLogin,
    setOrRemoveLoading,
    setSignInUser,
    outUserPage,
    setErrorMessages,
};
