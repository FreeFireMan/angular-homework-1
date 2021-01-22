var msg = 'hi';
function foo() {
    console.log('hi');
}
var user = { age: 34 };
var User = (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
})();
var user1 = new User('nnnn', 77);
