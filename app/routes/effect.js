import Ember from 'ember';
import { Actions } from 'ember-redux-observable-demo/actions/user';

export default Ember.Route.extend({
  redux: Ember.inject.service(),

  model() {
    this.get('redux').dispatch(Actions.loading());
    const redux = this.get('redux');
    return Ember.$.ajax({url: '/api/users'}).then((response) => {
      redux.dispatch(Actions.loadUser({
        user: response.data
      }));
    });
  }
});
