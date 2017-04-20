import swapi from './fixtures/swapi-results';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.urlPrefix = '';
  this.namespace = 'api';
  this.timing = 2000;

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  this.get('/swapi-results', () => swapi);

  this.get('/users');
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
