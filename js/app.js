function populate(){
	if(quiz.isEnded()){
		showScore();
	}else{
		//show question 
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i =0; i <choices.length ; i++){
			var element = document.getElementById("choice"+i);
			element.innerHTML = choices[i];
			guess("btn"+i , choices[i]);
		}

		showProgress();

	}	
}

function guess(id , guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}


function showProgress(){
	var currentQuestionNumber = quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScore(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml+= "<h2 id='score'> Your :"+ quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

var questions = [
	new Question("which one is an OOP language", ["java" , "C#" , "C++" , "C"],  "C"),
	new Question("Which is capital of india", ["goa", "delhi" , "Assam" , "jhar"], "delhi"),
	new Question("who is pm of mode" , ["modi", "sodi", "todi", "godi"] , "modi"),
	new Question("MVC is ............. ", ["lang" , "framework", "Lib" , "All"], "framework")	
];

var quiz = new Quiz(questions);
populate();