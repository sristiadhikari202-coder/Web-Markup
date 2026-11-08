// Student statement: "Professor Dan it is allowed and that we talked to him about it in the class".
// This records the student's statement; teacher permission has not been independently verified.
// This is the ONLY JavaScript in the project. It opens and closes the mobile menu.
var menuButton = document.getElementById("menu-button");
var navigation = document.getElementById("site-navigation");

menuButton.onclick = function () {
    if (navigation.classList.contains("open")) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        navigation.classList.add("open");
        menuButton.setAttribute("aria-expanded", "true");
    }
};
