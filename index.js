const submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", showRightAnswer);

function showRightAnswer(event) {
	event.preventDefault();
	let points = 0;
	if(document.querySelector("#rightAnswer1").checked) {
		points++;
	}
	if (document.querySelector("#rightAnswer2").checked) {
    points++;
  }
  if (document.querySelector("#rightAnswer3").checked) {
    points++;
  }
  if (document.querySelector("#rightAnswer4").checked) {
    points++;
  }
  if (document.querySelector("#rightAnswer5").checked) {
    points++;
  }
  if (document.querySelector("#rightAnswer6").checked) {
    points++;
  }
  document.querySelector("#showAmountOfRightAnswer").textContent =
    "Your score : " + points;
}