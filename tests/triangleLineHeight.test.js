const Triangle = require('../lib/logo.js');

describe('Triangle Line Height', () => {
  test(`Should throw error if triangle text height is not equal to (height / 1.5) + (width / 16). 
  Note: (Width / 16) is to accomodate for the text size variance.`, () => {
    const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [210, 140],
        textColor: 'teal'
    };
    const triangle = new Triangle(logoStyle);

    const expectedSvgCode= `x="105" y="113.125"`
    // x="105" y="113.125" is the expected text height for a triangle with a width of 210 and a height of 140.

    expect(triangle.textHeight()).toBe(expectedSvgCode);
  });
});
