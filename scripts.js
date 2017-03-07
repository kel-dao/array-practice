
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.


/* TODO: Write a form handler function that will:
  1. capture the question asked in the form
  2. randomly select an element from the array of answers
  3. console log something conversational to user, like "Oh, you want to know [question]? Well, I think... [answer]"
*/

var a = ["absolutely", "maybe", "in your wildest dreams", "ask again later", "off duty"]

function magicBall() {
  var question = document.questionForm.question.value;
  var i = Math.floor(Math.random()*a.length);
  
  var answer = a[i];
  var output = "You asked " + question + "...Well I think..." + answer;
  console.log(output);
  event.preventDefault();
}


function insertAnswer() {
  var answer = document.answerForm.answer.value;
  a.push(answer);
  console.log(a);
  event.preventDefault();
}

function removeAnswer() {
  var remv = document.removalForm.remove.value;
  var index = a.indexOf(remv);
  if(index >= 0){
    a.splice(index, 1)
  }
  console.log(a);
  event.preventDefault();
}

function clicker() {
  console.log("clicked!");
  
}