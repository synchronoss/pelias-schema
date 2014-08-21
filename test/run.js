
var tape = require('tape');
var common = {};

var tests = [
  require('./compile.js'),
  require('./poi.js'),
  require('./partial-suggest.js'),
  require('./partial-centroid.js'),
  require('./partial-admin.js')
];

tests.map(function(t) {
  t.all(tape, common)
});