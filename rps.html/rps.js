let userScore=0;
let compScore=0;


    
var uscore=document.querySelector("#user-score");
var cscore=document.querySelector("#comp-score");





var msg=document.querySelector(".msg");
msg.style.backgroundColor="green";
msg.style.color="white"
var genCompChoice=()=>{
    var option=["rock","paper","scissor"];
    var randInt=Math.floor(Math.random()*3);
    return option[randInt];
}
var playGame=(choiceID)=>{
    
    var compChoice=genCompChoice();
    console.log("user choice",choiceID);
    console.log("comp",compChoice);
    if(choiceID===compChoice){
        msg.style.backgroundColor="grey";
        msg.innerHTML="Oops Draw!"
    }
    if(choiceID==="rock"&&compChoice=="scissor"){
        msg.style.backgroundColor="green";
        msg.innerHTML="You Wins"
        userScore++;
        uscore.innerHTML=userScore;
    }
    else if(choiceID==="paper"&&compChoice=="rock"){
        msg.style.backgroundColor="green";
        msg.innerHTML="You Wins"
        userScore++;
        uscore.innerHTML=userScore;
    }
    else if(choiceID==="scissor"&&compChoice=="paper"){
        msg.style.backgroundColor="green";
        msg.innerHTML="You Wins"
        userScore++;
        uscore.inneText=userScore;
    }
    
    else if(compChoice==="rock"&&choiceID=="scissor"){
        msg.style.backgroundColor="red";
        msg.innerHTML="You Lost:( Computer Wins";
        compScore++;
        cscore.innerHTML=compScore;
    }
    else if(compChoice==="paper"&&choiceID=="rock"){
        msg.style.backgroundColor="red";
        msg.innerHTML="You Lost:( Computer Wins";
        compScore++;
        cscore.innerHTML=compScore;
    }
    else if(compChoice==="scissor"&&choiceID=="paper"){
        msg.style.backgroundColor="red";
        msg.innerHTML="You Lost:( Computer Wins";
        compScore++;
        cscore.innerHTML=compScore;
    }

    
    
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        var choiceID=choice.getAttribute("id");
        playGame(choiceID);
    
    });

});

