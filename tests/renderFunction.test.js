const Logo = require('../lib/logo.js');

describe('Logo', () => {
  test(`Shouldn't throw error if parent renderLogo function is called`, () => {
    const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
    };

    const logo = new Logo(logoStyle);

    const err = new Error('Child class must implement a renderShape() method.')
    
    expect(logo.renderShape).toThrow(err);
  });
});
