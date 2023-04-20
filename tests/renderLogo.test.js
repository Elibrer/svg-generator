const renderLogo = require('../lib/renderLogo.js');
const Triangle = require('../lib/logo.js');

describe('Rendered Logo', () => {
  test(`Should throw error if triangle text height is not equal to (height / 1.5)`, () => {
    const triangle = new Triangle('Triangle', 'red', 'ELI', '[300, 200]', 'blue');
    const logoTextHeight = textLineHeight = `x="${this.width / 2}" y="${this.height / 1.5}"`
    expect(triangle.textHeight()).toBe(logoTextHeight);
  });
});
