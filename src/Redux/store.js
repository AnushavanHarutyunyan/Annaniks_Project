import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import allFoodsReducer from './reducers/foodItemReducer';
import appReducer from './reducers/appReducer';
import globalStateReducer from './reducers/globalStateReducer';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    allFoodsState: allFoodsReducer,
    appState: appReducer,
    globalState: globalStateReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootWatcher);

window.store = store;
export default store;
