var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var s = new Student('Jane', 'M.', 'User');
console.log(greeter3(s));
//# sourceMappingURL=student.js.map