const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Interns extends Employee {
  constructor(school) {
    // set up inheritance chain with super
    super(name, id, email)
        
    this.school = school;

    const getSchool = () => {
      return this.school
    }
  }
}

module.exports = Intern;