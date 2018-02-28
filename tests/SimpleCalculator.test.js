var SimpleCalculator = require('../src/SimpleCalculator');

describe('SimpleCalculator tests', function() {
    describe('Constructor tests', function() {
        it('should have 0 as the default value', function() {
            var calculator = new SimpleCalculator();
            expect(calculator.value).toEqual(0);
        });

        it('should contain the value passed in', function() {
            var calculator = new SimpleCalculator(5);
            expect(calculator.value).toEqual(5);
        });
    });

    describe('Addition tests', function() {
        it('should add correctly', function() {
            var calculator = new SimpleCalculator();
            calculator.add(5);
            expect(calculator.value).toEqual(5);
        });
        it('should return a reference to itself', function() {
            var calculator = new SimpleCalculator();
            var add_return = calculator.add(5);
            expect(calculator).toEqual(add_return);
        });
    });

    describe('Subtraction tests', function() {
        it('should subtract correctly', function() {
            var calculator = new SimpleCalculator();
            calculator.subtract(5);
            expect(calculator.value).toEqual(-5);
        });
        it('should return a reference to itself', function() {
            var calculator = new SimpleCalculator();
            var subtract_return = calculator.subtract(5);
            expect(calculator).toEqual(subtract_return);
        });
    });
});