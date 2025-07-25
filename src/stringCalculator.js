const parseNumbers = (input) => {
  const numberStrings = input
    .split(',')
    .map(str => str.trim());
  const numbers = numberStrings.map(str => parseInt(str));
  return numbers;
}

const add = (input) => {
  if (input === '') {
    return 0;
  }

  const numbers = parseNumbers(input);

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add