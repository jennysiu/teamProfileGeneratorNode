const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor(gitHub) {
    // set up inheritance chain with super
    super(name, id, email)
    this.gitHub = gitHub;


    const getGithub = () => {
      return this.gitHub
    }

    const getRole = () => {
      return "Engineer"
    }
  }
}

module.exports = Engineer;