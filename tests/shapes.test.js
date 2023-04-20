const { Square, Circle, Triangle } = require('../lib/shapes.js');

describe('Logo', () => {
  test(`Shouldn't throw error if parent renderLogo function is called`, () => {
    const logo = new Square();
    const err = new Error('Child class must implement a renderShape() method.')
    expect(logo.renderShape).toThrow(err);
  });
});
