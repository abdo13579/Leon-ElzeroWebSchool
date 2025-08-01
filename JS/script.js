let menu = document.getElementById("btn");
let linkslist = document.getElementById("linkslist");

menu.addEventListener("click", function () {
    if (getComputedStyle(linkslist).display === "none") {
        linkslist.style.display = "block";
    } else {
        linkslist.style.display = "none";
    }
})