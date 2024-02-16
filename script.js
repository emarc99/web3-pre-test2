const questions =  [
	{
		question: "Which is the largest animal in the World?",
		answers: [
			{ text:"Shark", correct: false},
			{ text:"Blue Whale", correct: true},
			{ text:"Elephant", correct: false},
			{ text:"Giraffe", correct: false}
		]
	},
	{
		question: "Which is the smallest country in the World?",
		answers: [
			{ text:"Vatican City", correct: true},
			{ text:"Bhutan", correct: false},
			{ text:"Nepal", correct: false},
			{ text:"Shri Lanka", correct: false}		
		]
	},
	{
		question: "Which is the largest desert in the World?",
		answers: [
			{ text:"Kalahari", correct: false},
			{ text:"Gobi", correct: false},
			{ text:"Sahara", correct: false},
			{ text:"Antarctica", correct: true}		
		]
	},
	{
		question: "Which is the smallest continent in the World?",
		answers: [
			{ text:"Asia", correct: false},
			{ text:"Australia", correct: true},
			{ text:"Arctic", correct: false},
			{ text:"Africa", correct: false}		
	    ]
	},
	
	{
		question: "Which of the following is an invalid variable name in JavaScript?",
		answers: [
			{ text:"user_Response", correct: false},
			{ text:"userResponseTime44", correct: false},
			{ text:"user$ResponseTimeLimit", correct: false},
			{ text:"response@", correct: true}		
	    ]
	},
	{
		question: "Which of the following is not a valid statement declaration in JavaScript?",
		answers: [
			{ text:"var p, q;", correct: false},
			{ text:"function i = 0;", correct: true},
			{ text:"let x = 2, y = x*x;", correct: false},
			{ text:"const greeting = 'hello' + name; ", correct: false}		
	    ]
	}
];

const questionEl = document.getElementById("question");
const ansBtns = document.getElementById("answer-btns");
const nxtBtn = document.getElementById("next-btn");
const timeCount = document.getElementById("time-val");
const timeUp = document.querySelector(".time-label");

let currentQuestionIndex = 0;
let score = 0;
let timeInitValue = 15;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	timeInitValue = 15;
	nxtBtn.innerHTML = "Next";
	showQuestion();
	startTimer(timeInitValue);
	timeUp.textContent = "Time Remaining";
	timeUp.style.color = "#000";
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button =  document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		ansBtns.appendChild(button);
		if (answer.correct){
			button.dataset.correct = answer.correct;
			}
		button.addEventListener("click", selectAnswer);
	});
}



function resetState() {
	nxtBtn.style.display = "none";
	while (ansBtns.firstChild){
		ansBtns.removeChild(ansBtns.firstChild);
	}
}

function selectAnswer(e) {
	clearInterval(counter);
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		selectedBtn.classList.add("correct");
		score++;
	}else {
		selectedBtn.classList.add("incorrect");
	}
	Array.from(ansBtns.children).forEach(button => {
		if(button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
});
	nxtBtn.style.display = "block";
}

function showScore() {
	resetState();
	clearInterval(counter);
	timeCount.textContent = "00";
	if(score >5) {
		questionEl.innerHTML = `Congrats! Excellent performance, Genius. You scored ${score} out of ${questions.length}!`;
	}
	else if(score >2) {
		questionEl.innerHTML = `Nice! You scored ${score} out of ${questions.length}!`;
	}
	else {
		questionEl.innerHTML = `Sorry. Better luck next time. You scored only ${score} out of ${questions.length}!`;
	}
	nxtBtn.innerHTML = "Play Again";
	nxtBtn.style.display = "block";
	
};

function handleNextBtn() {
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
		clearInterval(counter);
		startTimer(timeInitValue);
		timeUp.textContent = "Time Remaining";
		timeUp.style.color = "#000";
	} else{
		clearInterval(counter);
		showScore();
	}
};

nxtBtn.addEventListener("click", ()=> {
	if(currentQuestionIndex < questions.length){
		handleNextBtn();
	}
	else{
		startQuiz();
	}
});

function startTimer(time) {
	counter = setInterval(timer, 1000);
	function timer() {
		timeCount.textContent = time;
		time--;
		if(time<9){
			let addZero = timeCount.textContent;
			timeCount.textContent = "0" + addZero;
		}
		if(time<0){
			clearInterval(counter);
			// timeCount.textContent = "00";
			timeUp.textContent = "Time Up!";
			timeUp.style.color = "#F00";

			Array.from(ansBtns.children).forEach(button => {
				if(button.dataset.correct === "true") {
				button.classList.add("correct");
					}
				button.disabled = true;
});
			nxtBtn.style.display = "block";

		}
	}
}

startQuiz();