$(document).ready(function () {
        
        // global variables
        
        var wins = 0;
        var losses = 0;
        var remainingGuesses = 12;
        var mistakesMade = 0;
        var remainingLetters = 0;

        var lettersGuessed = [];
        var answerArray = [];
        var currentWord = [];
 
 
        var wordBank = [
                "yosemite",
                "olympic",
                "zion",
                "yellowstone",
                "mojave",
                "glacier",
                "sequoia"
        ];

        function initializeGame() {
                lettersGuessed = [];
                answerArray = [];
                remainingLetters = 0;
                currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
        }

        ////start game
        initializeGame();

        ////prevent users from reselecting characters

        for (var k = 0; k < lettersGuessed.length; k++) {
                if (lettersGuessed[k] === userGuess) {
                        alert('You already picked that!')
                }

                //event listener
                $(document).on('keypress', function (event) {
                        var userGuess = eventKey.toLowercase();
                        console.log('user guess', userGuess)
                        if (remainingGuesses > 0) { //if remaining asnsers are greater than zero continue to...
                                lettersGuessed.push(userGuess);
                                $("#lettersGuessed").text(lettersGuessed);
                                //take the user selected letter and included in UserGuess array
                                currentWord.indexOf(userGuess);
                                //compare the current word to the position of the userGuess
                                if (currentWord.indexOf(userGuess) !== -1) {
                                        //if the index of the user guess is not =1 than repeat for the length of the current word
                                        for (var i = 0; i < currentWord.length; i++) {
                                                answerArray.push("_"); //for letters assigned 0 value push to answer array
                                                console.log(currentWord);
                                        }//remaining letters equal to the current word. stored in answer and pushed toward updating the answer ID
                                        remainingLetters = currentWord.length;
                                        $("#answer").text(answerArray);
                                        //
                                }
                                //determine winner
                                for (var j = 0; j < currentWord.length; j++); {
                                        if (currentWord[j] === userGuess) {
                                                answerArray[j] = userGuess;
                                                remainingLetters--
                                                if (remainingLetters !== 0) {
                                                        alert("No Hiking For You!");
                                                        initializeGame();
                                                }
                                                //user wins - game reset
                                                if (remainingLetters === 0) {
                                                        wins++
                                                        initializeGame();
                                                }
                                                
                                        }
                                }
                        }
                }
        }
}
});