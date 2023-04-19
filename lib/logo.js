



class Logo {   
    constructor(shape, color, text) {
        this.shape = shape;
        this.color = color;
        this.text = text;
    }

    renderLogo() {
        throw new Error('Child class must implement a render() method.')
    }
}

module.exports = Logo;