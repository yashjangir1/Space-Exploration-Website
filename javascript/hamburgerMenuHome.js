let crossIconEl = document.getElementById("crossIcon")
let hamburgerIconEl = document.getElementById("hamburgerIcon")

let homeButtonHamburgerEl = document.getElementById("homeButtonHamburger");
let destinationButtonHamburgerEl = document.getElementById("destinationButtonHamburger");
let crewButtonHamburgerEl = document.getElementById("crewButtonHamburger");
let technologyButtonHamburgerEl = document.getElementById("technologyButtonHamburger");

let hamburgerMenuEl = document.getElementById("hamburgerMenu");

hamburgerMenuEl.classList.remove("hamburger-menu-container")
hamburgerMenuEl.classList.add("display-none")

hamburgerIconEl.addEventListener('click', function(){
    hamburgerMenuEl.classList.add("hamburger-menu-container")
    hamburgerMenuEl.classList.remove("display-none")
})

crossIconEl.addEventListener('click', function(){
    hamburgerMenuEl.classList.remove("hamburger-menu-container")
    hamburgerMenuEl.classList.add("display-none")
})