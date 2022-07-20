let animalMethods = {
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

let newAnimalMethods = {
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

let catMethods = {
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

Object.setPrototypeOf(newAnimalMethods,animalMethods)
Object.setPrototypeOf(catMethods,animalMethods)

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods)
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}

function createNewAnimal(name,color,location,numberOfLegs){
    let animal = Object.create(newAnimalMethods)
    animal.name = name;
    animal.color = color;
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}

function createCatAnimal(name,colorOfEyes,location,numberOfLegs){
    let animal = Object.create(catMethods)
    animal.name = name;
    animal.colorOfEyes = colorOfEyes;
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

    return animal;
}

