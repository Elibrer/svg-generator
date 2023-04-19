const Logo = require('../lib/logo.js');

describe('Logo', () => {
  test(`Shouldn't throw error if parent renderLogo function is called`, () => {
    const logo = new Logo();
    const err = new Error('Child class must implement a render() method.')
    expect(logo.renderLogo).toThrow(err);
  });
});
