class Student {
    fullName: string;

    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}

interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person2) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

const s = new Student('Jane', 'M.', 'User');

console.log(greeter3(s));