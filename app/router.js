import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'});
  this.route('structure');
  this.route('redux');
  this.route('epic');
  this.route('devtool');
});

export default Router;
