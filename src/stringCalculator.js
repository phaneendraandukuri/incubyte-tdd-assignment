const parseDelimiters = (input) => {
  let delimiter = /,|\n/;
  let numbersSection = input;

  if (input.startsWith('//')) {
    const delimiterLineEnd = input.indexOf('\n');
    const delimiterPart = input.substring(2, delimiterLineEnd);
    delimiter = new RegExp(delimiterPart);
    numbersSection = input.substring(delimiterLineEnd + 1);
  }
  return { delimiter, numbersSection }
}

const parseNumbers = (input) => {
  const { delimiter, numbersSection } = parseDelimiters(input)
  const numberStrings = numbersSection
    .split(delimiter)
    .map(str => str.trim());
  const numbers = numberStrings.map(str => parseInt(str));
  return numbers;
}

const add = (input) => {
  if (input === '') {
    return 0;
  }

  const numbers = parseNumbers(input);
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add