/* eslint-disable prefer-template */
// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

const reverseCasify = (text = '', lowerCase = true) => {
  

}
  function reverse(str) {et o = '';
  for (let i = Character.length - 1; i >= 0; i--)
    o += s[i];
  return o;
    return str.split('').reverse().join('');
  }


  /* let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
  newString = newString + str.charAt(i);
    }
    if (newString.charAt(newString.length - 1) === newString.charAt(newString.length - 1).toLowerCase()) {
      return newString.slice(0, newString.length - 1) + newString.charAt(newString.length - 1).toUpperCase();
    }
  
    return newString;
  }*/


for (const solution of [secretSolution,]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',

    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('should return empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('should reverse the string and set the characters to lowercase', () => {
          expect(solution('ASDF', true)).toEqual('fdsa');
        });
        // when the text is all lower case
        it('should reverse the string without changing characters casify', () => {
          expect(solution('asdf', true)).toEqual('fdsa');
        });
        // when the text is mixed upper and lower case
        it('should reverse the string and set all characters to lowercase', () => {
          expect(solution('asDF', true)).toEqual('fdsa');
        });
        // when the text contains punctuation
        it('should reverse the string and set all characters to lowercase', () => {
          expect(solution('asDF?', true)).toEqual('?fdsa');
        });
        // when the text contains numbers
        it('should reverse the string and set all characters to lowercase', () => {
          expect(solution('asDF123', true)).toEqual('321fdsa');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('should return empty string', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('should reverse the string', () => {
          expect(solution('ASDF', false)).toEqual('FDSA');
        });
        // when the text is all lower case
        it('should reverse the string and change the characters to uppercase', () => {
          expect(solution('asdf', false)).toEqual('FDSA');
        });
        // when the text is mixed upper and lower case
        it('should reverse the string and change the characters to uppercase', () => {
          expect(solution('ASdf', false)).toEqual('FDSA');
        });
        // when the text contains punctuation
        it('should reverse the string and change the characters to uppercase', () => {
          expect(solution('ASdf??', false)).toEqual('??FDSA');
        });
        // when the text contains numbers
        it('should reverse the string and change the characters to uppercase', () => {
          expect(solution('ASdf456', false)).toEqual('654FDSA');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
