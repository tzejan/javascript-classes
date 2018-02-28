class Circle{
    constructor(radius){
        this.radius = radius;
    }

    area(){
        var calcArea = Math.PI * this.radius ** 2;
        return Math.round(calcArea * 10) / 10;
    }
}

module.exports = Circle;