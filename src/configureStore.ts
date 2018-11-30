import {AppAction, AppState, configureGlobalReducers} from './reducers';
import {createStore, applyMiddleware, ReducersMapObject, AnyAction, Reducer, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createReducer<AppState, AppAction>(configureGlobalReducers()),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  // const action = (type: any) => store.dispatch({type});

  return store;
}


export const createReducer = <AppState, AppAction extends AnyAction>(
  reducers: ReducersMapObject<AppState, AppAction>,
): Reducer<AppState, AppAction> =>
  // Unfortunately typescript falls over when trying to spread over these (version 3.0.1)
  // so resorting to Object.assign, spread says you can only spread objects, which these are
  combineReducers(Object.assign(reducers));
