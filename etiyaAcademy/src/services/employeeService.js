import { users } from "data/user.js";

export default class EmployeeService {
    constructor() {
        this.employees = users.filter(user => user.type === "employee");
    }

    getAll() {
        return this.employees;
    }

    add (employee) {
        this.employees.push(employee);

    }

    updateEmployee (employee) {
        let updateToEmployee = this.employees.find(e => e.id === employee.id);
        if(updateToEmployee) {
            updateToEmployee.firstName = employee.firstName;
            updateToEmployee.lastName = employee.lastName;
            updateToEmployee.city = employee.city;
            updateToEmployee.salary = employee.salary;
            updateToEmployee.age = employee.age;
        }

    }
    delete (employee) {
        this.employees = this.employees.filter(e => e.id !== employee.id);
    }

}