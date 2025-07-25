const MAX_NUMBER = 1000;

const escapeForRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const parseDelimiters = (input) => {
  let delimiter = /,|\n/;
  let numbersSection = input;

  if (input.startsWith('//')) {
    const delimiterLineEnd = input.indexOf('\n');
    let delimiterPart = input.substring(2, delimiterLineEnd);

    if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
      delimiterPart = delimiterPart.slice(1, -1);
    }

    const escapedDelimiter = escapeForRegex(delimiterPart);
    delimiter = new RegExp(escapedDelimiter);
    numbersSection = input.substring(delimiterLineEnd + 1);
  }

  return { delimiter, numbersSection };
};

const extractNumbers = (input) => {
  const { delimiter, numbersSection } = parseDelimiters(input)
  const numberStrings = numbersSection
    .split(delimiter)
    .map(str => str.trim());
  const numbers = numberStrings.map(str => Number(str));
  return numbers;
}

const add = (input) => {
  if (input === '') {
    return 0;
  }

  const numbers = extractNumbers(input);
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }
  const validNumbers = numbers.filter(n => n <= MAX_NUMBER);

  return validNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add