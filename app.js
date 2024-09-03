var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User("Hello");
var header = this.document.getElementById("header");
header.innerHTML = "World " + tom.name;
