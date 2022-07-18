const submitbutton=document.getElementById("checkButton")

console.log(checkButton);
var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);
var attemptCount=10;
var text;
const message=document.getElementById("message");
const lives=document.getElementById("lives")

submitbutton.onclick=() =>{
    var inputValue=document.getElementById("textBox").value;
    console.log(inputValue);
    attemptCount--;
    if(inputValue==randomNumber){
        location.href='./win.html'
        
    }
    else if(attemptCount==0){
        location.href='./lose.html'

    }
    else if(inputValue>randomNumber){
        text=`your guess is too high. ${attemptCount} remaining`;
    }
    else if(inputValue<randomNumber){
        text=`your guess is too low. ${attemptCount} remaining`;
    }
   // console.log(live)
   // console.log(text)
    message.style.display="inherit";
    message.innerHTML=text;
    lives.innerHTML=live;
}
