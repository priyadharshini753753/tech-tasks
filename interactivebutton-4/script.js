function changeColor() {

    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender","lightgrey","lightred"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}