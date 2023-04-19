class Shapes {
    constructor(logoShape) {
        this.logoShape = logoShape;
    }

    if(logoShape){
        this.logoShape = logoShape;
        return;
    } 
    
    this.logoShape = 'Circle';


    switch (logoShape) {
        case 'Triangle':
            console.log("Muthefukkin' Triangle");
            return new Triangle();
            
            break;
        case 'Circle':
            return new Circle();
            break;
        case 'Square':
            return new Square();
            break;
        default:
            break;   
    }

}