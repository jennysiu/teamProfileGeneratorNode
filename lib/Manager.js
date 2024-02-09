// -- TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

import Employee from "./Employee";

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

// module.exports = Manager;