const add = function (input) {
  if (input === '') {
    return 0;
  }

  const numbers = input
    .split(',')
    .map(str => str.trim())
    .map(str => parseInt(str));

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add