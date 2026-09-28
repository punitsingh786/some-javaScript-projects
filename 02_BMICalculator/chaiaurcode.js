const form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
    //it stops event to occur ,i.e, stops form to get immediately submitted
    event.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    //note1-->querySelector return-->input type whole div,,.value--return specific value 
    //parseInt--convert any decimal  to int and return int otherwise return NaN
    const results=document.querySelector('#results');//access result from html 


    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`plese enter a valid height ,your entered height is${height}`;
    } 
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please enter a valid weight,your entered weight is ${weight}`;
    }
    else{//if height and weight both are right 
        const bmi=(weight/((height*height)/10000)).toFixed(2);//fix it to 2 decimal places 
        if(bmi<18.6){
            results.innerHTML=`you are under weight  and bmi is:${bmi}`;
        }else if(bmi>=18.6 && bmi<24.9){
            results.innerHTML=`your weight is normal and bmi is:${bmi}`;
        }else{
            results.innerHTML=`you are overWeight and bmi is:${bmi}`;
        }
        
    

    }
    


})