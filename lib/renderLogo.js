const { Square, Circle, Triangle } = require("./shapes.js");
const renderHtmlFile = require("./renderHtmlFile.js");
const renderSvgFile = require("./renderSvgFile.js");

const renderLogo = (logoStyle) => {
    const { shape, color, text, size, textColor } = logoStyle;
    let svg = '';

    switch (shape) 
    { 
        case 'Square':
            const squareLogo = new Square(shape, color, text, size, textColor);
            svg = squareLogo.renderSvg();
            break;
        case 'Circle':
            const circleLogo = new Circle(shape, color, text, size, textColor);
            svg = circleLogo.renderSvg();
            break;
        case 'Triangle':
            const triangleLogo = new Triangle(shape, color, text, size, textColor);
            svg = triangleLogo.renderSvg();
          break;
    }

    const htmlFileCode = renderHtmlFile(svg);
    const svgFileCode = renderSvgFile(svg);

    return [htmlFileCode, svgFileCode];
};

module.exports = renderLogo;
