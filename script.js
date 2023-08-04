let menuBtn = document.querySelector("#burger");
let menu = document.querySelector("#menu");
let span = document.querySelector("#span");
let nav = document.querySelector("nav");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menutoggle");
    menu.classList.toggle("menutoggle");
})


document.addEventListener("click", (e) => {
    if (e.target.id !== "menu" && e.target.id !== "burger" && e.target.id !== "span") {
        menuBtn.classList.remove("menutoggle");
        menu.classList.remove("menutoggle");
    }
})


window.onscroll = function () {
    nav.classList.toggle("colornav", window.scrollY > 0);
}