// Rewrite with arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);

//

function askAgain(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

askAgain(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);