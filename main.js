canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

array=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631150305212E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG"];
random_number=Math.floor(Math.random()*4);
console.log(random_number)
rover_width=100;
rover_height=90;
background_image=array[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
  up();
  console.log("up");  
}
if(keyPressed=='40')
{    
    down();
    console.log("down");  
  }
  if(keyPressed=='39')
  {
    right();
    console.log("right");  
  }
  if(keyPressed=='37')
  {
    left();
    console.log("left");  
  }
}
function up()
{
if(rover_y>=0)
{
rover_y=rover_y-10;
console.log("When up arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadrover();    
}
}
function down()
{
if(rover_y<=500)
{
rover_y=rover_y+10;
console.log("When down arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadrover();    
}
}
function left()
{
if(rover_x>=0)
{
rover_x=rover_x-10;
console.log("When left arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadrover();
}    
}
function right()
{
if(rover_x<=700)
{
rover_x=rover_x+10;
console.log("When right arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadrover();
}
}