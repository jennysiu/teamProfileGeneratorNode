// TODO: Write code to define and export the Employee class

class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    const getName = () => {
      return  this.name;
    }

    const getEmail = () => {
      return this.email;
    }

    const getRole = () => {
      return  this.constructor.name;
    }
  }
}

module.exports = Employee;
