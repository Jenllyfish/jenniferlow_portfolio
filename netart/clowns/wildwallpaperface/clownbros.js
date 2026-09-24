let honk;
let ox, oy;
// function preload() {
//   honk = loadImage("images/honk.png")
// }
function setup() {
  createCanvas(1260,630)
  background(255, 240, 175)
  honk = loadImage("./images/honk.png")
  // put setup code here

  ox = 250
  oy = 250
}

function draw() {

    stroke(243, 167, 18)
    strokeWeight(5)
    // console.log("this x coordinate is " + mouseX);
    // console.log('this y coordinate is ' + mouseY)

   if(mouseIsPressed){
    console.log("this x coordinate is " + mouseX +' and this y coordinate is ' + mouseY)
   }

  {
   noStroke()
  strokeWeight(0)
   fill(255, 240, 175)
   rect(200,200,width/2,width/2)
  }


     stroke(243, 167, 18)
    strokeWeight(5) 
    frameRate(10)
    for (let i = 0; i < 1260; i += 20) {
    for (let j = 0; j < 630; j += 20) {
      rand = random(255);
      fill(rand);
      rect( i+5, j+5, 10, 10 );
      // console.log("this has a greyscale value of" + rand);

    }
  }


  if(  mouseY > 260 && mouseY < 290 && mouseX > 290 && mouseX < 316 ) {
        image(honk, 506, 230, 250, 250)
        //rect(width/2, height/2 ,100,100)
        fill(143, 45, 86)
        triangle(80 + ox, 45 + oy, 19 + ox, 45 + oy, 45 + ox, 45 + oy)
  }
  if(  mouseY > 240 && mouseY < 290 && mouseX > 940 && mouseX < 976 ) {
        image(honk, 506, 230, 250, 250)
        //rect(width/2, height/2 ,100,100)
        fill(143, 45, 86)
        triangle(744 + ox,45 + oy, 710 + ox, 60 + oy, 678 + ox, 45 + oy )
  console.log("honk")
   }

    // TimTam Start

    stroke(0)
    strokeWeight(2)

    //footright
    fill(119,186,153)
    ellipse(ox + 835, oy + 280,200,100)

    //footleft
    fill(119,186,153)
    ellipse(ox + 590, oy + 280,200,100)
   
    fill(229, 82, 112)
    ellipse(ox + 712, oy + 150,300,250)

    fill(216, 17, 89)
    ellipse(ox + 813, oy + -25,200,100)

    fill(216, 17, 89)
    ellipse(ox + 595, oy + -25,200,100)

    fill(119,186,153)
    triangle(710 + ox,-176 + oy, 780 + ox, -62 + oy, 580 + ox, 30 + oy )

    //hairleft
    fill(216, 17, 89)
    ellipse(ox + 590, oy + -25,150,120)

    //hairright
    fill(216, 17, 89)
    ellipse(ox + 820, oy + -25,150,120)

    fill(255,253,130)
    ellipse(ox + 710, oy + 0,150,150)

    fill(216, 17, 89)
    ellipse(ox + 737, -16+ oy, -18,25,25)

    fill(216, 17, 89)
    ellipse(ox + 686, -16+ oy, -18,25,25)

    fill(43,58,103)
    rect(694 + ox, -8 + oy,35,44,10)

    fill(143, 45, 86)
    triangle(744 + ox,45 + oy, 700 + ox, 45 + oy, 678 + ox, 45 + oy )

     if(  mouseY > 240 && mouseY < 290 && mouseX > 940 && mouseX < 976 ) {
        fill(143, 45, 86)
        triangle(744 + ox,45 + oy, 710 + ox, 60 + oy, 678 + ox, 45 + oy )
  console.log("honk")
   }

      stroke(229, 82, 112);
      strokeWeight(6);
      line(1005, 169, 960, 88)

      stroke(229, 82, 112);
      strokeWeight(6);
      line(982, 169, 960, 88)

      stroke(229, 82, 112);
      strokeWeight(6);
      line(935, 169, 960, 88)

      stroke(229, 82, 112);
      strokeWeight(6);
      line(913, 169, 960, 88)

      stroke(229, 82, 112);
      strokeWeight(6);
      line(958, 169, 960, 88)

    // TimTam End

    // Jimbob Start

    stroke(0)
    strokeWeight(2)  

    fill(229, 82, 112)
    ellipse(ox + 165, oy + 280,200,100)


    fill(229, 82, 112)
    ellipse(ox + -75, oy + 280,200,100)
   
    fill(119,186,153)
    ellipse(ox + 49, oy + 150,300,250)


    fill(43,58,103)
    ellipse(ox + -55, oy + -25,200,100)

    fill(43,58,103)
    ellipse(ox + 160, oy + -25,200,100)

    fill(229, 82, 112)
    triangle(50 + ox,-175 + oy, -40 + ox, -40 + oy, 180 + ox, 18 + oy )


    fill(43,58,103)
    ellipse(ox + -55, oy + -25,150,120)


    fill(43,58,103)
    ellipse(ox + 160, oy + -25,150,120)


    fill(255,253,130)
    ellipse(ox + 50, oy + 0,150,150)


    fill(43,58,103)
    ellipse(ox + 75, -15+ oy, -18,25,25)

    fill(43,58,103)
    ellipse(ox + 25, -16+ oy, -18,25,25)


    fill(216, 17, 89)
    rect(32 + ox, -8 + oy,35,44,10)

    fill(143, 45, 86)
    triangle(80 + ox,45 + oy, 19 + ox, 45 + oy, 45 + ox, 45 + oy )

     if(  mouseY > 260 && mouseY < 290 && mouseX > 290 && mouseX < 316 ) {
        fill(143, 45, 86)
        triangle(80 + ox, 45 + oy, 19 + ox, 45 + oy, 49 + ox, 60 + oy)
  console.log("honk")
   }

      stroke(119,186,153);
      strokeWeight(6);
      line(300, 169, 300, 88)

      stroke(119,186,153);
      strokeWeight(6);
      line(325, 169, 300, 88)

      stroke(119,186,153);
      strokeWeight(6);
      line(350, 169, 300, 88)

      stroke(119,186,153);
      strokeWeight(6);
      line(275, 169, 300, 88)

      stroke(119,186,153);
      strokeWeight(6);
      line(250, 169, 300, 88)

    // Jimbob End


}
