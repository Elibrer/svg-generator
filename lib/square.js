const Logo = require('./logo.js');

class Square extends Logo {

    renderShape() { return`
    <svg width="100" height="100">
        <rect width="100" height="100" fill="${color}" />
        <text x="50" y="50" text-anchor="middle" fill="white" dy=".3em">${text}</text>
    </svg>
    `
    }
}

module.exports = Square;