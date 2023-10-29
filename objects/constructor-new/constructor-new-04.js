function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('New value', 0);
    };
}   

let accumulator = new Accumulator(17);

accumulator.read();
accumulator.read();

alert(accumulator.value);