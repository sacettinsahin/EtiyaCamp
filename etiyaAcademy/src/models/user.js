export default class User{
    constructor(id,firstName,lastName,city,age){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.age = age;
    }
}

let user = new User()
user.merve = "Merve"; //prototyping
console.log(user.merve)

