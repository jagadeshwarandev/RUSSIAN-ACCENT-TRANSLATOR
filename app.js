var translateButton = document.querySelector("#translate-button");
var translateInput = document.querySelector("#translate-input");
var translateOutput = document.querySelector("#translate-output");


translateButton.addEventListener("click", buttonClickHandler)


var url = "https://api.funtranslations.com/translate/russian-accent.json"

function buttonClickHandler(event) {
    var input = translateInput.value;
    var finalURL = constructURL(input);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("Limited To No Of Request , Try Again After Sometime !."))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}