import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === null || date === undefined) return 'Unable to determine the time of year!';
  if (Number.isNaN( Date.parse(date) )) throw new Error('Invalid date!');

  let date2 = new Date(String(date));
  if (Number.isNaN(date2.getDate())) throw new Error('Invalid date!');
	if (date.getMonth() != date2.getMonth() || date.getDate() != date2.getDate() || date.getFullYear() != date2.getFullYear()) throw new new Error('Invalid date!');

  let month = date.getMonth();
	if (month > 1 && month < 5) return 'spring';
	if (month > 4 && month < 8) return 'summer';
	if (month > 7 && month < 11) return 'fall';
	return 'winter';
}