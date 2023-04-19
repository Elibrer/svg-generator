const Logo = require('./logo.js');

class Square extends Logo {
    // logtest() {console.log(this.shape + " shape. " + this.color + " color. " + this.text + " text.")};
    renderShape() { return`
    <svg width="100" height="100">
        <rect width="100" height="100" fill="${this.color}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}" dy=".3em">${this.text}</text>
    </svg>
    `
    }
}

class Circle extends Logo {
    renderShape() { return`
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}" dy=".3em">${this.text}</text>
    </svg>
    `
    }
}

class Triangle extends Logo {
    renderShape() { return`
    <svg width="100" height="100">
        <polygon points="50,0 100,100 0,100" fill="${this.color}" />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}" dy=".3em">${this.text}</text>
    </svg>
    `
    }
}


module.exports = { Square, Circle, Triangle };