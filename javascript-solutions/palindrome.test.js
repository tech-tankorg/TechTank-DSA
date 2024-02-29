const test = require('node:test');
const assert = require('node:assert/strict');
const is_palindrome = require('./palindrome.js').is_palindrome;

test('is_palindrome', async (t) => {
    // These could be better written as "table-driven tests" since the structure of each test case is identical.
    // But this might be more readable for students.

    // inputs that are palindromes
    await t.test('two identical letters', (t) => {
        const input = 'aa';
        const result = is_palindrome(input);
        assert(result);
    });

    await t.test('aba', (t) => {
        const input = 'aba';
        const result = is_palindrome(input);
        assert(result);
    })

    await t.test('abba', (t) => {
        const input = 'abba';
        const result = is_palindrome(input);
        assert(result);
    });

    await t.test('A man, a plan, a canal: Panama', (t) => {
        const input = 'A man, a plan, a canal: Panama';
        const result = is_palindrome(input);
        assert(result);
    });

    // inputs that are NOT palindromes
    await t.test('two distinct letters', (t) => {
        const input = 'ab';
        const result = is_palindrome(input);
        assert(!result);
    });

    await t.test('foobar', (t) => {
        const input = 'foobar';
        const result = is_palindrome(input);
        assert(!result);
    });

    await t.test('foobarf', (t) => {
        const input = 'foobarf';
        const result = is_palindrome(input);
        assert(!result);
    })
});
