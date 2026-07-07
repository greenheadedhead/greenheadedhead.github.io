console.log("Start")

//Needed variables___________________
const windowWidth = window.innerWidth

function revealMessage() {
    if (document.getElementById("hiddenMessage").style.display != 'block') {
        document.getElementById("hiddenMessage").style.display = 'block'
    }
    else { document.getElementById("hiddenMessage").style.display = 'none' }
    console.log("Done");
}

function goToPage(htmlFile) {
    window.location.href = htmlFile;

}

function biggerMessage() {
    const elements = document.getElementsByClassName("smallText");
    for (const element of elements) {
        element.className = "bigText"
    }

}

function biggerWhenHover(imgID) {
    document.getElementById(imdID)

}


const gallery = [
    "images/Absolute slimey gray.png",
    "images/Bluehead.png",
    "images/machine backgrounded-export.png",
    "images/slimey holding sword.png",
    "images/Green stonks.png",
    "images/greensoul.png",
    "images/day 3 flowing isaac blood.gif",
    "images/slimey sitting-export.png",
    "images/pot o greed.gif",
    "images/day 18 transforming-export.gif"

]

function listSum(list) {
    sum = 0
    for (const value of list) {
        sum += value


    }
    return sum

}

function rowUpdate(column, imgWidth, divWidth) {
    if (column * imgWidth > divWidth) {  //Checks if including this as the xTh collumn would be too big for the row, and resets it as 0 (first collumn of the next row)
        column = 0
    }
    return column
}


const galleryDiv = document.getElementById("gallery");
const columnWidth = (galleryDiv.offsetWidth / 4);
function generateImages() {
    var imgNum = 0  //tracks the current image's number to give IDs
    var yList = [0, 0, 0, 0]
    //list of heights y :
    const windowWidth = window.innerWidth;
    var currentColumn = 0 // There are 4 collumns, we go collumn by collumn then to the next row

    for (const imagePath of gallery) {
        const img = document.createElement("img");
        img.src = imagePath;
        img.className = "museumImage";
        img.onload = function () {



            if (currentColumn === 4) {
                currentColumn = 0
            }
            img.style.position = "absolute";
            img.style.left = String(currentColumn * (columnWidth + 5)) + "px"; //Decide the absicce before updating with (first time width should be 0 instead of counting its own width)
            img.style.width = String(columnWidth) + "px"

            img.style.height = "auto";

            img.style.top = String(yList[currentColumn]) + "px";
            imgHeight = img.offsetHeight - 5
            yList[currentColumn] += imgHeight;
            currentColumn += 1

            img.addEventListener("mouseenter", function () {
                img.style.transform = "scale(1.02)";
                img.style.zIndex = "1000";
                img.style.borderColor = "white";


            });

            img.addEventListener("mouseleave", function () {
                img.style.transform = "scale(1)";
                img.style.zIndex = "0";
                img.style.borderColor = "yellowgreen";

            });










        };

        //Giving the hover function
        //Giving the hover function
        img.id = "img" + String(imgNum)



        galleryDiv.appendChild(img);



        console.log(currentColumn)





    }
}
generateImages()
