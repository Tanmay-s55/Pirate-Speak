var translateBtn = document.querySelector("#translate-btn");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

var translatedText = "";

function getTranslate() {

    var text = inputText.value;
    var url = "https://api.funtranslations.com/translate/pirate.json?text="+text;

    fetch(url)
        .then(response => response.json())
        .then(data => setTranslate(data))
        .catch(error => {
            alert("Something went wrong! Try again later");
        })
    
}

function setTranslate(obj){
    translatedText = obj.contents.translated;
    outputText.innerHTML = translatedText;
}

translateBtn.addEventListener("click",getTranslate);