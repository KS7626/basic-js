import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (str === null) str = String(str);
  let srrAd = (options.addition === null)? String(options.addition) : options.addition;
  let iMax = options.repeatTimes || 1;
  let sep = options.separator || '+';
  let yMax = options.additionRepeatTimes || 1;
  let sepAd = options.additionSeparator || '|';
  let extStr = (srrAd != undefined)? srrAd + (sepAd + srrAd).repeat(yMax - 1) : '';;

  return str + extStr + (sep + str + extStr).repeat(iMax - 1);
}