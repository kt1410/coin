let coins=[];
function preload()
{
  let coin1=loadImage("head.PNG");
  let coin2=loadImage("tail.PNG");
  coins=random([coin1,coin2]);
}
function setup() {  
  createCanvas(windowWidth,windowHeight)
}
function draw(){
image(coins,width/2,height/2);
}