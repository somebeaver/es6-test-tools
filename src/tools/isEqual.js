import { pass } from './pass.js'
import { fail } from './fail.js'

/**
 * Checks that the given first arg is exactly equal to the second arg.
 * 
 * @param {string} thing - The thing that must be true.
 * @param {string} test - Test name.
 * @param {string} msg - Message associated with this test.
 */
export function isEqual(thing1, thing2, test, msg) {
  if (thing1 === thing2) {
    pass(test, msg)
  } else {
    fail(test, msg)
  }
}