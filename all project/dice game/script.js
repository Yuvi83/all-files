//player name
var player1="player1";
var player2="player2";
//function to change the player
function editnames(){
    player1=prompt("changeplayer 1 name");
    player2=prompt("changeplayer 2 name");
    document.querySelector("p.player1").innerHTML=player1;
    document.querySelector("p.player2").innerHTML=player2;
    
    
}
//function on roll the dice
function rollthedice(){
    setTimeout (function() {
     var randomNumber1 = Math.floor(Math.random()*6)+1;      //1-6
     var randomNumber2 = Math.floor(Math.random()*6)+1;      //1-6
     document.querySelector(".img1").setAttribute("src","dice" +randomNumber1+ ".jpg");
     document.querySelector(".img2").setAttribute("src","dice" +randomNumber2+ ".jpg");
     if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="player 1 wins";
    }
    else if
        (randomNumber2>randomNumber1){
            document.querySelector("h1").innerHTML="player 2 wins";
        }
    
    else{
        document.querySelector("h1").innerHTML="draw";
    }

    },2500);
}



/*
//player1
var randomnumber1 = Math.floor(Math.random()*6)+1;      //1-6
var randomDiceImage = "dice"+randomnumber1 + ".jpg" ;    //dice1.jpg to dice6.jpg
var randomImagesSource="dicegame/" + randomDiceImage;        //images/ dice1.jpg to dice6.jpg
var image1=document.querySelectorAll("img")[0];

image1.setAttribute=("src",randomImagesSource);

//player2

var randomnumber2 = Math.floor(Math.random()*6)+1;      //1-6
var randomDiceImage = "dice"+randomnumber2 + ".jpg" ;    //dice1.jpg to dice6.jpg
var randomImagesSource="dicegame/" + randomDiceImage;        //images/ dice1.jpg to dice6.jpg


//var randomImagesSource2="dicegame/dice" + randomnumber2 +".jpg";        
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute = ("src",randomImagesSource);





if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if
    (randomnumber2>randomnumber1){
        document.querySelector("h1").innerHTML="player 2 wins";
    }

else{
    document.querySelector("h1").innerHTML="draw";
}

*/

   

