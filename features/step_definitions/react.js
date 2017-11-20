const { register } = require('react-cucumber');
// require your components here, for example:
const { Book } = require('../../src/components/SearchResults/Book');

register([
  Book,
  // ... more components here
]);