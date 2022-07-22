import { users } from "data/user.js";

export default class CustomerService {
  constructor() {
    this.customers = users.filter((user) => user.type === "customer");
  }

  getAll() {
    return this.customers;
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }
  updateCustomer(customer) {
    let customerToUpdate = this.customers.find(
      (customer) => customer.id === customer.id
    );
    if (customerToUpdate) {
      customerToUpdate.firstName = customer.firstName;
      customerToUpdate.lastName = customer.lastName;
      customerToUpdate.cit = customer.city;
      customerToUpdate.creditCardNumber = customer.creditCardNumber;
    }
  }

  delete(customer) {
    this.customers = this.customers.filter(
      (customer) => customer.id !== customer.id
    );
  }
}