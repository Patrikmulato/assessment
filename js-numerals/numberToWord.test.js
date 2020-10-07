const { numberToWord } = require('./numberToWord');

document.body.innerHTML = `
<span id="result" />
`;
describe('numberToWords function', () => {
  it('should give error if negative', () => {
    expect(() => numberToWord(-5)).toThrow('We cant convert negative number');
  });
  it('should give error if length over 9', () => {
    expect(() => numberToWord(99999999999)).toThrow(
      'You reached the limit that we can convert'
    );
  });
  it('should give zero', () => {
    expect(numberToWord(0)).toBe('zero');
  });
  it('should give ten', () => {
    expect(numberToWord(10)).toBe('ten');
  });
  it('should give one hundred and twenty three', () => {
    expect(numberToWord(123)).toBe('one hundred and twenty-three');
  });
  it('should give one thousand two hundred and thirty four', () => {
    expect(numberToWord(1234)).toBe('one thousand two hundred and thirty-four');
  });
  it('should give ', () => {
    expect(numberToWord(12345)).toBe(
      'twelve thousand three hundred and forty-five'
    );
  });
});
