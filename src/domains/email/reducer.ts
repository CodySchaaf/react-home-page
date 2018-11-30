import {AnyAction} from "redux";
import {getType} from "typesafe-actions";
import {defaultAction, saveEmailAction, saveEmailActionError, saveEmailActionSuccess} from "./actions";

export interface State {
  readonly emailSubmittedStatus: EmailSubmittedStatus;
}

export enum EmailSubmittedStatus {
  default,
  submitting,
  success,
  error,
}

export const initialState = (): State => ({
  emailSubmittedStatus: EmailSubmittedStatus.default,
});

function emailReducer(state = initialState(), action: AnyAction): State {
  switch (action.type) {
    case getType(saveEmailAction):
      console.log(saveEmailAction);
      return {
        ...state,
        emailSubmittedStatus: EmailSubmittedStatus.submitting,
      };
    case getType(saveEmailActionSuccess):
      return {
        ...state,
        emailSubmittedStatus: EmailSubmittedStatus.success,
        ...action.payload
      };
    case getType(saveEmailActionError):
      return {
        ...state,
        emailSubmittedStatus: EmailSubmittedStatus.error,
        ...action.payload
      };
    case getType(defaultAction):
      return state;
    default:
      return state;
  }
}

export default emailReducer;
