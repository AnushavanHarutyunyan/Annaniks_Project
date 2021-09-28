import { all } from 'redux-saga/effects';
import {
    watcherGetUserById,
    wathcherAuthUser,
    wathcherLoadData,
    wathcherSignIn,
    wathcherSignUp,
    // whatcherSetSignInUser
} from './saga';

export function* rootWatcher() {
    yield all([
        watcherGetUserById(),
        wathcherLoadData(),
        wathcherSignIn(),
        wathcherSignUp(),
        wathcherAuthUser(),
        // whatcherSetSignInUser()
    ]);
}
