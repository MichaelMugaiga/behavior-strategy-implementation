// #todo

'use strict';

/* eslint-disable */ 

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
const reverseString = (toReverse = "") => {
  if (typeof toReverse !== "string") {
    throw Error();
  }
    return toReverse.split("").reverse().join("");
}



for (const solution of [secretSolution, reverseString]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with small letters', () => {
      expect(solution('person')).toEqual('nosrep');
    });
    it('a string with only numbers', () => {
      expect(solution('12345')).toEqual('54321');
    });
    it("should throw an error if not a string", () => {
      expect(() => solution([])).toThrow(Error);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
