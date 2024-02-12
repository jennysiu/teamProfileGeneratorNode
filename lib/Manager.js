// define and export the Manager class (extends employee class)

const Employee = require("./Employee");

class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    // set up inheritance chain with super
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Manager;