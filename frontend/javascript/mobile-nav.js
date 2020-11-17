// toggle nav buttons for
const navList = document.getElementById("nav-list")
const navButton = document.getElementById("nav-button")
const navXIcon = document.getElementById("x-icon")
const navHamIcon = document.getElementById("ham-icon")

navButton.addEventListener("click", toggleNavButton)

function toggleNavButton() {
    navList.classList.toggle("hidden")
    navHamIcon.classList.toggle("hidden")
    navXIcon.classList.toggle("hidden")
}

const menuLinks = document.querySelectorAll(".menu-link")

menuLinks.forEach(
    function (menuLink){
        menuLink.addEventListener("click", toggleNavButton)
    }
)