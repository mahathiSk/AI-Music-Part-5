ScoreleftWrist ="";
ScoreRightWrist ="";
leftWristX =""; 
leftWristY ="";
RightWristX ="";
RightWristY ="";
song1status ="";
songstaus ="";


function setup() {
    canvas =createCanvas(550,500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

   poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses); 
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
if(results.length >0) { 
    console.log(results); 
  leftWristX =results[0].pose.leftWrist.x; 
  leftWristY =results[0].pose.leftWrist.y; 
  console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY ); 
  ScoreleftWrist =results[0].pose.keypoints[9].score;


  RightWristX =results[0].pose.rightWrist.x; 
  RightWristY =results[0].pose.rightWrist.y;
  console.log("RightWristX =" + RightWristX + "RightWristY =" + RightWristY );
  ScoreRightWrist =results[0].pose.keypoints[10].score;
}

}

function draw() {
    image(video, 0, 0, 550, 500)

    fill("red");
    stroke("red");
    song1status =music.isPlaying();
    songstatus = music1.isPlaying()

    if(ScoreleftWrist>0.2){
      music1.stop()

      if(song1status == false ) {
        music.play()
        
document.getElementById("song").innerHTML ="Mushroom Chocolate is Playing"
      }
  }

  if(ScoreRightWrist>0.2){
    music.stop()
  
    if(songstatus == false ) {
      music1.play()
  
      document.getElementById("song").innerHTML ="Senorita is Playing"
  
    }
  }
}

function preload() {
  music =loadSound("Music.mp3");
  music1 =loadSound("Music1.mp3")
}
 