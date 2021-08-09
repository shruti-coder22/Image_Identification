Webcam.set({
    height:400,
    width:500,
    image_format:'jpeg',
    jpeg_quality:90
});

Camera = document.getElementById("camera");
Webcam.attach(Camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    })
}
console.log("Current version of ml5 library = ", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zxf5SfnTb/model.json", modelLoaded);
function modelLoaded() {
    console.log("Image_Classifier loaded and connected!");
}