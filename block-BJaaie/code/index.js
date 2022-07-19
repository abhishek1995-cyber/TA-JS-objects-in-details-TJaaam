function CreateAnimal(location,numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;

}

CreateAnimal.prototype = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        return this.location === newLocation
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function CreateNewAnimal(name,color,location,numberOfLegs){
    this.name = name;
    this.color = color;
    CreateAnimal.call(this)
}

CreateNewAnimal.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newname){
        return this.name === newname
    },
    changeColor: function(newcolor){
        return this.color === newcolor
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
function CreateCatAnimal(name,colorOfEyes,location,numberOfLegs){

    this.name = name;
    this.colorOfEyes = colorOfEyes;
    CreateAnimal.call(this)

}

CreateCatAnimal.prototype = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newname){
        return this.name === newname
    },
    changeColorOfEyes: function(newcolor){
        return this.color === newcolor
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`

    }
}

Object.setPrototypeOf(CreateNewAnimal.prototype,CreateAnimal.prototype)
Object.setPrototypeOf(CreateCatAnimal.prototype,CreateAnimal.prototype)


//class

class animal{
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation){
        return this.location === newLocation
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

class NewAnimal extends CreateAnimal{
    constructor(name,color,location,numberOfLegs){
    this.name = name;
    this.color = color;
    super(location,numberOfLegs);
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newname){
        return this.name === newname
    }
    changeColor(newcolor){
        return this.color === newcolor
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class CatAnimal extends CreateAnimal{
    constructor(name,colorOfEyes,location,numberOfLegs){
        super(location,numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName(newname){
        return this.name === newname
    }
    changeColorOfEyes(newcolor){
        return this.color === newcolor
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`

    }
}





