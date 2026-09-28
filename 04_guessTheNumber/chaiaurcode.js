//55 min
let randomNum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const remaining=document.querySelector('.lastResult');


const p=document.createElement('p');

let isPlay=true;
let prevGuess=[];
let guessCount=1;

if(isPlay){
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess<1){
        alert('please enter number greater than 1 ');
    }else if(guess>100){
        alert('please enter number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(guessCount>=10){//10m pe dikha do ki gaame over start new game 
            displayGuess(guess);
            displayMsg(`Game over .Random number was${randomNum}`);
            endGame();
        }else {
                displayGuess(guess);
                checkGuess(guess);
        }

        

        
    }

}

function checkGuess(guess){
    if(guess===randomNum){
        displayMsg(`you guessed it right !`);
        endGame();


    }else if(guess<randomNum){
        displayMsg(`NO, Your guessed Number is too low `);

    }else{
        displayMsg(`NO, Your guessed Number is too High`);
    }

}
function displayGuess(guess){
    userInput.value='';//updating value by making input value empty
    guessSlot.innerHTML+=`${guess} , `;//adding gueess to the previous guesses section
    guessCount++;//updating the value of count 
    remaining.innerHTML=`${11-guessCount}`;//show the remaining no of guesses





}
function displayMsg(msg){
    lowOrHi.innerHTML=`<h2>${msg}</h2>`;

}
function endGame(){
    //user input value ko empty karo then usko disable karo 
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');//adding clss to paragraph 
    p.innerHTML=`<h2 id="newGame">start new game</h2>`;//adding h2 in inner to paragraph 
    startOver.appendChild(p);//append child method me inverted coma nhi lagatey
    //jab game khatam hoga to ye paragraph dikhayega 

    isPlay=false;
    newGame();


}
function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    //ab jaise hi wo new game pe click krega,then

    newGameBtn.addEventListener('click',(e)=>{
        randomNum=parseInt(Math.random()*100+1);//make new random number
        prevGuess=[];//array become empty 
        guessCount=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-guessCount}`;
        userInput.removeAttribute('disabled');//disabled property hatado 
        startOver.removeChild(p);//p jo child game khatam hone ke baad dikhr ha h ,usko bhi remove kardo
        //remove child is method ,,dont use inverted coma inside method parameter
        displayMsg(``);

        isPlay=true;
    })


        


    


}

