console.log("Start")

//Needed variables___________________
const windowWidth = window.innerWidth

var bigger = false
var messageRevealed = false

function revealMessage() {
    if (document.getElementById("hiddenMessage").style.display != 'block') {
        document.getElementById("hiddenMessage").style.display = 'block';
        messageRevealed = true;
    }
    else {
        document.getElementById("hiddenMessage").style.display = 'none';
        messageRevealed = false;

    }

    console.log("Done");
}

function goToPage(htmlFile) {
    window.location.href = htmlFile;

}

function biggerMessage() {
    const elements = document.getElementsByClassName("smallText");
    if (messageRevealed == true && bigger == false) {

        for (const element of elements) {
            element.className = "bigText"
        }
        bigger = true

    }


}



const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {
        this.style.color = "green";
    });

    button.addEventListener("mouseleave", function () {
        this.style.color = "rgb(42, 147, 165)";
    });
});

