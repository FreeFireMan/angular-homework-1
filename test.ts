// function foo(x: { name: string, age?: number }){
//
// }
// class User{
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// foo({name: 'bbb', age: 9});
// foo(new User('nnn', 9));
interface User{
    name: string;
    age: number;
    greeting(): void;
}

class User1 implements User{
    age: number;
    name: string;

    greeting(): void {
        console.log('hi');
    }
}

class User2 implements User{
    name: string;
    surname: string;
    age: number;
    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }

    greeting(): void {
        console.log(this.surname)
    }
}

let user1 = new User1();
let user2 = new User2('3','fff', 9);
// let users: User[] = [user1, user2];
// let users: Array<User> = new Array<User>();
// // @ts-ignore
// this.users.push(user1);
