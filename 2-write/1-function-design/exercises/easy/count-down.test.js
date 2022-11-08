// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------
const countDown = (start = 0) => {
let result  = [];
  if(start < 0) {
    throw new RangeError('number is not positive');
  }
  if(!Number.isInteger(start)) {
    throw new TypeError('number is not an integer');
  }
  if (typeof start === 'string') {
    throw Error("start should be a number");
  } 
  for (let step = start; step >= 0; step--) {
    result.push(step);
  }
  return result;
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [secretSolution ,countDown]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it('2 -> [2,1,0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });
    it('3 -> [3, 2, 1, 0]', () => {
      expect(solution(3)).toEqual([3, 2, 1, 0]);
    });
    it('should throw RangeError when start is not a positive number',() => {
      expect(()=> solution(-1)).toThrow(RangeError);
    });
    it('should throw TypeError when start is not a number',() => {
      expect(()=> solution("2")).toThrow(TypeError);
    });
    it('should throw Error when start is not an integer',() => {
      expect(()=> solution(6.5)).toThrow(Error);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
