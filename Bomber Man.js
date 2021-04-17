// Creating variables
var myX = 0, myY = 0,updates=0;
let BeeX = 0, BeeY = 0;
let HeroX = 100, HeroY = 150;
let BeeMoveX = 2, BeeMoveY = 2;
let i = 0, n = 0, bx = [], by = [], t = [];
let gameover = false, lives = 3;
let diamondx, diamondy, diamondCount = 0, score = 0;
function update() {
    if(!gameover)
    {
        if(diamondCount == 0)
        {
            diamondx = randomInteger(755);
            diamondy = randomInteger(505);
            diamondCount++;
        }
        if(lives == 0)
        {
            gameover = true;
        }
        if(areColliding(BeeX, BeeY, 60, 60, HeroX, HeroY, 60, 60))
        {
            lives--;
            BeeX = 0;
            BeeY = 0;
            HeroX = 100;
            HeroY = 150;
        }
        if(isKeyPressed[65])
        {
            HeroX-=2;
        }
        if(isKeyPressed[68])
        {
            HeroX+=2;
        }
        if(isKeyPressed[83])
        {
            HeroY+=2;
        }
        if(isKeyPressed[87])
        {
            HeroY-=2;
        }

        if(HeroX > 740){HeroX = 740;}
        if(HeroX < 0){HeroX = 0;}
        if(HeroY > 480){HeroY = 480;}
        if(HeroY < 0){HeroY = 0;}
        d = Math.sqrt((HeroX - BeeX) * (HeroX - BeeX) + (HeroY - BeeY) * (HeroY - BeeY));
        if(d >= 4)
        {
            BeeX = BeeX + (HeroX - BeeX)/d*1;
            BeeY = BeeY + (HeroY - BeeY)/d*1;
        }
        if(areColliding(HeroX, HeroY, 60, 60, diamondx, diamondy, 45, 45))
        {
            diamondCount--;
            score += 100;
        }

        for(i = 0; i < n;i++)
        {
            t[i] -= 5;
            if(t[i] == 0)
            {
                if(areColliding(HeroX, HeroY, 60, 60, bx[i], by[i], 45, 45))
                {
                    lives--;
                    BeeX = 0;
                    BeeY = 0;
                    HeroX = 100;
                    HeroY = 150;
                }
                if(areColliding(BeeX, BeeY, 60, 60, bx[i], by[i], 45, 45))
                {
                    BeeX = 0;
                    BeeY = 0;
                    score += 500;
                }       
            }
            if(t[i] < 0 && t[i] >= -5)
            {
                if(areColliding(HeroX, HeroY, 60, 60, bx[i], by[i], 60, 60))
                {
                    lives--;
                    BeeX = 0;
                    BeeY = 0;
                    HeroX = 100;
                    HeroY = 150;
                }     
                if(areColliding(BeeX, BeeY, 60, 60, bx[i], by[i], 60, 60))
                {
                    BeeX = 0;
                    BeeY = 0;
                }               
            }
        }
        console.log("Score: ", score);
        if(score == 10000)
        {
            console.log("You Win!");
        }
        if(lives == 0)
        {
            alert("Game Over!");
        }
    }
}


function draw() {
    drawImage(backStars, 0, 0, 800, 550);
    drawImage(backWaves, 0, 550, 800, 50);
    drawImage(zombie, BeeX, BeeY, 60, 60);
    drawImage(heroStand, HeroX, HeroY, 60, 60);
    if(diamondCount > 0)
    {
        drawImage(crystal, diamondx, diamondy, 45, 45);
    }
    for(i = 0; i < n;i++)
    {
        if(t[i] > 0)
        {
            drawImage(bomb, bx[i], by[i], 30, 30);
        }
        if(t[i] == 0)
        {
            drawImage(explosion2, bx[i], by[i], 45, 45);
        }
        if(t[i] < 0 && t[i] >= -10)
        {
            drawImage(explosion2, bx[i], by[i], 60, 60);
        }
    }

        if(lives == 3)
        {
            drawImage(heartSmall, 650, 550, 50, 50);
        }
        if(lives >= 2)
        {
            drawImage(heartSmall, 700, 550, 50, 50);
        }
        if(lives >= 1)
        {
            drawImage(heartSmall, 750, 550, 50, 50);
        }
};

function keyup(key)
{
    if(!gameover)
    {
        if(key == 32)
        {
            bx[n] = HeroX;
            by[n] = HeroY;
            n++;
            t[n] = 300;
       }
    }
}
