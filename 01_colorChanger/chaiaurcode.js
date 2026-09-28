const btns=document.querySelectorAll('.button');
const body=document.querySelector('body');
btns.forEach((btn)=>{
// console.log(btn);
btn.addEventListener('click',(e)=>{
    console.log(e.target.id);
    // console.log(e.target.id);
    // switch(e.target.id){
    //     case "grey":
    //         body.style.backgroundColor=e.target.id;
    //         break;
    //     case "white":
    //         body.style.backgroundColor=e.target.id;
    //         break;
    //     case "blue":
    //         body.style.backgroundColor=e.target.id;
    //         break;
    //     case "yellow":
    //         body.style.backgroundColor=e.target.id;
    //         break;
    //     default:
    //         body.style.backgroundColor="red";
        
    // }
    body.style.backgroundColor=e.target.id;




})
})