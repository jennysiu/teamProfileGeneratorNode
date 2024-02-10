const Employee = require("./Employee");

// -- TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// todo: one more test did not pass - waiting to hear back on some clarification

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    // set up inheritance chain with super
    super(name, id, email)
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Engineer;