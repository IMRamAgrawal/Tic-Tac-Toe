let turn = "X";
let gameover= false;
let music = new Audio("ting.mp3")
let overmusic = new Audio("gameover.mp3")

// Function to change the turn
function changeTurn(){
return turn === "X"? "0":"X"
 }

 // Function to check for a win
function checkWin(){
    let boxtext = document.getElementsByClassName("boxtext");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [1,4,7],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)  && (boxtext[e[1]].innerText !== "")){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerHTML + " Won";
            gameover= true
            overmusic.play();
            document.getElementsByTagName("img")[0].style.width = "200px";
        }
    })
}

let boxes = document.getElementsByClassName("box");
//const element = document.querySelector('.boxtext');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',() =>{
      if(boxtext.innerHTML === ""){
        boxtext.innerText = turn;
        music.play()
        turn =  changeTurn();
        checkWin();
        if(!gameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }   
      }
})
})

//Functionality For Reset Button
let button = document.getElementsByClassName("button")[0]
button.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{element.innerHTML = ""});
    turn = "X";
    document.getElementsByTagName("img")[0].style.width = 0;
    gameover = false;
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
})
     





