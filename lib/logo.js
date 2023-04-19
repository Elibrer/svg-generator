class Logo {   
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    renderLogo() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Logo;