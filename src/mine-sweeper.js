const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function countMinesAround(matrix, row, col) {
  let count = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = row - 1; i <= row + 1; i += 1) {
    for (let j = col - 1; j <= col + 1; j += 1) {
      if (i >= 0 && i < rows && j >= 0 && j < cols && !(i === row && j === col)) {
        count += matrix[i][j] ? 1 : 0;
      }
    }
  }
  
  return count;
}

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (!matrix[i][j]) {
        result[i][j] = countMinesAround(matrix, i, j);
      } else {
        result[i][j] = 1;
      }
    }
  }
  
  return result;
}

module.exports = {
  minesweeper
};
