const add = function (input) {
  if (input === '') {
    return 0;
  }

  if (!input.includes(',')) {
    return parseInt(input);
  }

  return 0;
}

module.exports = add