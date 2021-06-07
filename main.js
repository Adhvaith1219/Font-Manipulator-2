nose_x=0;
nose_y=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(100,150)

    canvas=createCanvas(550,550);
    canvas.position(800,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}

function gotPoses(){
    if(rusults.length>0){
        console.log(results);
    }
}