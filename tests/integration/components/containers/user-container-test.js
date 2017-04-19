import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('containers/user-container', 'Integration | Component | containers/user container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{containers/user-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#containers/user-container}}
      template block text
    {{/containers/user-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
