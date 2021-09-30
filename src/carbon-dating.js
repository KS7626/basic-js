import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (sampleActivity === undefined || sampleActivity === null || typeof(sampleActivity) !== 'string' || sampleActivity === '') return false;

  let numActivity = Number(sampleActivity.trim()); 
  if (isNaN(numActivity) || numActivity === 0) return false;

  let t = Math.ceil( Math.log(MODERN_ACTIVITY/numActivity) / (0.693 / HALF_LIFE_PERIOD) );
  
  return (t >= 0)? t : false;
}
