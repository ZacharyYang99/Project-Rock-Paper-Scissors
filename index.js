alert("Hello World") 
function getComputerChoice (){
    let num=Math.random();
    console.log(num) ;
    if (num<=0.333) return "rock";
    else if (num <=0.666) return "paper";
    else return "scissors";
}

let getHumanChoice = ()=> prompt("your choice");


let humanScore=computerScore=0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  humanChoice=humanChoice.toLowerCase();
  if (humanChoice===computerChoice) {
    alert(`draw! human ${humanChoice} bot ${computerChoice}`)
  } else if (humanChoice==="rock"&&computerChoice==="scissors"
    ||humanChoice==="paper"&&computerChoice==="rock"
    ||humanChoice==="scissors"&&computerChoice==="paper"
  ){
    humanScore++;
    alert(`human wins!human ${humanChoice} bot ${computerChoice}`)
  }else {alert(`bot wins!human ${humanChoice} bot ${computerChoice}`)
    computerScore++;
}
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    alert(humanScore+" "+computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    alert(humanScore+" "+computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    alert(humanScore+" "+computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    alert(humanScore+" "+computerScore);
    playRound(getHumanChoice(), getComputerChoice());
    alert(humanScore+" "+computerScore);
    if (humanScore>computerScore) alert("human beats bot");
    else alert("human is loser")
}

playGame();

