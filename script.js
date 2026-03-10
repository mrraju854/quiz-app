let questions = [

{
question: "HTML ka full form kya hota hai?",
options: [
"Hyper Text Machine Language",
"Hyper Text Markup Language",
"High Text Markup Language",
"None"
],
correct: 1
},

{
question: "CSS ka use kis liye hota hai?",
options: [
"Database",
"Styling",
"Backend",
"Logic"
],
correct: 1
},

{
question: "JavaScript kis type ki language hai?",
options: [
"Programming",
"Markup",
"Styling",
"None"
],
correct: 0
},

{
question: "Website ka structure kis se banta hai?",
options: [
"HTML",
"CSS",
"JavaScript",
"Python"
],
correct: 0
},

{
question: "CSS ka full form kya hai?",
options: [
"Cascading Style Sheets",
"Color Style Sheets",
"Creative Style System",
"None"
],
correct: 0
}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const question = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

function showQuestion(){

answered = false;

let q = questions[currentQuestion];

question.textContent = q.question;

options.forEach((btn,index)=>{

btn.textContent = q.options[index];

btn.style.background="#f1f1f1";
btn.style.color="#000";

btn.disabled=false;

btn.onclick = ()=>checkAnswer(index);

});

nextBtn.style.display="none";

updateProgress();

}

function checkAnswer(selected){

if(answered) return;

answered = true;

let correct = questions[currentQuestion].correct;

options.forEach((btn,index)=>{

btn.disabled=true;

if(index===correct){
btn.style.background="green";
btn.style.color="white";
}

if(index===selected && index!==correct){
btn.style.background="red";
btn.style.color="white";
}

});

if(selected===correct){
score++;
}

nextBtn.style.display="block";

}

nextBtn.onclick = ()=>{

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

showScore();

}

};

function updateProgress(){

let percent = (currentQuestion / questions.length) * 100;

progress.style.width = percent + "%";

}

function showScore(){

document.getElementById("quizBox").innerHTML =

"<h2>Quiz Completed 🎉</h2>" +

"<p>Your Score: "+score+" / "+questions.length+"</p>" +

"<button class='restart-btn' onclick='restartQuiz()'>Restart Quiz</button>";

}

function restartQuiz(){

currentQuestion=0;
score=0;

location.reload();

}

showQuestion();