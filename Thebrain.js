function preload() {

}
function setup(){
    canvas = createCanvas(800,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iNZXwoBiw/model.json', Loader);
}
function draw() {
image(video,0,0,800,500);
classifier.classify(video, Result);
}
function Loader() {
    console.log("Loaded");
}

function Result(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("obj_268").innerHTML = results[0].label;
        document.getElementById("aceuracy").innerHTML = results[0].confidence.toFixed(1);
    }
}