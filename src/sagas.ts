import { all, call } from 'redux-saga/effects';

import emailSaga from "./domains/email/saga";

export const sagaMap = {
  emailSaga,
};

export function* rootSaga() {
  yield all([call(emailSaga)]);
}
