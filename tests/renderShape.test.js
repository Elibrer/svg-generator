const Logo = require('../lib/logo.js');

describe('Logo', () => {
  test(`Should throw error if parent renderLogo function is called`, () => {
    const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
    };
    const { shape, color, text, size, textColor } = logoStyle;

    const logo = new Logo(shape, color, text, size, textColor);

    const err = new Error('Child class must implement a renderShape() method.')
    
    expect(logo.renderShape).toThrow(err);
  });
});
