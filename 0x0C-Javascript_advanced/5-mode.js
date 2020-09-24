function changeMode (size, weight, transform, background, color) {

    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}

function main () {
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green")
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white")
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black")
    document.getElementsByTagName("button")[0].addEventListener("click", () => spooky())
    document.getElementsByTagName("button")[1].addEventListener("click", () => darkMode())
    document.getElementsByTagName("button")[2].addEventListener("click", () => screamMode())
}
main();