const clock=document.getElementById('clock');
// const clock=document.querySelector('#clock');

//ABOVE both values are same you can get any one

 
setInterval(()=>{
    const date=new Date();//its an inbuilt object 

    clock.innerHTML=date.toLocaleTimeString();//return Hour:minute;sec am/pm 

    //note-->in date we have object which conatin multiple items 
    //toLocaleDateString()-->method in object that -->return Hour:minute;sec am/pm 

},1000);

//SINCE WANT WANT TIME TO UPDATE EVERY SECOND SO WE USE setInterval(callback,time in millisecond)
//1000=1 second 
//2000=2 second


