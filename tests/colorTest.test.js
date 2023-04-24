const { Square, Circle, Triangle } = require('../lib/shapes.js');

describe("Circle color", () => {
    test("Should set color to blue", () => {
        const logoStyle = {
            shape: 'Triangle',
            color: 'blue',
            text: 'ELI',
            size: [210, 140],
            textColor: 'red',
            circRadius: (210 / 3) * .8,
        };
 
        const circleLogo = new Circle(logoStyle);
        
        const blueCircle = `<circle cx="${logoStyle.size[0] / 2}" cy="${logoStyle.size[1] / 2}" r="${logoStyle.circRadius}" fill="blue" />`;

        expect(circleLogo.renderShape()).toEqual(blueCircle);
    });
});
