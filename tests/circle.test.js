const { Circle } = require('../lib/shapes.js');

describe('Circle', () => {
    const logoStyle = {
        shape: 'Circle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
    };
    const { shape, color, text, size, textColor } = logoStyle;

    test(`Should throw error if new Circle object doesn't return a string`, () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(typeof circle.renderShape()).toBe('string');
    });
    test('Should throw error if circle shape is not set to Circle', () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(circle.shape).toBe('Circle');
    });
    test('Should throw error if circle color is not set to orange', () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(circle.color).toBe('orange');
    });
    test('Should throw error if circle text is not set to ELI', () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(circle.text).toBe('ELI');
    });
    test('Should throw error if new Circle size property is not calculated properly', () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(circle.width).toBe(300);
        expect(circle.height).toBe(200)
    });
    test('Should throw error if circle text color is not set to teal', () => {
        const circle = new Circle(shape, color, text, size, textColor);
        expect(circle.textColor).toBe('teal');
    });
    test('Should throw error if circle svg code is not equal to the expected svg code', () => {
        const circRadius = (300 / 3) * .8;
        const circle = new Circle(shape, color, text, size, textColor);
        const expectedSvgCode = `<circle cx="150" cy="100" r="${circRadius}" fill="orange" />`
        expect(circle.renderShape()).toBe(expectedSvgCode);
    });
});
