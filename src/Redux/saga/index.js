import { all } from 'redux-saga/effects';
import {
    watcherGetUserById,
    wathcherAuthUser,
    wathcherGetFoods,
    wathcherSignIn,
    wathcherSignUp,
    watcherGetFoodsCategories,
    watcherGetMe,
    watcherGetFoodsCategoriesNames,
    watcherGetFoodsTypesNames,
} from './saga';

export function* rootWatcher() {
    yield all([
        watcherGetUserById(),
        wathcherGetFoods(),
        wathcherSignIn(),
        wathcherSignUp(),
        wathcherAuthUser(),
        watcherGetFoodsCategories(),
        watcherGetFoodsCategoriesNames(),
        watcherGetFoodsTypesNames(),
        watcherGetMe(),
    ]);
}
