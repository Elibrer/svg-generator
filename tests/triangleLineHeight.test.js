const Triangle = require('../lib/logo.js');

describe('Triangle Line Height', () => {
  test(`Should throw error if triangle text height is not equal to (height / 1.5)`, () => {
    const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [450, 300],
        textColor: 'teal'
    };
    const triangle = new Triangle(logoStyle);

    const expectedSvgCode= `x="225" y="200"`
    // x="225" being the width / 2 and y="200" being the height / 1.5

    expect(triangle.textHeight()).toBe(expectedSvgCode);
  });
});
