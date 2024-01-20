function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I2hi6vqR3/model.json' , modelReady);

}

function modelReady()
{
   classifier.classify(gotResults);
}

function gotResults(error, results)
{
   if(error){
    console.log(error);
   } else 
   console.log(results);

   document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
   document.getElementById("result_confidence").innerHTML = 'Detected Voice of  - '+ (results[0].confidence*100).toFixed(2) + "%"; 

   img = document.getElementById('img2');

   if(results[0].label =="Barking"){
    img2.src = 'dog1.jpeg';
} else if (results[0].label == "Meowing") {
    img2.src = 'cat1.jpeg';
} else if (results[0].label == "Roaring"){
    img2.src = 'lion1.jpeg';
} else if (results[0].label == "Mooing"){
    img2.src = 'cow1.jpeg';
} else{
    img2.src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
}
}
