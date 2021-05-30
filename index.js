console.log('Dragon Game is here for play');

let count = 0;
let cross = true;

document.onkeydown = function(e){
    // console.log("key is pressed", e.keyCode);
    if (e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animationDino');
        setTimeout(() => {
            dino.classList.remove('animationDino');
        }, 700);
    }
    else if (e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 +'px';
    }
    else if (e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 +'px';
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    scoreCount = document.querySelector('.scoreCount');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    // console.log(dx)
    // console.log(dy)

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    
    // console.log(offsetX)
    // console.log(offsetY)
    if(offsetX < 115 && offsetY < 70){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animationObstacle');
    }
    else if(offsetX < 145 && cross){
        count += 1; 
        html = `Your Score: ${count}`;
        scoreCount.innerHTML = html;        
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // setTimeout(() => {
        //     let aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     console.log('animation Duartion: ', aniDuration);
        //     if(aniDuration > 3.3){
        //         newDuartion = aniDuration - 0.2;
        //         obstacle.style.animationDuration = newDuartion + 's';
        //         console.log('new animation Duartion: ', newDuartion);
        //     }
        //     else{
        //         newDuartion = aniDuration + 0.2
        //         obstacle.style.animationDuration = newDuartion + 's';
        //     }
        // }, 500);
    }
}, 100);