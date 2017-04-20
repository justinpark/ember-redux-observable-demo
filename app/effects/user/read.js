import Ember from 'ember';
import {call, put, takeEvery} from 'redux-saga/effects';
import { ActionTypes, Actions} from 'ember-redux-observable-demo/actions/user';

function fetchAPI(url) {
  return Ember.$.ajax({ url })
    .then((response) => {
      return response.data;
    });
}

function* fetchUser(action) {
  try {
    yield put(Actions.loading());
    const user = yield call(fetchAPI, '/api/users');
    yield put(Actions.loadUser({ user }));
  } catch (e) {
    yield put(Actions.requestFail());
  }
}

function* requestRead() {
  yield takeEvery(ActionTypes.REQUEST_READ, fetchUser);
}

export default requestRead;