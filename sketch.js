function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(35);
    rect(0, 0, width, height);
}

function draw() {

    //3d 2d drawer//
    let size = 50;	
    stroke(1);

    fill("#717bab");
    circle(mouseX + 50, mouseY + 50, size , size);

    fill("#accc70");
    circle(mouseX, mouseY, size , size);

    fill("#ffbe45");
    circle(mouseX + 100, mouseY +100, size, size);

 
}
