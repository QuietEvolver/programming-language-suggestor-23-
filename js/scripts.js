/*
-Form gathers input from the user.
-Branching is used to determine the result.
-Web API object properties or methods (not including window methods for alerting, prompting, or confirming) are used to display the result to the user.
-Event handler properties or event listeners are used to handle events.
-When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced.
*/

function questionsEvaluation(answer){

  console.log("logging first tier");
  if (answer >= 6 && answer <= 13){
    console.log("logging IF first tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "Python";
  } else if (answer >= 14 && answer <= 22){
    console.log("logging ElseIF 2nd tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "Javascript";
  } else if (answer >= 23 && answer <= 30){
    console.log("logging ElseIF 2nd tier");
    //  document.getElementById("result").innerHTML = "Python";
    return "C#";
  }
  
}

function errorMessage(){
  return "ERROR MSG: Enter #s/make selections."
}

const handleSuggestor = (e) => {
  e.preventDefault();

  // data capture
  const questionValue1 = parseInt(document.getElementById("question-1").value);
  const questionValue2 = parseInt(document.getElementById("question-2").value);
  const questionValue3 = parseInt(document.getElementById("question-3").value);
  const questionValue4 = parseInt(document.getElementById("question-4").value);
  const questionValue5 = parseInt(document.getElementById("question-5").value);

  const answer = questionValue1 + questionValue2 + questionValue3 + questionValue4 + questionValue5;

  questionsEvaluation(answer);

  let output = "Your total score: " + answer + 
  ".  " +  questionsEvaluation(answer) + " is your suggested programming language.";

  document.getElementById("result").innerText = output;

  //error handling//|| Number.isInteger(question3)|| Number.isInteger(question4)|| Number.isInteger(question5)
  // if ((Number.isInteger(questionValue1) || Number.isInteger(questionValue2))){
  //   document.getElementById("result").innerText = output;
  // } else if ((questionValue1 || questionValue2) ===  " ") {
  //   document.getElementById("result").innerText = errorMessage();
  // }
}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});