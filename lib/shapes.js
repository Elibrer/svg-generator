class Shapes {
    constructor(shape) {
        this.shape = shape;
    }
    
    renderShape() {
        throw new Error('Child class must implement a renderShape() method.');
    }
  
}

module.exports = Shapes;