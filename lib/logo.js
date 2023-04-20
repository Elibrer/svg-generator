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

    textHeight() {
        let textLineHeight = `x="${this.width / 2}" y="${this.height / 2}"`;
        if (this.shape === 'Triangle') {
            textLineHeight = `x="${this.width / 2}" y="${this.height / 1.5}"`;
        }
        return textLineHeight;
    }

    renderShape() {
        throw new Error('Child class must implement a renderShape() method.');
    }

    renderSvg() {
        return `<svg width="${this.width}" height="${this.height}">
    ${this.renderShape()}
    <text ${this.textHeight()} class="heavy" text-anchor="middle" fill="${this.textColor}" dy="30" font-size="${this.width / 4}">${this.text}</text>
</svg>`;
    } 
}

module.exports = Logo;