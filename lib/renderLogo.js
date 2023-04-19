


class RenderLogo {
    constructor(logoStyle, logoShape, logoColor, logoText) {
        this.logoStyle = logoStyle;
        this.logoShape = logoShape;
        this.logoColor = logoColor;
        this.logoText = logoText;
    }
    eggs()  {
        console.log("eggs benny")
    }
    render() {}


    renderInnerHTML() {
        this.logoStyle.map(child) => {
            if(typeof child !== 'string'){
                return this.render(child);
            } else {
                return child;
            }
        }
    }
}

module.exports = RenderLogo;