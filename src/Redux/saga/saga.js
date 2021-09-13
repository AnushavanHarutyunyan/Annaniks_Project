import { takeEvery, put, call } from '@redux-saga/core/effects';
import types from '../actionTypes';
import {
    setFoods,
    setOrRemoveLoading,
    setSignInUser,
    setUserById,
    isLogin,
    setErrorMessages,
} from '../actions';
import UserEP from '../../service/api/routes/User';

//----------------------workers-----------------------//

function* workerGetUsersSaga() {
    yield put(setOrRemoveLoading(false));
    const users = yield call(UserEP.getAll);
    yield put(setFoods(users));
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
        // yield()
    }
}

function* workerSingInSaga({ payload }) {
    try {
        yield put(setOrRemoveLoading(false));
        const userData = yield call(UserEP.submitLogin, payload);
        yield put(setSignInUser(userData.user));
        localStorage.setItem('access', JSON.stringify(userData.access));
        yield put(isLogin(true));
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
        console.log(signUpData);
        yield put(setOrRemoveLoading(true));
    } catch (error) {
        yield put(setErrorMessages(error.message));
        yield put(setOrRemoveLoading(true));
    }
}

function* workerAuthUser() {
    yield localStorage.removeItem('access');
    yield put(setSignInUser({}));
    yield put(isLogin(false));
}

//----------------------watchers-----------------------//
export function* wathcherLoadData() {
    yield takeEvery(types.GET_FOODS, workerGetUsersSaga);
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
    yield takeEvery(types.OUT_USER_PAGE, workerAuthUser);
}
