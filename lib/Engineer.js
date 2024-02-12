const Employee = require("./Employee");

// define and export the Engineer class (which extends the employee class)

class Engineer extends Employee {
  constructor(name, id, email, github) {
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