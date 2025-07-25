const parseNumbers = function (input) {
  return input
    .split(',')
    .map(str => str.trim())
    .map(str => parseInt(str, 10));
}

const add = function (input) {
  if (input === '') {
    return 0;
  }

  const numbers = parseNumbers(input);

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add