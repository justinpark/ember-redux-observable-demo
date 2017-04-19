import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import { Actions } from 'ember-redux-observable-demo/actions/user';

function select(store) {
  const { ids, entities, loading, loaded } = store.user;

  return {
    loading,
    loaded,
    users: ids.map(id => entities[id])
  };
}

function actions(dispatch) {
  return {
    onLoad() {
      dispatch(Actions.loadUser());
    },
    onLoading() {
      dispatch(Actions.loading());
    },
    onRequest() {
      const params = {};

      dispatch(Actions.request(params));
    }
  };
}

export default connect(select, actions)(Ember.Component.extend({
}));
