const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  
  // Check if date is a valid Date object and if it has been tampered with
  if (!(date instanceof Date) || date.toString() === 'Invalid Date' || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  
  if (month < 2 || month === 11) return 'winter';
  if (month < 5) return 'spring';
  if (month < 8) return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason
};