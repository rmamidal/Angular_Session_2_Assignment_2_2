var UserClass = (function () {
    function UserClass(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    UserClass.prototype.displayMessage = function () {
        console.log("User Informartion");
        console.log("*****************");
        console.log("This is " + this.userName + ", his age is " + this.userAge);
    };
    return UserClass;
}());
var user1 = new UserClass("Raj", 31);
user1.displayMessage();
