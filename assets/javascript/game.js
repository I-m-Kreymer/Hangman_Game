
	//array of all possible answers 


	/*
	-backend database of possible values 
	-random generate a value for the user to guess 
	-take in the value from the user 
	-if its correct change the value in the blanks array, if its wrong then the array stays
	unchanged and the number of guesses goes down
	-if all of the values have been guessed then you win 
	- click button to reset
	- scoring: if there are still spaces and guesses =0, you lose, if guesse >0 and there are still spaces keep playing; if guesses
	are more than 0 and there are no blanks you win;
	*/

var questionsArray = ['abanda','alejandra','asha','boris','catherine','chiara','deepika','emily','franco','harrison','igor','jihyun','jonathan1','jonathan2','jonathan3','justin','kalimah','kevin','ksenia','matt','melissa','mike','nalani','nathan','peleke','piniel','rob','simi','steve','theory','thony','wesley'] ;
var remainingGuesses = 10;
var blankspaceArray = [];
var guessesArray = [] ; 
var	question;
var winCount=0;
var lossCount=0;


var NewGameFunction = function () {
 
 blankspaceArray = [];
 remainingGuesses = 10;
 guessesArray = [] ;
 question = questionsArray[Math.floor(Math.random()*questionsArray.length)]

 			//Create an if statement to capture several Jonathan's in the class and define string length for them
if (question === 'jonathan1' || question === 'jonathan2' || question === 'jonathan3') {
	blankspaceArray = ['_','_','_','_','_','_','_','_'];
RepeatingHtml();
document.getElementById("personimage").src="assets/images/mystery_person.jpg";
document.querySelector("#game").innerHTML = "Who am I?" + "<br>" + blankspaceArray.join("");
document.querySelector("#EndingMsg").innerHTML = "";
}
else{

			//Create a loop that 
for (var i = 0; i < question.length; i++) {
	
	var blankspace = '_';
	
	blankspaceArray.push (blankspace);	
}
RepeatingHtml();
document.getElementById("personimage").src="assets/images/mystery_person.jpg";
document.querySelector("#game").innerHTML = "Who am I?" + "<br>" + blankspaceArray.join("");
document.querySelector("#EndingMsg").innerHTML = "";
}};

var Reset = function () {
	winCount=0;
	lossCount=0;
	NewGameFunction();
}

var RepeatingHtml = function () {

document.querySelector("#GuessesRemaining").innerHTML = "Guesses Remaining: " + remainingGuesses;
document.querySelector("#LettersGuessed").innerHTML = "Letters Guessed: " + guessesArray;
document.querySelector("#wins").innerHTML = "Wins: " + winCount;
document.querySelector("#losses").innerHTML = "Losses: " + lossCount;	
};


document.onkeyup = function (event) {
var userGuessClick = event.key;  
var userGuess = userGuessClick.toLowerCase();
		
			//Check that there are still letters to guess and the user still has guesses available;
	if (blankspaceArray.indexOf('_') !==-1 && remainingGuesses>0) 
		{
	     //The function will only do something if the key pressed is a letter of the alphabet
		   if(event.keyCode >= 65 && event.keyCode <= 90 )  
		     {  
		      		//Checking to see if the letter was already pressed before continuing
		      	if (guessesArray.indexOf(userGuess) === -1) 
		      	{		//Check if the guess is correct or not
				    if (question.indexOf(userGuess) === -1) {
				    	remainingGuesses--;
				    	
				    	if (remainingGuesses === 0) { //loss counter	
				    		lossCount++;
				    		document.querySelector("#EndingMsg").innerHTML = "You Need More Practice";
				    		document.getElementById("personimage").src="assets/images/"+question+".jpg";
				    		if (question === 'jonathan1' || question === 'jonathan2' || question === 'jonathan3') {
				    			document.querySelector("#game").innerHTML = "jonathan";
				    		}
				    		else {
				    		document.querySelector("#game").innerHTML = question;
				    		};
				    	}
				    	else {

				    	};
				    }
				    else {
				      			// for loop to replace blanks if the guess is correct
							for (i =0 ; i < question.length ;i++) 
							{ 
								if(userGuess === question[i]) 
								{
									blankspaceArray [i] = userGuess;
									document.querySelector("#game").innerHTML = "Who am I?" + "<br>" + blankspaceArray.join("");
									if (blankspaceArray.indexOf('_') ===-1) { //evaluate if the user wins 
										winCount++;
										document.getElementById("personimage").src="assets/images/"+question+".jpg";
										document.querySelector("#EndingMsg").innerHTML = "You Got It!";
									}
									else {
										
									};
								}
								else {

								};
							};
						};	
					guessesArray.push(userGuess);
				}
				else {
					
					
				}; 
		     }  
		   else  
		     {  	
		     };	

 		}
 	else{};  //end of the do loop


	
	RepeatingHtml();

};

document.getElementById('NewGame').onclick = NewGameFunction;
document.getElementById('Reset').onclick = Reset;
document.onkeyup();
