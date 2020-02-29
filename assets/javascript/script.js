
 // global trackers
        
 var wins = 0; 
 var losses = 0;
 var remainingGuesses =12;
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
  
        function initializeGame( ) {
                lettersGuessed = [ ];
                answerArray = [ ];
                remainingLetters = 0;
                currentWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
                                
                        
                for (var i = 0; i < currentWord.length; i++) {
                         answerArray.push("_");
                         console.log(currentWord);
                }
                        remainingLetters = currentWord.length;
                        $("#answer").text(answerArray);
                };
                
                initializeGame(); 

                $(document).ready();
                        $(document).on('keypress' , function(event) {
                                var userGuess = event.key.toLowercase();
                                console.log('user guess', userGuess)
                                if (remainingGuesses > 0) {

                                lettersGuessed.push(userGuess);
                                        $("#lettersGuessed").text(lettersGuessed);
                                        
                                        
                                currentWord.indexOf(userGuess);
                                        if (currentWord.indexOf(userGuess) !== -1) {
                                        
                                ['yosemite']
                                                'y' - 0, 'o' - 0, 's' - 0, 'e' - 0, 'm' - 0, 'i' - 0, 't' - 0, 'e' - 0,
                                                
                                        for  (var j = 0; j < currentWord.length; j++) {
                                                if (currentWord[j] === userGuess) {
                                                        answerArray[j] = userGuess;
                                                        remainingLetters--
                                                        if (remainingLetters === 0 ) { 
                                                wins++
                                                initialiazeGame();
                                        }
                                }
                        }
                                        } else {
                                                mistakesMade++
                                                reaminingGuesses--;        
                                        }
                                }
                        }
                
               
        }];
         
 