var Circle = require("../src/Circle")

describe('Unit tests for Circle class', function() {
    it('should have a radius', function() {
        var c = new Circle(1);
        expect(c.radius).toEqual(1);
    });
    
});