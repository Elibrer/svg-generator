const Shapes = require("./shapes");
const Square = require("./square");
const Logo = require("./logo");


const renderLogo = (logoStyle) => {
    const {shape, color, text} = logoStyle;

    const logoShape = new Square(logoStyle);

    logoShape.eggo()
    
    
};


// class RenderLogo {
//     constructor(logoStyle, logoShape, logoColor, logoText) {
//         this.logoStyle = logoStyle;
//         this.shape = logoShape;
//         this.color = logoColor;
//         this.text = logoText;
//     }


//     render() {
//     throw new Error('Child class must implement a render() method.');
//   }


//     // renderInnerHTML() {
//     //     this.logoStyle.map(child) => {
//     //         if(typeof child !== 'string'){
//     //             return this.render(child);
//     //         } else {
//     //             return child;
//     //         }
//     //     }
//     // }
// }


module.exports = { renderLogo };
