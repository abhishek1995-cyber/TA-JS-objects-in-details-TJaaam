// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// using function

function createUser(name,id,noOfProjects){
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    obj.getProjects = function(){
        return obj.noOfProjects
    }
    obj.changeName = function(newName){
        return obj.name;
    }
    obj.incrementProject = function(){
        return obj.noOfProjects += 1;
    }
    obj.decrementProject = function(){
        return obj.noOfProjects = obj.noOfProjects - 1;
    } 
    return obj
}
//test

let user1 = createUser("abhishek","altcampus",5)
let user2 = createUser("honey","campus",15)

// prototypal pattern

let newUser = {
    getProjects : function(){
        return this.noOfProjects
    },
    changeName : function(newName){
        return this.name;
    },
    incrementProject : function(){
        return this.noOfProjects += 1;
    },
    decrementProject : function(){
        return this.noOfProjects = this.noOfProjects - 1;
    }
}

function createUser(name,id,noOfProjects){
    let obj = Object.create(newUser);
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;
    
    return obj
}

// Using Pseudoclassical Way

function createUser(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    
}

createUser.prototype = {
    getProjects : function(){
        return this.noOfProjects
    },
    changeName : function(newName){
        return this.name;
    },
    incrementProject : function(){
        return this.noOfProjects += 1;
    },
    decrementProject : function(){
        return this.noOfProjects = this.noOfProjects - 1;
    }
}


// using class

 class User{
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects(){
        return this.noOfProjects
    }
    changeName(newName){
        return this.name;
    }
    incrementProject(){
        return this.noOfProjects += 1;
    }
    decrementProject(){
        return this.noOfProjects = this.noOfProjects - 1;
    }
}

// test

let user7 = new User("abhishek","altcampus",5)
let user8 = new User("honey","campus",15)

