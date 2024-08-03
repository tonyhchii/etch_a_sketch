const container = document.querySelector(".container");
const changeSizeButton = document.querySelector("#changeSize")
let opacity = 0;

changeGridSize()


function styleChange(content) {
    content.style.backgroundColor = "black";
    content.style.opacity = opacity + "%";
    if (opacity < 100) {
        opacity += 10;
    }
}

function randomColorGenerator() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "(" + r + "," + g + "," + b + ")"
}

changeSizeButton.addEventListener("click", changeGridSize);

function changeGridSize() {
    let squareNum = parseInt(prompt("Enter number of squares between 1-100"));
    if (!Number.isInteger(squareNum) || squareNum < 0 || squareNum > 100) {
        alert("Invalid Entry");
        return;
    }
    let length = 960/squareNum
    container.innerHTML = " "
    for (let i = 0; i < squareNum; i++){
        for (let j = 0; j < squareNum; j++) {
            let content = document.createElement("div");
            content.style.width = length + 'px'
            content.addEventListener('mouseover', function() {
            styleChange(content);
            });
            container.append(content);
        }
    }
}