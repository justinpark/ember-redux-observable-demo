import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  owner: faker.name.firstName,
  title: faker.lorem.sentence
});
