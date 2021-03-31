// Originally from Pathrise technical assessment on 3/31/2021

// Implement a function isMember.
// It takes an input list of strings called words eg. ["foo", "bar", "baz"] and
// an input string called query eg. "foo".
// It should return true if a query matches any string in words.
// If a query includes * it's considered a wildcard. ie. it matches exactly
// one character of any value at the current index of the string.
// You may assume that the input will not contain empty strings or empty lists.

// #Input: words = ["bar", "foo", "baz"], query = "foo"
// #Output:
// #Input: words = ["foo", "bar", "baz"], query = "cat"
// #Output:
// #Input: words = ["bar", "foo", "baz"], query = "**z"
// #Output:

/**
 * I : array of strings, query = string (may include wildcard)
 * O : boolean
 * E : n/a
 * C : ~ linear time ~ constant space
 *
 *
 * check for length
 *   if lengths != move on
 *
 *
 */
// move on to next if lengths !=
words.forEach(word => {
    for (i = 0; i < word.length; i++) {
        if (query[i] !== '*' || word[i] !== query[i]) {
            break;
        }
    }
})
