
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const body = document.body;
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
}

window.addEventListener('load', changeBackgroundColor)

function goBack() {
    const firstPageURL = "damn.html";
    window.location.href = firstPageURL;
}
document.getElementById("customBackButton").addEventListener("click", goBack);
