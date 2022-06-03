let crossIconDPEl = document.getElementById("crossIconDP")
let hamburgerIconDPEl = document.getElementById("hamburgerIconDP")

let homeButtonHamburgerDPEl = document.getElementById("homeButtonHamburgerDP");
let destinationButtonHamburgerDPEl = document.getElementById("destinationButtonHamburgerDP");
let crewButtonHamburgeDPEl = document.getElementById("crewButtonHamburgerDP");
let technologyButtonHamburgerDPEl = document.getElementById("technologyButtonHamburgerDP");

let hamburgerMenuDPEl = document.getElementById("hamburgerMenuDP");

hamburgerMenuDPEl.classList.remove("hamburger-menu-container")
hamburgerMenuDPEl.classList.add("display-none")

hamburgerIconDPEl.addEventListener('click', function(){
    hamburgerMenuDPEl.classList.add("hamburger-menu-container")
    hamburgerMenuDPEl.classList.remove("display-none")
})

crossIconDPEl.addEventListener('click', function(){
    hamburgerMenuDPEl.classList.remove("hamburger-menu-container")
    hamburgerMenuDPEl.classList.add("display-none")
})