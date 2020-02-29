
 // global trackers
        
 var wins = 0; 
 var losses = 0;
 var remainingGuesses = 0;
 var mistakesMade=0;
 var lettersGuessed = [];
 var answerArray = [];
 var remainingLetters = 0;
 var currentWord = [];
 
 
 var wordBank = [
         "yosemite",
         "olympic",
         "zion",
         "yellowstone",
         "moajve",
         "glacier",
         "sequoia",
 ];
  
 function initializeGame() {
         lettersGuessed = [] {
                 lettersGuessed = [];
                 answerArray = [];
                 remainingLetters = 0;
                 currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
 
                 for (var i = 0; i < currentWord.length; i++) {
                         answerArray.push("_");
                         console.log(currentWord);
 
                 }
                 }
 }
 
 $(doucment).ready();
  $(document).on('keypress' , function(event) {
                 var userGuess = event.key.tolowercase();
  
 }
 ) 
 lettersGuessed = [];
 answerArrray = [];
 remainingLetters
 }
 
         for (var k = 0; k < lettersGuessed.length; k++) {
                 if (lettersGuessed[k] === userGuess) {
                 alert('You already picked that!')
                 }
         }
 
         lettersGuessed.push(userGuess);
                 $("#lettersGuessed").text(lettersGuessed);
         
         
         currentWord.indexOf(userGuess);
         if (currentWord.indexOf(userGuess) !== -1){
 
         for (var j = 0; j < currentWord.length; j++) {
                 if (currentWord[j] === userGuess) {
                         answerArray[j] = userGuess;
                         if (remainingLetters === 0 ) { 
                 wins++
                 initialiazeGame();
         }
 }
 }
 } else {mistakesMade++;
         reaminingGuesses--;                
         }
         }
         }
         }
 {}
         
 