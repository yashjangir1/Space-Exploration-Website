let crossIconTPEl = document.getElementById("crossIconTP")
let hamburgerIconTPEl = document.getElementById("hamburgerIconTP")

let homeButtonHamburgerTPEl = document.getElementById("homeButtonHamburgerTP");
let destinationButtonHamburgerTPEl = document.getElementById("destinationButtonHamburgerTP");
let crewButtonHamburgeTPEl = document.getElementById("crewButtonHamburgerTP");
let technologyButtonHamburgerTPEl = document.getElementById("technologyButtonHamburgerTP");

let hamburgerMenuTPEl = document.getElementById("hamburgerMenuTP");

hamburgerMenuTPEl.classList.remove("hamburger-menu-container")
hamburgerMenuTPEl.classList.add("display-none")

hamburgerIconTPEl.addEventListener('click', function(){
    hamburgerMenuTPEl.classList.add("hamburger-menu-container")
    hamburgerMenuTPEl.classList.remove("display-none")
})

crossIconTPEl.addEventListener('click', function(){
    hamburgerMenuTPEl.classList.remove("hamburger-menu-container")
    hamburgerMenuTPEl.classList.add("display-none")
})