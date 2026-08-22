const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});


const links = document.querySelectorAll("a");


links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        cursor.classList.add("is-clicking");
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-clicking");
    });

});