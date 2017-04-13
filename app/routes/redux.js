import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return fetch('/people', {
      credentials: 'include'
    }).then((response) => { return response.json(); }).then((body) => {
      alert(`Your merlin token is: ${body.token}`);
    });
  }
});
