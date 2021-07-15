import { takeEvery, put, call } from '@redux-saga/core/effects';
import types from '../actionTypes';
import { setFoods, setOrRemoveLoading, setUserById } from '../actions';
import UserEP from '../../service/api/routes/User';

function* workerGetUsersSaga() {
    const users = yield call(UserEP.getAll);
    yield put(setOrRemoveLoading(false));
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

export function* wathcherLoadData() {
    yield takeEvery(types.GET_FOODS, workerGetUsersSaga);
}

export function* watcherGetUserById() {
    yield takeEvery(types.GET_USER_BY_ID, workerGetUserByIdSaga);
}
