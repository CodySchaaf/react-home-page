import { AnyAction, ReducersMapObject, Store } from 'redux';
import { Task } from 'redux-saga';
import { VariadicSaga } from './VariadicSaga';
import { SagaMap } from './SagaMap';

export interface BaseStore<State = { [key: string]: any }, Actions extends AnyAction = AnyAction>
  extends Store<State, Actions> {
  runSaga: (saga: VariadicSaga) => Task;
  injectedReducers: ReducersMapObject<State, Actions>;
  injectedSagas: SagaMap;
}
