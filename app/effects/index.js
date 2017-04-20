import { fork } from 'redux-saga/effects'
import userEffects from './user/read';


export default function* index() {
  yield [
    fork(userEffects),
  ];
}