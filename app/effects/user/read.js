import Ember from 'ember';
import {call, put, takeEvery} from 'redux-saga/effects'
import { ActionTypes, Actions} from 'ember-redux-observable-demo/actions/user';

function* fetchUser(action) {
  const { payload } = action;
  // try {
  //   const user = yield call(Ember.$.ajax, {
  //     url: '/api/users'
  //   });
  //   yield put(Actions.loadUser({ user }));
  // } catch (e) {
  //   yield put(Actions.requestFail());
  // }
  yield put(Actions.requestFail());
}

function* requestRead() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default requestRead;