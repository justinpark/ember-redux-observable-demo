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
    label: 'Epics (redux-observable)',
    link: 'epic'
  }, {
    label: 'Setup the Devtool',
    link: 'devtool'
  }]
});
