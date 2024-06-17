document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe')
    let isJumping = false;

    const jump = () => {
        if (!isJumping) {
            isJumping = true;
            mario.style.bottom = '180px'; 

            setTimeout(() => {
                mario.style.bottom = '0'; 
                isJumping = false;
            }, 500); 
        }
    };

    const loop = setInterval(()=>{
        console.log('loop')

        const pipePosittion = pipe. offsetLeft;
        const marioPosition = +window.getComputedStyle( mario).bottom .replace('px', '')
        console.log(marioPosition)

        
        if(pipePosittion<= 120 && pipePosittion >0  && marioPosition<80  ){
            pipe.style.animation = 'none'; 
            pipe.style.left = `${pipePosittion}px`;

            mario.style.animation = 'none'; 
            mario.style.bottom = `${marioPosition}px`;

            mario.src = "game-over.png"
            mario .style.width = '75px'
            mario.style.marginLeft='50px'
            
            clearInterval(loop)
        }

   
   
    }, 10)
        
    
    

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            jump();
        }
    });
});
 