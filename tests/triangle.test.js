const { Triangle } = require('../lib/shapes.js');

describe('Triangle', () => {
  const logoStyle = {
    shape: 'Triangle',
    color: 'orange',
    text: 'ELI',
    size: [300, 200],
    textColor: 'teal'
  };
  const { shape, color, text, size, textColor } = logoStyle;
  
  test(`Should throw error if new Triangle object doesn't return a string`, () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    expect(typeof triangle.renderShape()).toBe('string');
  });
  test('Should throw error if Triangle shape is not set to Triangle', () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    expect(triangle.shape).toBe('Triangle');
  });
  test('Should throw error if Triangle color is not set to orange', () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    expect(triangle.color).toBe('orange');
  });
  test('Should throw error if Triangle text is not set to ELI', () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    expect(triangle.text).toBe('ELI');
  });
  test('Should throw error if new Circle size property is not calculated properly', () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    expect(triangle.width).toBe(300);
    expect(triangle.height).toBe(200)
  });
  test('Should throw error if Triangle svg code is not equal to the expected svg code', () => {
    const triangle = new Triangle(shape, color, text, size, textColor);
    const expectedSvgCode = `<polygon points="150,0 0,200 300,200" fill="orange" />`
    expect(triangle.renderShape()).toBe(expectedSvgCode);
  });
});