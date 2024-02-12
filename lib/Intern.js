const Employee = require("./Employee");

// define and export the Intern class (extends emplyee class)

class Intern extends Employee {
  constructor(name, id, email, school) {
    // set up inheritance chain with super
    super(name, id, email)
        
    this.school = school;
  }

    getSchool() {
      return this.school
    }

    getRole() {
      return this.constructor.name;
    }
  }

module.exports = Intern;

