import {ActionType, getType} from "typesafe-actions";
import {saveEmailAction, saveEmailActionSuccess} from "./actions";

import axios from 'axios';
import {put, takeLatest} from "redux-saga/effects";

export function* saveEmail({ payload: email }: ActionType<typeof saveEmailAction>) {
  const saveEmailResponse = yield axios
    .post(email)
    .then(res => res.data)
    .catch(err => err);

  // tslint:disable-next-line
  if (saveEmailResponse.ok) {
    yield put(saveEmailActionSuccess());
  }
}

export default function* emailSaga() {
  yield [
    takeLatest(getType(saveEmailAction), saveEmail),
  ];
}
