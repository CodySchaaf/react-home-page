import {ActionType, createStandardAction} from "typesafe-actions";

export const defaultAction = createStandardAction('slack/DEFAULT_ACTION')<void>();
export const saveEmailAction = createStandardAction('slack/SAVE_EMAIL_ACTION')<string>();
export const saveEmailActionSuccess = createStandardAction('slack/SAVE_EMAIL_ACTION_SUCCESS')<void>();
export const saveEmailActionError = createStandardAction('slack/SAVE_EMAIL_ACTION_ERROR')<void>();


export type EmailAction = ActionType<
  | typeof defaultAction
  | typeof saveEmailAction
  | typeof saveEmailActionSuccess
  | typeof saveEmailActionError
  >
