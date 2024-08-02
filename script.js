const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    let content = document.createElement("div");
    content.addEventListener('mouseover', function() {
        colorChange(content);
    });
    container.append(content);
}

function colorChange(content) {
    content.style.backgroundColor = "red";
}

