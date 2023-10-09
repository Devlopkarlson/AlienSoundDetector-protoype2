function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F0EYHCJLm/', modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}
