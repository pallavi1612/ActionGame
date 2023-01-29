score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio ('gameover.mp3');
setTimeout(()=>{
audio.play();
},1000);

document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
    setTimeout(()=>{
        dino.classList.remove('animateDino');
    
    },700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = dinoX +112 +'px';
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = (dinoX -112) + 'px';
    }
}
setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    dragon = document.querySelector('.dragon');

    dx =parseInt( window.getComputedStyle(dino , null).getPropertyValue('left'));
    dy =parseInt( window.getComputedStyle(dino , null).getPropertyValue('top'));

    drx =parseInt( window.getComputedStyle(dragon , null).getPropertyValue('left'));
    dry = parseInt (window.getComputedStyle(dragon , null).getPropertyValue('top'));

    offsetX = Math.abs(dx - drx);
    offsetY = Math.abs(dy - dry);

    if (offsetX < 73 && offsetY <52){
        gameOver.style.visibility = 'visible';
        dragon.classList.remove('dragonAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
           // audio.pause();

        },1000);
    }
    else if(offsetX < 145 && cross){
        score+= 1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
        
        

        setTimeout(()=>{
            aniDur =  drx =parseFloat( window.getComputedStyle(dragon , null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            dragon.style.animationDuration = newDur + 's';
        },500);
    }


},10);



function updateScore(score){
    scoreCount.innerHTML = "Your Score:" + score;
}