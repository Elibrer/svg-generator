// const Shapes = require("./shapes");
// const Square = require("./square");

const { Square, Circle, Triangle } = require("./shapes.js");
const renderHtml = require("./renderHtml.js");

//const Logo = require("./logo");


const renderLogo = (logoStyle) => {
    const {shape, color, text} = logoStyle;
    let renderedLogo = '';



    switch (logoStyle.shape) 
    { 
        case 'Square':
            const squareLogo = new Square(shape, color, text);
            renderedLogo = squareLogo.renderShape();
            
            break;
        case 'Circle':
            const circleLogo = new Circle(shape, color, text);
            renderedLogo = circleLogo.renderShape();
            break;
        case 'Triangle':
            const triangleLogo = new Triangle(shape, color, text);
            renderedLogo = triangleLogo.renderShape();
          break;
    }

    const html = renderHtml(renderedLogo);

    //console.log(html)

    return html;
};


module.exports = renderLogo;
