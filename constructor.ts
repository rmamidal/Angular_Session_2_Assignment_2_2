/**
 * The User class, having userName, userAge property.
 * displayMessage() method.
 * @class UserClass
 * @constructor Parameterized constructor
**/
class UserClass {
    private userName: string;
    private userAge: number;

    // Parameterized constructor.
    constructor(name:string, age:number) {
      this.userName = name;
      this.userAge = age;
    }

    // Method to display message.
    displayMessage():void {
        console.log("User Informartion");
        console.log("*****************");
        console.log("This is " + this.userName + ", his age is " + this.userAge)
    }
}

var user1 = new UserClass("Raj", 31); // New user object create and passed 2 values.
user1.displayMessage(); // Calling display method to get message.