# String Calculator — TDD Assignment

This is my submission for the Incubyte **String Calculator** assignment, implemented using **Test-Driven Development (TDD)** principles.

---

## Requirements Covered

- Return `0` for an empty string
- Return the number itself for a single number
- Return the sum of comma-separated numbers
- Support newline `\n` as a valid delimiter
- Support custom single-character delimiters using `//<delimiter>\n`
- Support custom delimiters of any length using `//[delimiter]\n`
- Ignore numbers greater than `1000`
- Throw an exception listing all **negative numbers**

---

## Setup & Run

```bash
# Clone the repo
git clone https://github.com/phaneendraandukuri/incubyte-tdd-assignment
cd incubyte-tdd-assignment

# Install dependencies
npm install

# Run tests
npm test
