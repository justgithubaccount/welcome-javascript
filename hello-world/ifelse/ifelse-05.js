// Rewrite 'if..else' into '?'

let message;

let login = 'admin';

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = 'You should not pass';
}

let sameMessage = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    'You should not pass';

console.log(message)
console.log(sameMessage)