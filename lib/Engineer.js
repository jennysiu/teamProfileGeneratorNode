const Employee = require("./Employee");

// -- TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    // set up inheritance chain with super
    super(name, id, email)
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    // return "Engineer";
    return this.constructor.name;
  }
}

module.exports = Engineer;