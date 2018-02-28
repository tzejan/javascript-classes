var Circle = require("../src/Circle")

describe('Unit tests for Circle class', function() {
    it('should have a radius', function() {
        var c = new Circle(1);
        expect(c.radius).toEqual(1);
    });

    it('should have a area of 3.1 for a radius of 1', function() {
        var c = new Circle(1);
        expect(c.area()).toEqual(3.1);
    });

    it('should have a area of 12.6 for a radius of 2', function() {
        var c = new Circle(2);
        expect(c.area()).toEqual(12.6);
    });

    it('should have a area of 28.3 for a radius of 3', function() {
        var c = new Circle(3);
        expect(c.area()).toEqual(28.3);
    });

    it('should have a perimeter of 6.3 for a radius of 1', function() {
        var c = new Circle(1);
        expect(c.perimeter()).toEqual(6.3);
    });

    it('should have a perimeter of 12.6 for a radius of 2', function() {
        var c = new Circle(2);
        expect(c.perimeter()).toEqual(12.6);
    });

    it('should have a perimeter of 18.8 for a radius of 3', function() {
        var c = new Circle(3);
        expect(c.perimeter()).toEqual(18.8);
    });
    
});