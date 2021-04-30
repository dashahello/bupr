/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export default function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
