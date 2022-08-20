const quizForm = document.querySelector('#quiz-form')
const btnSubmit = document.querySelector('#btn-submit')
const outputDiv = document.querySelector('.outputDiv')


const correctAnswers = [
    "right",
    "Equilateral",
    "2 congruent sides",
    "180 degrees",
    "3", 
    "90°",
    "Equilateral triangle",
    "One right angle",
    "a + b + c",
    "no"
];


function calculate(e){
    e.preventDefault()
    let score = 0
    let index = 0
    const formScores = new FormData(quizForm)
    for(let value of formScores.values()){
        if(value === correctAnswers[index] && value !==''){
            score = score+1
        }
        index = index+1
    }
    outputDiv.innerText = `your score of triangle quiz is ${score}`
}

quizForm.addEventListener('submit',calculate)