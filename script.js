score=0;
cross= true;

let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');
function playMusic() {
    audio.play().catch(error => console.log("Autoplay blocked:", error));

    document.removeEventListener("click", playMusic);
    document.removeEventListener("keydown", playMusic);
}

document.addEventListener("click", playMusic);
document.addEventListener("keydown", playMusic);


document.onkeydown = function(e){
    console.log("key code is:", e.key)
    if(e.key=='ArrowUp'){
        character= document.querySelector('.character');
        character.classList.add('animate');
        setTimeout(() => {
          character.classList.remove('animate');  
        }, 700);
}

    if(e.key=='ArrowRight'){
      character= document.querySelector('.character');
        characterX=parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left=characterX+122+"px";
    }
    if(e.key=='ArrowLeft'){
      character= document.querySelector('.character');
        characterX=parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left=(characterX-122)+"px";
    }
  }
setInterval(() => {
    let character = document.querySelector('.character');
    let gameover = document.querySelector('.gameover');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);
    if (offsetX < 113 && offsetY< 52) { 
        gameover.style.visibility = 'visible'; 
          obstacle.classList.remove('obstacleAni');
          audiogo.play();
          setTimeout(() => {
            audiogo.pause();
          }, 1000);
          audio.pause();
        }
else if(offsetX<145 &&cross){
  score+=1;
  updatescore(score);
  cross=false;
  setTimeout(() => {
    cross =true;
  }, 1000);
setTimeout(() => {
  aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
  newDur=aniDur-0.1;
  obstacle.style.animationDuration=newDur+"s";
}, 500);
  
}

    }, 10);
    function updatescore(score){
      let scorecont= document.querySelector('.scorecont');
      if(scorecont){
        scorecont.innerHTML ="Your score is: "+score;
      }
      }
      
    
      

    



