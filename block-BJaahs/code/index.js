// without object

//data for user
let title = "javascript";
let option = ["css","object","scss"];
let correctAnswerIndex = option[1]

//methods for user

function isAnswerCorrect(index){
    if(index == correctAnswerIndex){
        return true
    }else {
      return false
    }
}

function getCorrectAnswer(){
   return correctAnswerIndex;
}

// with object

let user = {
    title: "javascript",
    option: ["css","object","scss"],
    correctAnswerIndex: option[1],

    isAnswerCorrect(index){
        if(index === correctAnswerIndex){
            return true
        }else {
            return false
        }
    },

    getCorrectAnswer(){
        return correctAnswerIndex;
     }
    
};

// with function 

function createUser(title,option,correctAnswerIndex = option[1]){
    let users = {}
        users.title = title;
        users.option = option;
        users.correctAnswerIndex = correctAnswerIndex;

        users.isAnswerCorrect = function(index){
            if(index === correctAnswerIndex){
                return true
            }else {
                return false
            }
        };

        users. getCorrectAnswer = function(){
            return correctAnswerIndex;
        }
}

// using this

function createUser(title,option,correctAnswerIndex = option[1]){
    let users = {}
          this.title = title;
          this.option = option;
          this.correctAnswerIndex = correctAnswerIndex;

        users.isAnswerCorrect = function(index){
            if(index === correctAnswerIndex){
                return true
            }else {
                return false
            }
        };

        users.getCorrectAnswer = function(){
            return correctAnswerIndex;
        }
}

