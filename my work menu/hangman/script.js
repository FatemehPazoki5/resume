let word=["فاطمه","مادر","دریانورد","ملاصدرا","سحرخیزان","خواهرانه","بردباری","پازوکی","پدرانه"];
let randomWord="";
let splitRandomWord=[];
let chekLetter=[];
let showSplitRandomWord="";
let mistake=0;
let leters=document.querySelectorAll(".letter");
let PsecretWord=document.querySelector("#clueP");
leters.forEach(function(item){
    item.addEventListener("click",buttonHandeler);    
})
window.addEventListener("keydown",keyHandeler);
function findRandomWord(){
    randomWord=word[Math.floor(Math.random()*word.length)];
    console.log(randomWord);
    splitRandomWord=randomWord.split("");
    console.log(splitRandomWord);
}
function buttonHandeler(event){
    letterHandeler(event.target.id);
}
function keyHandeler(event){
    letterHandeler(event.key);
}

function letterHandeler(letter){
    console.log(letter);
    chekLetter.indexOf(letter)==-1 ? chekLetter.push(letter):null;
    document.getElementById(letter).className="used";
    console.log(chekLetter); 
    if(splitRandomWord.indexOf(letter)>= 0){
        setUnderScores();
        checkWin();
    }
    else{
        checkLose();
        changePic();
    }
} 


function setUnderScores(){
    showSplitRandomWord=splitRandomWord.map(letter =>chekLetter.indexOf(letter)>=0 ? letter: "-")
    console.log(showSplitRandomWord);
    document.getElementById("clue").innerHTML=showSplitRandomWord.join("");
}
function checkWin(){
    if(showSplitRandomWord.join("")===randomWord){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src="assets/winner.png";
    }
}
function checkLose(){
    mistake++;
    console.log(mistake);
    if(mistake==6){
        document.getElementById("clue").innerHTML=`کلمه ی مورد نظر :${randomWord}`;
        document.getElementById("gameover").querySelector("p").style.display="block";
    }
}
function changePic(){
    document.getElementById("image").querySelector("img").src=`assets/hangman${mistake}.png`;
}
findRandomWord();
setUnderScores();