function Calc() {
    this.read = function() {
        this.a = +prompt('Input first number', 0);
        this.b = +prompt('Input second number', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}   

let calculator = new Calc();

calculator.read();

alert("Summa = " + calculator.sum());
alert("Multiply = " + calculator.mul());