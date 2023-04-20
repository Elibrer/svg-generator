const { Square, Circle, Triangle } = require("./shapes.js");
const renderHtml = require("./renderHtml.js");

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

    const html = renderHtml(svg);

    return [html, svg];
};

module.exports = renderLogo;
