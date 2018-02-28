var SimpleCalculator = require('../src/SimpleCalculator');

describe('SimpleCalculator tests', function() {
    it('should have 0 as the default value', function() {
        var calculator = new SimpleCalculator();
        expect(calculator.value).toEqual(0);
    });

    it('should contain the value passed in', function() {
        var calculator = new SimpleCalculator(5);
        expect(calculator.value).toEqual(5);
    });
    
});