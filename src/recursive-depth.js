import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;

    function getDepth (arr, curRes) {
      if (curRes > result) result = curRes;

      arr.forEach(item => {
        if ( Array.isArray(item) ) getDepth(item, curRes + 1);
      });
    }

    getDepth(arr, 1);

    return result;
  }
}



