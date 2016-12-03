
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

var questionsArray = ["igor",'jonathan1','boris','asha'] ;
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

if (question === 'jonathan1') {
	blankspaceArray = ['_','_','_','_','_','_','_','_'];
	document.querySelector("#game").innerHTML = "Who am I?" + "<br>" + blankspaceArray.join("");
	document.getElementById("personimage").src="../images/mystery_person.jpg";
	document.querySelector("#GuessesRemaining").innerHTML = "Guesses Remaining: " + remainingGuesses;
	document.querySelector("#wins").innerHTML = "Wins: " + winCount;
	document.querySelector("#losses").innerHTML = "Losses: " + lossCount;
}
else{
for (var i = 0; i < question.length; i++) {
	
	var blankspace = '_';
	
	blankspaceArray.push (blankspace);	
}
document.querySelector("#game").innerHTML = "Who am I?" + "<br>" + blankspaceArray.join("");
document.querySelector("#GuessesRemaining").innerHTML = "Guesses Remaining: " + remainingGuesses;
document.getElementById("personimage").src="../images/mystery_person.jpg";
document.querySelector("#GuessesRemaining").innerHTML = "Guesses Remaining: " + remainingGuesses;
document.querySelector("#wins").innerHTML = "Wins: " + winCount;
document.querySelector("#losses").innerHTML = "Losses: " + lossCount;	

}};

var Reset = function () {
	winCount=0;
	lossCount=0;
	NewGameFunction();
}


document.onkeyup = function (event) {
var userGuess = event.key;  
		

			//Check that there are still letters to guess and the user still has guesses available
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
										document.getElementById("personimage").src="../images/"+question+".jpg";
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
					console.log("usedLetter");
					
				}; 
		     }  
		   else  
		     {  	
		     };	

 		}
 	else{};  //end of the do loop

document.querySelector("#GuessesRemaining").innerHTML = "Guesses Remaining: " + remainingGuesses;
document.querySelector("#wins").innerHTML = "Wins: " + winCount;
document.querySelector("#losses").innerHTML = "Losses: " + lossCount;
document.querySelector("#LettersGuessed").innerHTML = "LettersGuessed: " + guessesArray;



console.log(userGuess);
console.log(guessesArray);
console.log(winCount);
console.log(lossCount);
console.log(remainingGuesses);	
};

document.getElementById('NewGame').onclick = NewGameFunction;
document.getElementById('Reset').onclick = Reset;
document.onkeyup();
