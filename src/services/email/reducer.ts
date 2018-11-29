import {AnyAction} from "redux";
import {getType} from "typesafe-actions";
import {defaultAction, saveEmailAction, saveEmailActionError, saveEmailActionSuccess} from "./actions";

export interface State {
  readonly emailSubmitted: boolean;
}

export const initialState = (): State => ({
  emailSubmitted: false
});

function emailReducer(state = initialState(), action: AnyAction): State {
  switch (action.type) {
    case getType(saveEmailAction):
      console.log(saveEmailAction);
      return {
        ...state,
        emailSubmitted: false,
      }
    case getType(saveEmailActionSuccess):
      return {
        ...state,
        emailSubmitted: true,
        ...action.payload
      }
    case getType(saveEmailActionError):
      return {
        ...state,
        emailSubmitted: false,
        ...action.payload
      }
    case getType(defaultAction):
      return state;
    default:
      return state;
  }
}

export default emailReducer;
