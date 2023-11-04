function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked');
	var q2 = document.querySelector('input[name="q2"]:checked');
	var correctAnswers = 0;
	var incorrectAnswers = 0;

	if (q1 != null && q1.value == "c") {
		sessionStorage.setItem("q1", q1.value);
		correctAnswers++;
	} else if (q1 != null) {
		incorrectAnswers++;
		document.getElementById("q1").classList.add("incorrect");
	}

	if (q2 != null && q2.value == "a") {
		sessionStorage.setItem("q2", q2.value);
		correctAnswers++;
	} else if (q2 != null) {
		incorrectAnswers++;
		document.getElementById("q2").classList.add("incorrect");
	}

	if (q1 == null || q2 == null) {
		document.getElementById("error").style.display = "block";
		setTimeout(function() {
			document.getElementById("error").style.display = "none";
		}, 5000);
	} else {
		sessionStorage.setItem("correctAnswers", correctAnswers);
		sessionStorage.setItem("incorrectAnswers", incorrectAnswers);
		window.location.href = "result.html";
	}
}



window.onload = function() {
	var correctAnswers = sessionStorage.getItem("correctAnswers");
	var incorrectAnswers = sessionStorage.getItem("incorrectAnswers");

	document.getElementById("correct-answers").innerHTML = correctAnswers;
	document.getElementById("incorrect-answers").innerHTML = incorrectAnswers;
}

window.onload = function() {
	var correctAnswers = sessionStorage.getItem("correctAnswers");
	var incorrectAnswers = sessionStorage.getItem("incorrectAnswers");

	document.getElementById("correct-answers").innerHTML = correctAnswers;
	document.getElementById("incorrect-answers").innerHTML = incorrectAnswers;
}


function resetQuiz() {
	sessionStorage.clear();
	window.location.href = "quiz.html";
}

