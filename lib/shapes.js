const Logo = require('./logo.js');

class Square extends Logo {
    renderShape() { 
        //rectX to offset the square to the center of the svg.
        const rectX = this.height / 4;
        return`<rect x="${rectX}" width="${this.height}" height="${this.height}" fill="${this.color}" />`
    }
}

class Circle extends Logo {
    renderShape() { 
        //circRadius to make the circle fit inside the outer svg container, adjustable by the size.width property.
        const circRadius = (this.width / 3) * .8;
        return`<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${circRadius}" fill="${this.color}" />`
    }
}

class Triangle extends Logo {
    renderShape() { return`<polygon points="${this.width / 2},0 0,${this.height} ${this.width},${this.height}" fill="${this.color}" />`                                  
    }
}

module.exports = { Square, Circle, Triangle };