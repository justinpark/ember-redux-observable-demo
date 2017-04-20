import npmObservable from 'npm:rxjs/Observable';
import { ActionTypes, Actions} from 'ember-redux-observable-demo/actions/user';
import npmAjax from 'npm:rxjs/observable/dom/ajax';

const { Observable } = npmObservable;
const { ajax } = npmAjax;

function fetchAPI(url) {
  return ajax({ url });
}

export default (action$) => action$
  .ofType(ActionTypes.REQUEST_READ)
  .map(action => action.payload)
  .switchMap(payload =>
    Observable.merge(
      Observable.of(Actions.loading()),
      fetchAPI('/api/users')
        .map(ajaxRes => ajaxRes.response.data)
        .mergeMap(user => Observable.of(Actions.loadUser({ user })))
        .catch(() => Observable.of(Actions.requestFail()))
    )
  )
