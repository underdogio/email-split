// Load in dependencies
var assert = require('assert');
var emailSplit = require('../');

// Define test utilities
var testUtils = {
  splitEmail: function (email) {
    before(function splitEmailFn () {
      this.emailParts = emailSplit(email);
    });
    after(function cleanup () {
      delete this.emailParts;
    });
  }
};

// Start our tests
describe('email-split splitting an email with a top-level domain', function () {
  testUtils.splitEmail('todd@underdog.io');

  it('returns the local part', function () {
    assert.strictEqual(this.emailParts.local, 'todd');
  });

  it('returns the domain part', function () {
    assert.strictEqual(this.emailParts.domain, 'underdog.io');
  });

  it('returns the full email address', function () {
    assert.strictEqual(this.emailParts.full, 'todd@underdog.io');
  });
});

describe('email-split splitting an email on a subdomain', function () {
  testUtils.splitEmail('you@are.super.cool');

  it('returns the local part', function () {
    assert.strictEqual(this.emailParts.local, 'you');
  });

  it('returns the domain part', function () {
    assert.strictEqual(this.emailParts.domain, 'are.super.cool');
  });

  it('returns the full email address', function () {
    assert.strictEqual(this.emailParts.full, 'you@are.super.cool');
  });
});
