interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
const user2 = {firstName: 'Jane', lastName: 'User'};

console.log(greeter2(user2));