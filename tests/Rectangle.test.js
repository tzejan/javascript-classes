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

});