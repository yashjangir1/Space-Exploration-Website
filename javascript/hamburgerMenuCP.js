let crossIconCPEl = document.getElementById("crossIconCP")
let hamburgerIconCPEl = document.getElementById("hamburgerIconCP")

let homeButtonHamburgerCPEl = document.getElementById("homeButtonHamburgerCP");
let destinationButtonHamburgerCPEl = document.getElementById("destinationButtonHamburgerCP");
let crewButtonHamburgerCPEl = document.getElementById("crewButtonHamburgerCP");
let technologyButtonHamburgerCPEl = document.getElementById("technologyButtonHamburgerCP");

let hamburgerMenuCPEl = document.getElementById("hamburgerMenuCP");

hamburgerMenuCPEl.classList.remove("hamburger-menu-container")
hamburgerMenuCPEl.classList.add("display-none")

hamburgerIconCPEl.addEventListener('click', function(){
    hamburgerMenuCPEl.classList.add("hamburger-menu-container")
    hamburgerMenuCPEl.classList.remove("display-none")
})

crossIconCPEl.addEventListener('click', function(){
    hamburgerMenuCPEl.classList.remove("hamburger-menu-container")
    hamburgerMenuCPEl.classList.add("display-none")
})