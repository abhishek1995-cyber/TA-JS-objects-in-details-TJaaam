// // factory pattern

// function question(title,options,correctAnswerIndex){
//     let obj = {};
//     obj.title = title;
//     obj.options = options;
//     obj.correctAnswerIndex = correctAnswerIndex;

//     obj.isAnswerCorrect = function(index){
//         return index === correctAnswerIndex;
//     };
//     obj.getCorrectAnswer = function(){
//         return options[correctAnswerIndex];
//     }
//     return obj
// }


// Prototypal pattern

// let questionMethod = {
//         isAnswerCorrect : function(index){
//         return index === correctAnswerIndex;
//     },
//     getCorrectAnswer : function(){
//         return options[correctAnswerIndex];
//     }
// }

// function question(title,options,correctAnswerIndex){
//     let obj = Object.create(questionMethod);
//     obj.title = title;
//     obj.options = options;
//     obj.correctAnswerIndex = correctAnswerIndex;
//     return obj
// }


// // Pseudoclassical Pattern


// function Question(title,options,correctAnswerIndex){
// this.title = title;
// this.options = options;
// this.correctAnswerIndex = correctAnswerIndex;

// }

// Question.prototype = {
//     isAnswerCorrect : function(index){
//         return index === correctAnswerIndex;
//     },
//     getCorrectAnswer : function(){
//         return options[correctAnswerIndex];
//     }
// }

// Create using class


class Ques{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

        isAnswerCorrect(index){
            return index === correctAnswerIndex;
        }
        getCorrectAnswer(){
            return options[correctAnswerIndex];
        }
}

// test

let firstQuestion = new Ques(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Ques(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


  