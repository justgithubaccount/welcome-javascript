let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() {
        console.log(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.showStep();