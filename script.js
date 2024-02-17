// This section contains the database of questions and answers
const questions =  [
	{
    question: "What does HTML stand for?",
    answers: [
        { text: "Hypertext Markup Language", correct: true },
        { text: "Hyperlink and Text Markup Language", correct: false },
        { text: "High-Level Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false }
    ]
},
	{
    question: "How can you select an element with id 'myElement' in CSS?",
    answers: [
        { text: "#myElement", correct: true },
        { text: ".myElement", correct: false },
        { text: "element.myElement", correct: false },
        { text: "id.myElement", correct: false }
    ]
},
	{
    question: "What is the purpose of 'const' in JavaScript?",
    answers: [
        { text: "To declare a constant variable", correct: true },
        { text: "To create a new function", correct: false },
        { text: "To import external libraries", correct: false },
        { text: "To define a loop", correct: false }
    ]
},
	{
    question: "What is the main goal of responsive web design?",
    answers: [
        { text: "To make websites load faster", correct: false },
        { text: "To create visually appealing designs", correct: false },
        { text: "To ensure a consistent user experience across devices", correct: true },
        { text: "To improve SEO ranking", correct: false }
    ]
},
	{
    question: "Which tool is commonly used for version control in web development?",
    answers: [
        { text: "Git", correct: true },
        { text: "Adobe Photoshop", correct: false },
        { text: "MySQL", correct: false },
        { text: "Node.js", correct: false }
    ]
},
	{
    question: "What does API stand for?",
    answers: [
        { text: "Application Programming Interface", correct: true },
        { text: "Advanced Programming Interface", correct: false },
        { text: "Automated Process Integration", correct: false },
        { text: "Application Process Integration", correct: false }
    ]
},
	{
    question: "What is Cross-Site Scripting (XSS)?",
    answers: [
        { text: "A scripting language for websites", correct: false },
        { text: "A security vulnerability where attackers inject malicious scripts into web pages", correct: true },
        { text: "A new web development framework", correct: false },
        { text: "A tool for automated testing", correct: false }
    ]
},
	{
    question: "Which framework is written in TypeScript and developed by Google?",
    answers: [
        { text: "React", correct: false },
        { text: "Angular", correct: true },
        { text: "Vue.js", correct: false },
        { text: "Bootstrap", correct: false }
    ]
},
	{
    question: "What does Node.js use for package management?",
    answers: [
        { text: "NPM (Node Package Manager)", correct: true },
        { text: "PIP (Python Install Package)", correct: false },
        { text: "Composer", correct: false },
        { text: "Gradle", correct: false }
    ]
},
	{
    question: "Which database is known for its document-oriented structure?",
    answers: [
        { text: "MySQL", correct: false },
        { text: "MongoDB", correct: true },
        { text: "SQLite", correct: false },
        { text: "PostgreSQL", correct: false }
    ]
},
	{
    question: "What is the purpose of a domain name?",
    answers: [
        { text: "To store data on the server", correct: false },
        { text: "To identify a website on the internet", correct: true },
        { text: "To design web pages", correct: false },
        { text: "To secure a website", correct: false }
    ]
},
	{
    question: "Why is it important to consider web accessibility in development?",
    answers: [
        { text: "To increase website speed", correct: false },
        { text: "To improve search engine ranking", correct: false },
        { text: "To ensure equal access for people with disabilities", correct: true },
        { text: "To reduce server load", correct: false }
    ]
},
	{
    question: "What is a CDN (Content Delivery Network) used for?",
    answers: [
        { text: "To create dynamic web content", correct: false },
        { text: "To optimize website performance by delivering content from servers closer to the user", correct: true },
        { text: "To secure websites from cyber attacks", correct: false },
        { text: "To manage databases", correct: false }
    ]
},
	{
    question: "What is a key characteristic of Progressive Web Apps?",
    answers: [
        { text: "They require installation from an app store", correct: false },
	{ text: "They work only on specific browsers", correct: false },
	{ text: "They provide an app-like experience with offline functionality", correct: true },
	{ text: "They are only accessible on desktop devices", correct: false }
    ]
},
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
	},
	{
    question: "What is the main benefit of using cloud computing?",
    answers: [
        { text: "Faster internet speed", correct: false },
        { text: "Increased physical security of data", correct: false },
        { text: "Cost-effective scalability and flexibility", correct: true },
        { text: "Reduced need for antivirus software", correct: false }
    ]
}
];

// This section contains the variables declaration and initialization 
const questionEl = document.getElementById("question");
const ansBtns = document.getElementById("answer-btns");
const nxtBtn = document.getElementById("next-btn");
const timeCount = document.getElementById("time-val");
const timeUp = document.querySelector(".time-label");
const questCounter = document.querySelector(".totalQuest");

let currentQuestionIndex = 0;
let score = 0;
let timeInitValue = 15;

// This section contains the all the functions required for our dynamic website
function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	timeInitValue = 15;
	nxtBtn.innerHTML = "Next";
	showQuestion();
	questionCounter(1);
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
	if(score > 20) {
		questionEl.innerHTML = `Congrats! Excellent performance, Genius. You scored ${score} out of ${questions.length}!`;
	}
	else if(score > 10) {
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
		questionCounter(currentQuestionIndex + 1);
		clearInterval(counter);
		startTimer(timeInitValue);
		timeUp.textContent = "Time Remaining";
		timeUp.style.color = "#000";
	} else{
		clearInterval(counter);
		showScore();
	}
};

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

function questionCounter(index){
    let totalQuestionCounter = `<p>${index} of ${questions.length} Questions</p>`;
    questCounter.innerHTML = totalQuestionCounter;  //adding new span tag inside bottom_ques_counter
}

// This code listens for when Next or Play Again button is clicked
nxtBtn.addEventListener("click", ()=> {
	if(currentQuestionIndex < questions.length){
		handleNextBtn();
	}
	else{
		startQuiz();
	}
});

// This function is called by default on page load
startQuiz();
