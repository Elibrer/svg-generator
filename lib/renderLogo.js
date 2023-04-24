const { Square, Circle, Triangle } = require("./shapes.js");
const renderHtmlFile = require("./renderHtmlFile.js");
const renderSvgFile = require("./renderSvgFile.js");

const renderLogo = (logoStyle) => {
    let svg = '';
    switch (logoStyle.shape) 
    { 
        case 'Square':
            const squareLogo = new Square(logoStyle);
            svg = squareLogo.renderSvg();
            
            break;
        case 'Circle':
            const circleLogo = new Circle(logoStyle);
            svg = circleLogo.renderSvg();
            break;
        case 'Triangle':
            const triangleLogo = new Triangle(logoStyle);
            svg = triangleLogo.renderSvg();
          break;
    }

    const htmlFileCode = renderHtmlFile(svg);
    const svgFileCode = renderSvgFile(svg);

    return [htmlFileCode, svgFileCode];
};

module.exports = renderLogo;
