let message=document.querySelector('.message');



let highscore=0;
let score=20;
//document.querySelector('.number_tobe_guessed').textContent=numberToBeGuessed;
const scoreElement=document.querySelector('.score');
const highScoreElement=document.querySelector('.highscore');
const guessNumber= document.querySelector('.guess_number');
const body=document.querySelector('body');

const numberToBeGuessedElement=document.querySelector('.number_tobe_guessed');

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    
    scoreElement.textContent=score;
   
    message.textContent='Start guessing......';
    numberToBeGuessedElement.textContent="?";
    guessNumber.value='';
    body.style.backgroundColor='black';
});


const numberToBeGuessed=Math.trunc(Math.random()*20)+1;

    document.querySelector('.check').addEventListener('click',function(){
        let guess= Number(guessNumber.value);
        //when there is no input
        if (!guess){
            message.textContent='No Number!';
            return;
        }
        //when player wins the game
        else if(guess===numberToBeGuessed){

            message.textContent='Success';
            numberToBeGuessedElement.textContent=numberToBeGuessed;
            numberToBeGuessedElement.style.width='25rem';
            numberToBeGuessedElement.style.fontSize='5rem';
            body.style.backgroundColor='#60b347';
        //if new highsore occurs
            if(score>highscore) {
                highscore=score;
                
                highScoreElement.textContent=highscore;
            }
        }
        //if of cunch to play finished
        else if(score<1){
            message.textContent='You lost the game!';
             
        }
            //if guess number is too low
        else{
            if(guess< numberToBeGuessed){
                message.textContent='Too low';
               //if guess number is too high
            }else if(guess> numberToBeGuessed){
                message.textContent='Too high';
               
            }
            score--;
        
            scoreElement.textContent=score;
        }
       
        
        

    });


