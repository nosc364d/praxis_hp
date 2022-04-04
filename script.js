function changeSvgColor() {
    let el = document.querySelectorAll(".line", ".circle");
    el.setAttribute("fill", "var(--secondary);")
}

function toggleMenu() {
    let el = document.querySelectorAll("#navbar");
    el.classList.toggle("visible");
    let icon = document.querySelector("#menuButton");
    icon.classList.toggle("visible");
}