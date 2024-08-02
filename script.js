const container = document.querySelector(".container");
const changeSizeButton = document.querySelector("#changeSize");

changeGridSize()


function colorChange(content) {
    content.style.backgroundColor = "black";
}

changeSizeButton.addEventListener("click", changeGridSize);

function changeGridSize() {
    let squareNum = parseInt(prompt("Enter number of squares between 1-100"));
    if (!Number.isInteger(squareNum) || squareNum < 0 || squareNum > 100) {
        alert("Invalid Entry");
        return;
    }
    container.innerHTML = "";
    for (let i = 0; i < squareNum; i++){
        for (let j = 0; j < squareNum; j++) {
            let content = document.createElement("div");
            content.addEventListener('mouseover', function() {
            colorChange(content);
            });
            container.append(content);
        }
    }
}