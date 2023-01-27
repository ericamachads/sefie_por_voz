var SpeechRecognition = window.webkitSpeechRecognition;// API (ser humano)
  
var recognition = new SpeechRecognition();// cria um novo API (um novo ser humano) de nome recognition

var Textbox = document.getElementById("textbox"); //pega o texto e guarda na variável

function start()//função
{
    Textbox.innerHTML = ""; //texto vazio
    recognition.start();// começar a conversão de fala para texto 
} 
 
recognition.onresult = function(event) {//função que mostra o texto

 console.log(event); //mostra no console

var Content = event.results[0][0].transcript;
//aula 98
//console.log(event);
//document.getElementById("textbox").innerHTML = Content;
//}
//aula 99

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();//aula 99
      }
}

//aula 99
function speak(){
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";//aula 100
    //speakData =  document.getElementById("textbox").value; //aula 99

    var utterThis = new SpeechSynthesisUtterance(speakData);//aula 99

    synth.speak(utterThis);//aula 99

    Webcam.attach(camera);// aula 100

    setTimeout(function()//aula 100
    { 
        takeSelfie(); //aula 100
        save(); //aula 100
    }, 5000);// aula 100
}

//aula 99
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

//aula100
function takeSelfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}

//aula 100
function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src ;
  link.href = image;
  link.click();
}
