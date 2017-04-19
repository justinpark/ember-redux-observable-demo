import Ember from 'ember';

export default Ember.Component.extend({
  menus: [{
    label: 'Introduction',
    link: 'index'
  }, {
    label: 'Folder Structure',
    link: 'structure'
  }, {
    label: 'Redux Example',
    link: 'redux'
  }, {
    label: 'Redux Container Example',
    link: 'container'
  }, {
    label: 'Epics (redux-observable)',
    link: 'epic'
  }, {
    label: 'Effects (redux-saga)',
    link: 'effect'
  }, {
    label: 'Mock API (ember-cli-mirage)',
    link: 'mirage'
  }, {
    label: 'Setup the Devtool',
    link: 'devtool'
  }]
});
