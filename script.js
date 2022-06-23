function generateRandomNumber(){
    //1-10
    return Math.floor(Math.random() * 20) + 1;
}

function updateText_incorrect(userInput){
    if(userInput == ""){
        hintText.innerHTML = "Input something. 🤨";
    }
    else if(userInput < randomNumber){
        hintText.innerHTML = "📉 too low";
    }
    else if(userInput > randomNumber){
        hintText.innerHTML = "📈 too high";
    }

    scoreText.innerHTML = parseInt(scoreText.innerHTML) - 1;
}

function updateText_correct(){
    if(scoreText.innerHTML > highscoreText.innerHTML){
        highscoreText.innerHTML = scoreText.innerHTML;
    }

    body.classList.add("correctBackground");
    titleText.innerHTML = "Correct Answer!";
    correctNumber.innerHTML = randomNumber;
    hintText.innerHTML = "Correct 👍";
}

function disableCheckedBtn(){
    checkBtn.disabled = true;
    checkBtn.classList.remove("btn--hover");
    checkBtn.classList.add("disabledButton");
}

function enableBtn(){
    checkBtn.disabled = false;
    checkBtn.classList.add("btn--hover");
    checkBtn.classList.remove("disabledButton");
}

function reset(){
    body.classList.remove("correctBackground");
    enableBtn();
    titleText.innerHTML = "Guess My Number!";
    correctNumber.innerHTML = '<i class="fa-solid fa-question"></i>';
    hintText.innerHTML = "Start guessing...";
    scoreText.innerHTML = "20";
}

let randomNumber = 0;
randomNumber = generateRandomNumber();
console.log(randomNumber);

let body = document.getElementsByTagName("body")[0];
let titleText = document.getElementById("title");
let correctNumber = document.getElementById("correctNumber");
let hintText = document.getElementById("hint");
let scoreText = document.getElementById("score");
let highscoreText = document.getElementById("highscore");
let againBtn = document.getElementById("againBtn");
let checkBtn = document.getElementById("checkBtn");

againBtn.addEventListener("click", function(){
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    
    reset();
});

checkBtn.addEventListener("click", function(){
    
    let userInput = document.querySelector('input').value;

    if(userInput == randomNumber){
        updateText_correct();
        disableCheckedBtn();
    }
    else{
        updateText_incorrect(userInput);
    }
});