// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee{
  constructor(officeNumber) {
    // set up inheritance chain with super
    super(name, id, email)
    
    this.oficeNumber = officeNumber;

    const getRole = () => {
      return "Manager"
    }
  }
}