import { all } from 'redux-saga/effects';
import { watcherGetUserById, wathcherLoadData } from './saga';

export function* rootWatcher() {
    yield all([watcherGetUserById(), wathcherLoadData()]);
}
