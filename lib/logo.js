class Logo {   
    constructor({shape, color, text, size, textColor}) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.width = size[0];
        this.height = size[1];
        this.textColor = textColor;
        this.circRadius = (this.width / 3) * .8;
    }

    //Text height is different for each shape. This function returns the correct text height for each shape.
    //Note: (Width / 16) is to accomodate for the text size variance.
    textHeight() {
        const textY = (this.height / 2) + (this.width / 12);
        let textLineHeight = `x="${this.width / 2}" y="${textY}"`;

        if (this.shape === 'Triangle') {
            const textY = (this.height / 1.4) + (this.width / 16);
            textLineHeight = `x="${this.width / 2}" y="${textY}"`;
        }

        return textLineHeight;
    }

    renderShape() {
        throw new Error('Child class must implement a renderShape() method.');
    }

    renderSvg() {
        const textLineHeight = this.textHeight();
        return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}">
    ${this.renderShape()}
    <text ${textLineHeight} class="heavy" text-anchor="middle" fill="${this.textColor}" dy="0" font-size="${this.width / 4.2}">${this.text}</text>
</svg>`;
    } 
}

module.exports = Logo;