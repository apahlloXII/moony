let x = 1500;
let xm = 765
let dim = 80.0;

function setup() {
  createCanvas(1000,1000);
  noStroke();
  frameRate(30);
}

function draw() {
	background(0,0,0);
    // fill(255,255,200);
    // ellipse(100, 100, 2);        //-----Star Idea

	fill(255,255,200, 25);
	ellipse(xm,500,510);         //-----Moon Glow 1

	fill(255,255,200, 37);
	ellipse(xm,500,505);         //-----Moon Glow 2

	fill(255,255,200, 50);
	ellipse(xm,500,500);         //-----Moon Glow 3

	fill(255,255,200, 63);
	ellipse(xm,500,495);         //-----Moon Glow 4

	fill(255,255,200, 75);
	ellipse(xm,500,490);         //-----Moon Glow 5

	fill(255,255,200, 88);
	ellipse(xm,500,485);         //-----Moon Glow 6

	fill(255,255,200, 100);
	ellipse(xm,500,480);         //-----Moon Glow 7

	fill(255,255,200);
	ellipse(xm,500,475);         //-----Moon

	fill(255,255,210);
	ellipse(xm,500,465);         //-----Moon Shade 1

	fill(255,255,220);
	ellipse(xm,500,455);         //-----Moon Shade 2

	fill(255,255,230);
	ellipse(xm,500,445);         //-----Moon Shade 3

	fill(255,255,235);
	ellipse(xm,500,435);         //-----Moon Shade 4



	fill(0,0,0);                  //-----Earth Shadow
	ellipse(x, 500, 435, 455);

	fill(0,0,0,242);              //-----Shade 1
	ellipse(x, 500, 440, 460);

	fill(0,0,0,229);              //-----Shade 2
	ellipse(x, 500, 445, 465);

	fill(0,0,0, 216);             //-----Shade 3
	ellipse(x, 500, 450, 470);

    fill(0,0,0, 203);             //-----Shade 4
	ellipse(x, 500, 455, 475);

	fill(0,0,0, 190);             //-----Shade 5
	ellipse(x, 500, 460, 480);

	fill(0,0,0, 177);             //-----Shade 6
	ellipse(x, 500, 465, 485);

	fill(0,0,0,164);              //-----Shade 7
	ellipse(x, 500, 470, 490);

	fill(0,0,0,151);              //-----Shade 8
	ellipse(x, 500, 475, 495);

	fill(0,0,0, 138);             //-----Shade 9
	ellipse(x, 500, 480, 500);

    fill(0,0,0, 125);             //-----Shade 10
	ellipse(x, 500, 485, 505);

	fill(0,0,0, 112);             //-----Shade 11
	ellipse(x, 500, 490, 510);

	fill(0,0,0, 99);              //-----Shade 12
	ellipse(x, 500, 495, 515);

	fill(0,0,0, 86);              //-----Shade 13
	ellipse(x, 500, 500, 520);

	fill(0,0,0,73);               //-----Shade 14
	ellipse(x, 500, 505, 525);

	fill(0,0,0,60);               //-----Shade 15
	ellipse(x, 500, 510, 530);

	fill(0,0,0, 47);              //-----Shade 16
	ellipse(x, 500, 515, 535);

    fill(0,0,0, 34);              //-----Shade 17
	ellipse(x, 500, 520, 540);

	fill(0,0,0, 21);              //-----Shade 18
	ellipse(x, 500, 525, 545);

	fill(0,0,0, 8);               //-----Shade 19
	ellipse(x, 500, 530, 550);

	x = x - 10.5;
	if (x < -550) {
		x = 1550;
	}
	xm = xm - 2;
	if (xm < -255) {
		xm = 1510;
	}

	translate(x, width /2  - dim /2)
	translate(xm, width / 5 - dim / 5)

}