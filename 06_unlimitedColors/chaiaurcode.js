const startBtn=document.querySelector('#start');
const stopBtn=document.querySelector('#stop');
const body=document.querySelector('body');



//firstly generating random hex value and returning
const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    
    
    for(let i=0;i<6;i++){
        const random=parseInt(Math.random()*16);
        color+=hex[random];
    }
   
    return color;




}
//initializing global intervalId---to use everyWhere
let intervalId;

//changing color while clicking on start and with the help of hex value 
const startChangingColor=function(){

    const changeBgColor=function(){
        body.style.backgroundColor=randomColor();
    }
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000);

    }
    

}

startBtn.addEventListener('click',startChangingColor);
 


//stoping interval
const stopChangingColor=function(){
    clearInterval(intervalId);
    //trying to free memory after use
    intervalId=null;
    
}
stopBtn.addEventListener('click',stopChangingColor);

