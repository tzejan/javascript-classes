var Rectangle = require('../src/Rectangle')

describe('Unit tests for Rectangle class', function() {
    it('should take in a breadth and length, and record the breadth', function() {
        var rect = new Rectangle(5, 10);
        expect(rect.breadth).toEqual(5);
    });
    
    it('should take in a breadth and length, and record the length', function() {
        var rect = new Rectangle(5, 10);
        expect(rect.length).toEqual(10);
    });

    it('should return the area of a Rectangle of sides 2x4 as 8', function() {
        var rect = new Rectangle(2, 4);
        expect(rect.area()).toEqual(8);
    });

    it('should return the perimeter of a Rectangle of sides 2x4 as 12', function() {
        var rect = new Rectangle(2, 4);
        expect(rect.perimeter()).toEqual(12);
    });

     it('should return the area of a Rectangle of sides 5x10 as 50', function() {
        var rect = new Rectangle(5, 10);
        expect(rect.area()).toEqual(50);
    });

    it('should return the perimeter of a Rectangle of sides 5x10 as 30', function() {
        var rect = new Rectangle(5, 10);
        expect(rect.perimeter()).toEqual(30);
    });



});