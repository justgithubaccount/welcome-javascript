let user = {
    name: "John",
    surname: "Smith",
}

console.log(`${user.name} # ${user.surname}`);

user.name = "Pete";

console.log(`${user.name} # ${user.surname}`);

delete user.name;

console.log(`${user.name} # ${user.surname}`);