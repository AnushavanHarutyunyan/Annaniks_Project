import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import allFoodsReducer from './reducers/foodItemReducer';
import globalStateReducer from './reducers/globalStateReducer';
import authReducer from './reducers/authReducer';
import logger from 'redux-logger';
import FoodCategoriesReducer from './reducers/foodCategoriesReducer';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    allFoodsState: allFoodsReducer,
    globalState: globalStateReducer,
    authState: authReducer,
    foodCategoriesState: FoodCategoriesReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootWatcher);

window.store = store;
export default store;
