let randomNumber = Math.round(Math.random()*100+1)
const result = document.querySelector('.result')
const guessesRemaining= document.querySelector('.remaining-guess')
const prevGuess =document.querySelector('.prev-guess');
const submitButton= document.querySelector('.submit')
const newGame = document.querySelector('.newGame')



let guessCount = 10;
function validateGuess(guess){

  if(guess>100){
       result.innerHTML = "enter a number less than 100!"
  }
  else if(guess<1){
    result.innerHTML='enter a number greater than 1';
    
  }
  else{
      if(checkGuessCount())
   {
    playGame(guess)
   }
   else{
    result.innerHTML=`The game is Over You lose!`
    
   }
  }
}

function checkGuessCount(){
      return guessCount;
}

function updateGuess(){

  guessCount = guessCount-1
  guessesRemaining.innerHTML=`${guessCount}`
}

function playGame(guess){
      if(guess<randomNumber){
        result.style.color='red';
        result.innerHTML=`The  number ${guess} is too low!`;
      }
      else if(guess>randomNumber){
        result.style.color='red';
        result.innerHTML=`The number ${guess} is too high`
      }
      else if(guess===randomNumber){
        result.style.color='rgb(0,255,0)';
        result.innerHTML = `You Won ! correct guess is ${randomNumber}. Game Over`
      
      }
      prevGuess.innerHTML=`${guess}`
     updateGuess();
     
}

function gameOver(){
       
         inputGuess = document.querySelector('.guess-box');
          inputGuess.innerHTML=''
          result.innerHTML=''
          prevGuess.innerHTML=''
          guessesRemaining.innerHTML='10'
        guessCount=10;

}

submitButton.addEventListener('click',()=>{
  let inputGuess = parseInt(document.querySelector('.guess-box').value)
  validateGuess(inputGuess);
})
newGame.addEventListener('click',()=>{
  gameOver()
  randomNumber = Math.round(Math.random()*100+1)

})
