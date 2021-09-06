/**
 * @param {string} str
 * @return {boolean}
 */

const isValid = (str) => {
  let stack = [];
  let brackets = {
    '}': '{',
    ')': '(',
    ']': '['
  }

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (isClosedBracket(current)) {
      if(stack.pop() !== brackets[current]) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0
};

const isClosedBracket = (char) => [')', '}', ']'].includes(char);
