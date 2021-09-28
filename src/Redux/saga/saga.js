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
        const signInUserData = yield call(UserEP.submitLogin, payload);
        console.log(signInUserData,'signInUserData')
        yield put(setSignInUser(signInUserData.data.user))
        if(signInUserData){
            localStorage.setItem('access', JSON.stringify(signInUserData.data.access));
            localStorage.setItem('refresh', JSON.stringify(signInUserData.data.refresh));
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
        console.log(registreted_userData);
        const regUserData = yield call(UserEP.registeredUser, registreted_userData);
        console.log(regUserData, 'reg_user');
        yield put(setOrRemoveLoading(true));
    } catch (error) {
        console.log(error.message,'error SingUp')
        yield put(setErrorMessages(error.message));
        yield put(setOrRemoveLoading(true));
    }
}

// function* workerSetSignInUser(){
    
// }

function* workerAuthUser() {
    yield localStorage.removeItem('access');
    yield localStorage.removeItem('refresh');
    yield put(setSignInUser({}));
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

// export function* whatcherSetSignInUser(){
//     yield takeEvery(types.SET_SIGNIN_USER_DATA,workerSetSignInUser)
// }

export function* wathcherAuthUser() {
    yield takeEvery(types.OUT_USER_PAGE, workerAuthUser);
}
