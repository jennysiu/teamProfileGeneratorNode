const Employee = require("./Employee");

// -- TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
  constructor({ name, id, email, school }) {
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

