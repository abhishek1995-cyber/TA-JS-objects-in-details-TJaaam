// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name,age){
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name,age){
    let obj = {};
    obj.name = name;
    obj.age = age;

    obj.sayHello = function(){
        alert(`Welcome ${obj.name}`)
        return obj.name
    }
    return obj
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("abhishek", 24);
let personTwo = createUser("ashwini", 24);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

function createUser(name,age){
    let obj = Object.create(userMethod);
    obj.name = name;
    obj.age = age;

    return obj
}
let userMethod = {
    sayHello : function(){
        alert(`Welcome ${obj.name}`)
        return obj.name
    }
}

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUser(name,age){
this.name = name;
this.age = age;

}
createUser.prototype ={
    sayHello : function(){
        alert(`Welcome ${this.name}`)
        return this.name
    }
}

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

 personOne = new createUser("ashish", 24);
 personTwo =  new createUser("anup", 24);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello()
'ashish'
personTwo.sayHello()
'anup'

// 8. Convert the `createUser` function into `User` class.

class User{
    constructor(name,age){
    this.name = name;
    this.age = age;
    }
        sayHello(){
            alert(`Welcome ${this.name}`)
            return this.name
    }
}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
personOne = new User("ankit", 24);
personTwo =  new User("zoya", 24);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello()
'ankit'
personTwo.sayHello()
'zoya'

