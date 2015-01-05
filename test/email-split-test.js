// Load in dependencies
var assert = require('assert');
var emailSplit = require('../');

// Start our tests
describe('email-split', function () {
  it('returns awesome', function () {
    assert.strictEqual(emailSplit(), 'awesome');
  });
});
