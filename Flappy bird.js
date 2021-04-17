// Creating variables
var myX = 0, myY = 0,updates=0;
let gameover = false;
let p = 1, add = 1, b = 0, i;
let birdY = 270;
let x1 = 900, x2 = 1100, x3 = 1300, x4 = 1500, x5 = 1700;
let obshto = 0;


function update() {
if(gameover == true)
{
    return;
}
if(obshto > 0)
{
    obshto -=1;
    birdY -=2;
}

        x1 -= 2;
        x2 -= 2;
        x3 -= 2;
        x4 -= 2;
        x5 -= 2;
        if(x1 <= -100){x1 = 900;}
        if(x2 <= -100){x2 = 900;}
        if(x3 <= -100){x3 = 900;}
        if(x4 <= -100){x4 = 900;}
        if(x5 <= -100){x5 = 900;}
        if(birdY <= 0){birdY = 0;}
        if(birdY >= 540)
        {
            birdY = 540;
        }else{
            birdY += add;
            if(obshto <= 0)
            { 
                add+=0.05;
            }
        }
        if(areColliding(370, birdY, 60, 60, x1, 0, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60, x1, 400, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60, x1, 500, 100, 100)){gameover = true;}

        if(areColliding(370, birdY, 60, 60,0,100,100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,100,100,100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,500,100,100)){gameover = true;}

        if(areColliding(370, birdY, 60, 60,0,100,100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,100,100,100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,400,100,100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,500,100,100)){gameover = true;}

        if(areColliding(370, birdY, 60, 60,x4, 0, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x4, 300, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x4, 400, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x4, 500, 100, 100)){gameover = true;}

        if(areColliding(370, birdY, 60, 60,x5, 0, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x5, 100, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x5, 200, 100, 100)){gameover = true;}
        if(areColliding(370, birdY, 60, 60,x5, 500, 100, 100)){gameover = true;}

}



function draw() { 
    //background
    drawImage(backGrass, 0, 0, 900,600);
    
    //Ptichkata
    drawImage(bird, 370, birdY, 60, 60);

    //Layer 1
    drawImage(box, x1, 0, 100, 100);
    drawImage(box, x1, 400, 100, 100);
    drawImage(box, x1, 500, 100, 100);

    //Layer 2
    drawImage(box, x2,0,100,100);
    drawImage(box, x2,100,100,100);
    drawImage(box, x2,500,100,100);

    //Layer 3
    drawImage(box, x3, 0, 100, 100);
    drawImage(box, x3,100,100,100);
    drawImage(box, x3, 400, 100, 100);
    drawImage(box, x3, 500, 100, 100);

    //Layer 4

    drawImage(box, x4, 0, 100, 100);
    drawImage(box, x4, 300, 100, 100);
    drawImage(box, x4, 400, 100, 100);
    drawImage(box, x4, 500, 100, 100);

    //Layer 5
    drawImage(box, x5,0,100,100);
    drawImage(box, x5,100,100,100);
    drawImage(box, x5,200,100,100);
    drawImage(box, x5, 500, 100, 100);
};



function keyup(key) {
    if(gameover == true)
    {
        return;
    }
    if(key == 32)
    {
        obshto = 100;
        add = 1;
    }
    console.log("Pressed", key);
};



function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
};
