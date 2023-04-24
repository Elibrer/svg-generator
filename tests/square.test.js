const { Square } = require('../lib/shapes.js');

describe('Square', () => {
  const logoStyle = {
    shape: 'Square',
    color: 'orange',
    text: 'ELI',
    size: [300, 200],
    textColor: 'teal'
  };
  const { shape, color, text, size, textColor } = logoStyle;
  
  test(`Should throw error if new Square object doesn't return a string`, () => {
    const square = new Square(shape, color, text, size, textColor);
    expect(typeof square.renderShape()).toBe('string');
  });
  test('Should throw error if Square shape is not set to Square', () => {
    const square = new Square(shape, color, text, size, textColor);
    expect(square.shape).toBe('Square');
  });
  test('Should throw error if Square color is not set to orange', () => {
    const square = new Square(shape, color, text, size, textColor);
    expect(square.color).toBe('orange');
  });
  test('Should throw error if Square text is not set to ELI', () => {
    const square = new Square(shape, color, text, size, textColor);
    expect(square.text).toBe('ELI');
  });
  test('Should throw error if new Circle size property is not calculated properly', () => {
    const square = new Square(shape, color, text, size, textColor);
    expect(square.width).toBe(300);
    expect(square.height).toBe(200)
  });
  test('Should throw error if Square svg code is not equal to the expected svg code', () => {
    const square = new Square(shape, color, text, size, textColor);

    const expectedSvgCode = `<rect x="50" width="200" height="200" fill="orange" />`

    expect(square.renderShape()).toBe(expectedSvgCode);
  });
});