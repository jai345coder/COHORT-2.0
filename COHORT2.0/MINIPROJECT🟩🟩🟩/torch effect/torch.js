let shadow = document.querySelector(":root");

shadow.addEventListener("mousemove", (e) => {
    let x = e.clientX;//clientX is the x position of the mouse
    let y = e.clientY;
    shadow.style.setProperty("--x", x + "px");
    shadow.style.setProperty("--y", y + "px");
});