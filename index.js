const btnNumbers = document.getElementsByClassName("btn-number");
const btnOperators = document.getElementsByClassName("action--operator");
const outcome = document.getElementById("result");
const btnEqual = document.getElementById("equal");
const btnAC = document.getElementById("clear");
function logText(event){
    outcome.innerText = event.target.innerText;
    console.log(event.target.innerText);
}

for ( let i = 0 ; i <btnNumbers.length ; i++){
    btnNumbers[i].addEventListener("click" ,logText ,);
    
}

function operator(event){
    outcome.innerText = event.target.innerText;
    console.log(event.target.innerText);
}

for(let j = 0 ; j < btnOperators.length ; j++){
    btnOperators[j].addEventListener("click" , operator);
}
function clear(event){
    outcome.innerText= 0;
    console.log(outcome.innerText)
    
}
    btnAC.addEventListener("click",clear);

    btnEqual.addEventListener("click" ,() => {
        try{
            outcome.innerText = eval(outcome.innerText);
        }
        catch(error){
            outcome.innerText ='Lỗi';
        }
    })

