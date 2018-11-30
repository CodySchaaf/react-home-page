import {AnyAction, ReducersMapObject} from 'redux';
import {InitAction} from "./reducers/InitAction";
import emailReducer, {State} from "./domains/email/reducer";

export const configureGlobalReducers = (): AppReducersMapObject => ({
  email: emailReducer
});

// All must be optional
export interface AppState {
  readonly email?: State;
}



export type AppReducersMapObject = Partial<ReducersMapObject<AppState, AnyAction>>;

export type AppAction =  InitAction;
