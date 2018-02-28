class Circle{
    constructor(radius){
        this.radius = radius;
    }

    area(){
        var calcArea = Math.PI * this.radius ** 2;
        return Math.round(calcArea * 10) / 10;
    }

    perimeter(){
        var calcPeri = 2 * Math.PI * this.radius;
        return Math.round(calcPeri * 10) / 10
    }
}

module.exports = Circle;