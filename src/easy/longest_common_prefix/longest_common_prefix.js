/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (strs.length === 1){
    return strs[0];
  }
  let depth = strs[0].length;

  for(let str of strs) {
    let substrLength = 1;
    while (strs.every(item => item.substring(0, substrLength) === str.substring(0, substrLength))) {
      depth--;
      substrLength ++;
      if (depth <= 0){
        break;
      }
    }
    return str.substring(0, substrLength - 1);
  }
};
