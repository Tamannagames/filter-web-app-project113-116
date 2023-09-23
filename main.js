let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let canvas;

function setup() {
  canvas = createCanvas(640, 480);
  canvas.class('canvas');
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet model loaded');
}

function gotPoses(poses) {
  if (poses.length > 0) {
    let nose = poses[0].pose.keypoints[0];
    noseX = nose.position.x;
    noseY = nose.position.y;
  }
}

function draw() {
  image(video, 0, 0, width, height);
  
  fill(255, 0, 0);
  ellipse(noseX, noseY, 20, 20);
}

function saveFilteredImage() {
  
}
