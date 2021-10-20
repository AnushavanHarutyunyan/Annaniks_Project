import { takeEvery, put, call } from '@redux-saga/core/effects';
import types from '../actionTypes';
import {
    setFoods,
    setOrRemoveLoading,
    setSignInUser,
    setUserById,
    isLogin,
    setErrorMessages,
    setFoodCategoriesNames,
    setFoodsTypesNames,
} from '../actions';
import UserEP from '../../service/api/routes/User';

//----------------------workers-----------------------//

function* workerGetFoodsSaga() {
    yield put(setOrRemoveLoading(false));
    // yield select()
    const foods = yield call(UserEP.getFoods);
    yield put(setFoods(foods));
    yield put(setOrRemoveLoading(true));
}

function* workerGetUserByIdSaga({ payload }) {
    const id = payload;
    try {
        yield put(setOrRemoveLoading(false));
        const userId = yield call(UserEP.getById, id);
        yield put(setUserById(userId));
        yield put(setOrRemoveLoading(true));
    } catch (error) {
        yield put(setOrRemoveLoading(true));
        console.log(error, 'errorGetUserById');
    }
}

function* workerSingInSaga({ payload }) {
    try {
        yield put(setOrRemoveLoading(false));
        const signInUserData = yield call(UserEP.submitLogin, payload);
        yield put(setSignInUser(signInUserData.data.user));
        if (signInUserData) {
            localStorage.setItem(
                'access',
                JSON.stringify(signInUserData.data.access)
            );
            localStorage.setItem(
                'user',
                JSON.stringify(signInUserData.data.user.user)
            );
            localStorage.setItem(
                'refresh',
                JSON.stringify(signInUserData.data.refresh)
            );
            yield put(isLogin(true));
        }
        yield put(setOrRemoveLoading(true));
    } catch (error) {
        yield put(setErrorMessages(error.message));
        yield put(setOrRemoveLoading(true));
    }
}

function* workerSingUpSaga({ payload }) {
    const second_request_obj = {
        email: payload.email,
        phone_number: payload.phone_number,
    };
    try {
        yield put(setOrRemoveLoading(false));
        const signUpData = yield call(
            UserEP.submitRegistration,
            second_request_obj
        );
        const registreted_userData = Object.assign(
            { confirm_code: signUpData.code, role_code: 'CL' },
            payload
        );
        yield call(UserEP.registeredUser, registreted_userData);
        yield put(setOrRemoveLoading(true));
    } catch (error) {
        console.log(error.message, 'error SingUp');
        yield put(setErrorMessages(error.message));
        yield put(setOrRemoveLoading(true));
    }
}

function* workerAuthUserSaga() {
    yield localStorage.removeItem('access');
    yield localStorage.removeItem('refresh');
    yield put(setSignInUser('{}'));
    yield put(isLogin(false));
}

function* workerGetFoodsCategoriesSaga({ payload }) {
    const categoriesFood = yield call(UserEP.getFoods, payload);
    yield put(setFoods(categoriesFood));
}

function* workerGetFoodsCategoriesNamesSaga() {
    const data = yield call(UserEP.getFoodCategoriesNames);
    yield put(setFoodCategoriesNames(data));
}

function* workerGetFoodsTypesNamesSaga() {
    const data = yield call(UserEP.getFoodsTypesNames);
    yield put(setFoodsTypesNames(data));
}

function* workerGetMeSaga() {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        yield put(setSignInUser(user));
    } catch (e) {
        if (e.status === 400 || 401) {
            console.log('eror getMe', e.statusText);
        }
    }
}

//----------------------watchers-----------------------//

export function* wathcherGetFoods() {
    yield takeEvery(types.GET_FOODS, workerGetFoodsSaga);
}

export function* watcherGetUserById() {
    yield takeEvery(types.GET_USER_BY_ID, workerGetUserByIdSaga);
}

export function* wathcherSignIn() {
    yield takeEvery(types.SIGN_IN, workerSingInSaga);
}

export function* wathcherSignUp() {
    yield takeEvery(types.SIGN_UP, workerSingUpSaga);
}

export function* wathcherAuthUser() {
    yield takeEvery(types.OUT_USER_PAGE, workerAuthUserSaga);
}

export function* watcherGetFoodsCategories() {
    yield takeEvery(types.GET_FOODS_CATEGORIES, workerGetFoodsCategoriesSaga);
}

export function* watcherGetFoodsCategoriesNames() {
    yield takeEvery(
        types.GET_FOODS_CATEGORIES_NAMES,
        workerGetFoodsCategoriesNamesSaga
    );
}

export function* watcherGetFoodsTypesNames() {
    yield takeEvery(types.GET_FOODS_TYPES_NAMES, workerGetFoodsTypesNamesSaga);
}

export function* watcherGetMe() {
    yield takeEvery(types.GET_ME, workerGetMeSaga);
}
