import ReduxObservable from 'npm:redux-observable';
import userEpic from './user/read';

const { combineEpics } = ReduxObservable;

export default combineEpics(userEpic);
