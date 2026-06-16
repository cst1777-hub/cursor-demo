import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  extractEmails,
  isValidEmail,
  getValidEmails,
  uniqueValidEmails,
} from './email.js';

test('extractEmails returns emails from member array', () => {
  const members = [{ email: 'a@b.com' }, { email: 'c@d.org' }];
  assert.deepEqual(extractEmails(members), ['a@b.com', 'c@d.org']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails('not-array'), []);
});

test('isValidEmail validates email format', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('invalid'), false);
  assert.equal(isValidEmail(123), false);
});

test('getValidEmails returns only valid emails', () => {
  const members = [
    { email: 'good@example.com' },
    { email: 'bad-email' },
    { email: 'also@valid.io' },
  ];
  assert.deepEqual(getValidEmails(members), ['good@example.com', 'also@valid.io']);
});

test('uniqueValidEmails removes duplicate valid emails', () => {
  const members = [
    { email: 'a@example.com' },
    { email: 'a@example.com' },
    { email: 'b@example.com' },
    { email: 'invalid' },
  ];
  assert.deepEqual(uniqueValidEmails(members), ['a@example.com', 'b@example.com']);
});

test('uniqueValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(uniqueValidEmails(null), []);
});
