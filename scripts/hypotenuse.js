const inputSide = document.querySelectorAll(".inputDiv");
const btnCalculate = document.querySelector("#btn-submit");
const outputBox = document.querySelector("#outputDiv");



function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares; 
}

function calculateLength(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSide[0].value), Number(inputSide[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
}

function calculateHypotenuse() {
    var side1 =inputSide[0].value;
    var side2 =inputSide[1].value;
    if(!side1 || !side2) {
        outputBox.innerText = `Please enter all the fields`
    }
    
    else if(side1 < 1 || side2 <1){
        outputBox.innerText = `The value should not be negative or zero`
    }
    else{
        calculateLength(inputSide.value)
    } 
    
    
}

btnCalculate.addEventListener("click", calculateHypotenuse)