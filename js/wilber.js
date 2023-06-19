// let icons = document.querySelector(".shower")
// let change = document.querySelector("show");
// let changeB = document.querySelector(".grab")

// change.addEventListener("click", () => {
// change.classList.toggle("shower")
// if (changeB.type === "password"){
// changeB.type = "text";
// }else{
// changeB.type = "password";
// }
// });
// $((function(e){
//     e.preventDefault();
//     console.log("Dont Reload");

//  });

function checkResult(event) {
  let mark = 0;
  // var getQuestion1 = document.getElementById("question1");
  let question1Answer = "(land, wage),(capital, interest),(labour, rent)";
  let question2Answer = "Economies of scale";
  let question3Answer = "returns on capital";
  let question4Answer = " 0.33";
  let question5Answer = " perfectly inelastic";
  let selectedQuestion1value =
    document.querySelector('input[name="question1"]:checked').value;
  let selectedQuestion2value =
    document.querySelector('input[name="question2"]:checked').value;
  let selectedQuestion3value =
    document.querySelector('input[name="question3"]:checked').value;
  let selectedQuestion4value =
    document.querySelector('input[name="question4"]:checked').value;
  let selectedQuestion5value =
    document.querySelector('input[name="question5"]:checked').value;
  if (question1Answer != selectedQuestion1value) {
    mark += 0;
  } else {
    mark += 1;
  }
  if (question2Answer != selectedQuestion2value) {
    mark + 0;
  } else {
    mark + 1;
    
  }
  if (question3Answer != selectedQuestion3value) {
    mark += 0;
  } else {
    mark += 1;
  }

  if (question4Answer != selectedQuestion4value) {
    mark += 0;
  } else {
    mark += 1;
  }

  if (question5Answer != selectedQuestion5value) {
    mark += 0;
  } else {
    mark += 1;
  }
//   return displayResult(mark);
}

function displayResult(mark) {
  alert("Your final mark is " + mark);
}
