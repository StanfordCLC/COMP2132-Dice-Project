// Get ID from html
const $dice11 = $('#dice11');
const $dice12 = $('#dice12');
const $dice21 = $('#dice21');
const $dice22 = $('#dice22');
const playDice = document.getElementById('playdice');
const rollButton = document.getElementById('rollbutton');
const reButton = document.getElementById('rebutton');
const popup = document.getElementById('popup');
const popupReButton = document.getElementById('popuprebutton');
const popupCloseButton = document.getElementById('popupclosebutton');
const $winnerProfile = $('#winnerprofile');
const winner = document.getElementById('winner');
// Player 01 ID
const $player1Profile = $('#player1profile');
const player1TotalScore = document.getElementById('player1totalscore');
const player1SubScore = document.getElementById('player1subscore');
// Player 02 ID
const $player2Profile = $('#player2profile');
const player2TotalScore = document.getElementById('player2totalscore');
const player2SubScore = document.getElementById('player2subscore');

// Return random number from 1 to 6
//Math.floor(Math.random()*7);

$("#popup").hide();
// Roll dice while clicking the roll button
let x = 0;
rollButton.addEventListener('click',function(){
    x++;
    document.getElementById("popup").style.opacity = 1;
    if(x <= 3){
        playDice.innerHTML = `Round: ${x}`;
        player01Roll();
        player02Roll();
        changePlayerProfile();
        checkRound();
    }
});

// Checking if it is 3 rounds
function checkRound(){
    if(x == 3){
        showPopup();
        changePlayerProfileFinal();
        document.getElementById('rollbutton').disabled = true;
    }
};

// Player 01 roll dice + count point
let p1Sub;
let p1TotalSub = 0;
let p1Total;
function player01Roll(){
    let d11 = Math.floor(Math.random()*6)+1;
    let d12 = Math.floor(Math.random()*6)+1;
    
    $dice11.attr("src",`images/dice-1-${d11}.png`);
    $dice12.attr("src",`images/dice-1-${d12}.png`);

    if(d11 == 1 || d12 == 1){
        p1Sub = 0;
        player1SubScore.innerHTML = p1Sub; 
    }else{
        if(d11 == d12){
            p1Sub = (d11 + d12)*2; 
            player1SubScore.innerHTML = p1Sub; 
        }else{
            p1Sub = d11 + d12;  
            player1SubScore.innerHTML = p1Sub;  
        }
    }
    p1Total = p1TotalSub + p1Sub;
    p1TotalSub = p1Total;
    player1TotalScore.innerHTML = `Total Score: ${p1Total}`;
};

// Player 02 roll dice + count point
let p2Sub;
let p2TotalSub = 0;
let p2Total;
function player02Roll(){
    let d21 = Math.floor(Math.random()*6)+1;
    let d22 = Math.floor(Math.random()*6)+1;
    
    $dice21.attr("src",`images/dice-2-${d21}.png`);
    $dice22.attr("src",`images/dice-2-${d22}.png`);

    if(d21 == 1 || d22 == 1){
        p2Sub = 0;
        player2SubScore.innerHTML = p2Sub; 
    }else{
        if(d21 == d22){
            p2Sub = (d21 + d22)*2; 
            player2SubScore.innerHTML = p2Sub; 
        }else{
            p2Sub = d21 + d22;  
            player2SubScore.innerHTML = p2Sub;  
        }
    }
    p2Total = p2TotalSub + p2Sub;
    p2TotalSub = p2Total;
    player2TotalScore.innerHTML = `Total Score: ${p2Total}`;
};

// Change player profile during each round
function changePlayerProfile(){
    if(p1Total > p2Total){
        $player1Profile.attr("src",`images/player-1-2.png`);
        $player2Profile.attr("src",`images/player-2-1.png`);
    }
    else{
        if(p1Total < p2Total){
            $player1Profile.attr("src",`images/player-1-1.png`);
            $player2Profile.attr("src",`images/player-2-2.png`);
        }else{
            $player1Profile.attr("src",`images/player-1-1.png`);
            $player2Profile.attr("src",`images/player-2-1.png`);          
        }
    }
};
// Change player profile at the end
function changePlayerProfileFinal(){
    if(p1Total > p2Total){
        $player1Profile.attr("src",`images/player-1-3.png`);
        $player2Profile.attr("src",`images/player-2-4.png`);
        $winnerProfile.attr("src",`images/player-1-3.png`);
        playDice.innerHTML = `Player 01 Win!`;
        winner.innerHTML = `Player 01 Win!`;
    }
    else{
        if(p1Total < p2Total){
            $player1Profile.attr("src",`images/player-1-4.png`);
            $player2Profile.attr("src",`images/player-2-3.png`);
            $winnerProfile.attr("src",`images/player-2-3.png`);
            playDice.innerHTML = `Player 02 Win!`;
            winner.innerHTML = `Player 02 Win!`;
        }else{
            $player1Profile.attr("src",`images/player-1-4.png`);
            $player2Profile.attr("src",`images/player-2-4.png`);    
            $winnerProfile.attr("src",`images/player-3-1.png`);  
            playDice.innerHTML = `Tie`; 
            winner.innerHTML = `Tie`;       
        }
    }
};

//Restart match
reButton.addEventListener('click',function(){
    reset();
    closePopup();
});
popupReButton.addEventListener('click',function(){
    reset();
    closePopup();
});

function reset(){
    x = 0
    $player1Profile.attr("src",`images/player-1-1.png`);
    $dice11.attr("src",`images/dice-1-0.png`);
    $dice12.attr("src",`images/dice-1-0.png`);
    player1SubScore.innerHTML = 0; 
    player1TotalScore.innerHTML = `Total Score: 0`;
    p1Total = 0;
    p1TotalSub = 0;

    $player2Profile.attr("src",`images/player-2-1.png`);  
    $dice21.attr("src",`images/dice-2-0.png`);
    $dice22.attr("src",`images/dice-2-0.png`);
    player2SubScore.innerHTML = 0; 
    player2TotalScore.innerHTML = `Total Score: 0`;
    p2Total = 0;
    p2TotalSub = 0;

    playDice.innerHTML = `Round:`;
    document.getElementById('rollbutton').disabled = false;
    $winnerProfile.attr("src",`images/player-3-1.png`);  
};

// Winner Pop up

popupCloseButton.addEventListener('click',function(){
    closePopup();
});
function showPopup(){
    $("#popup").show(1000);
};
function closePopup(){
    $("#popup").hide(1000);
};