
noseX = 0;
noseY = 0;
distance = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
video = createCapture(VIDEO);
video.size(550 , 500);

video = createCapture(VIDEO);
canvas.position(560 , 150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}


function  draw() {
background('#969A97');

document.getElementById("square_side").innerHTML = "WIDTH AND HEIGHT OF SQUARE WILL BE" + difference + "  px";
fill('#F90093');
stroke('#F90093');
square(noseX , noseY , difference);
}


function modelLoaded() {
console.log('PoseNet Is Initialized !!');
}


function gotPoses(results)
{
if(results.length > 0)
{
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX =" + noseX + "noseY =" + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX0);

console.log("leftWristX" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
}
}