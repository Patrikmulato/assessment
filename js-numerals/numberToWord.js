const onetoTwenty = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen ',
];
const twentyToNinety = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

(function (window) {
  window.onload = init;
  function init() {
    const form = document.getElementById('numberConverter');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      numberToWord(document.getElementById('your_number').value);
    });
  }
})(window);

const numberToWord = (input) => {
  const num = Number(input);
  const numStr = num.toString();

  let str = '';

  if (num < 0) {
    str = 'We cant convert negative number';
    throw new Error('We cant convert negative number');
  }
  if (num === 0) {
    document.getElementById('result').innerHTML = 'zero';
    return 'zero';
  }
  if (numStr.length > 9) {
    str = 'You reached the limit that we can convert';
    throw new Error('You reached the limit that we can convert');
  }

  const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;
  let numberWithZero = ('000000000' + num).substr(-9).match(regex);

  str +=
    numberWithZero[1] != 0
      ? (onetoTwenty[Number(numberWithZero[1])] ||
          twentyToNinety[numberWithZero[1][0]] +
            ' ' +
            onetoTwenty[numberWithZero[1][1]]) + 'trillion '
      : '';
  str +=
    numberWithZero[2] != 0
      ? (onetoTwenty[Number(numberWithZero[2])] ||
          twentyToNinety[numberWithZero[2][0]] +
            ' ' +
            onetoTwenty[numberWithZero[2][1]]) + 'million '
      : '';
  str +=
    numberWithZero[3] != 0
      ? (onetoTwenty[Number(numberWithZero[3])] ||
          twentyToNinety[numberWithZero[3][0]] +
            ' ' +
            onetoTwenty[numberWithZero[3][1]]) + 'thousand '
      : '';
  str +=
    numberWithZero[4] != 0
      ? (onetoTwenty[Number(numberWithZero[4])] ||
          twentyToNinety[numberWithZero[4][0]] +
            ' ' +
            onetoTwenty[numberWithZero[4][1]]) + 'hundred '
      : '';
  str +=
    numberWithZero[5] != 0
      ? (str != '' ? 'and ' : '') +
        (onetoTwenty[Number(numberWithZero[5])] ||
          twentyToNinety[numberWithZero[5][0]] +
            '-' +
            onetoTwenty[numberWithZero[5][1]])
      : '';

  document.getElementById('result').innerHTML = str.trim();

  return str.trim();
};
exports.numberToWord = numberToWord;
