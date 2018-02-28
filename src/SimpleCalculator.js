class SimpleCalculator{
    constructor(value=0){
        this.value = value;
    }

    add(n){
        this.value += n;
    }
}

module.exports = SimpleCalculator;