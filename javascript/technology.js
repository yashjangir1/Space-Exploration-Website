import data from './data.js'

let homeButtonTPEl = document.getElementById("homeButtonTP")
let destinationButtonTPEl = document.getElementById("destinationButtonTP")
let crewButtonTPEl = document.getElementById("crewButtonTP")

homeButtonTPEl.onclick = function(){
    window.location.href = '../html/index.html'
}

destinationButtonTPEl.onclick = function(){
    window.location.href = '../html/destination.html'
}

crewButtonTPEl.onclick = function(){
    window.location.href = '../html/crew.html'
}

let technologyNameEl = document.getElementById("technologyName")
let technologyDetailEl = document.getElementById("technologyDetail")
let technologyImageEl = document.getElementById("technologyImage")

let technologyButton1El = document.getElementById("technologyButton1")
let technologyButton2El = document.getElementById("technologyButton2")
let technologyButton3El = document.getElementById("technologyButton3")

const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        technologyImageEl.src = data.technology[0].images.landscape
    }
    else{
        technologyImageEl.src = data.technology[0].images.portrait
    }

technologyButton1El.onclick = function(){
    if (mediaQuery.matches) {
        technologyImageEl.src = data.technology[0].images.landscape
    }
    else{
        technologyImageEl.src = data.technology[0].images.portrait
    }
    technologyNameEl.textContent = data.technology[0].name
    technologyDetailEl.textContent = data.technology[0].description

    technologyButton1El.classList.add("selected-technology-button")
    technologyButton2El.classList.remove("selected-technology-button")
    technologyButton3El.classList.remove("selected-technology-button")
}

technologyButton2El.onclick = function(){
    if (mediaQuery.matches) {
        technologyImageEl.src = data.technology[1].images.landscape
    }
    else{
        technologyImageEl.src = data.technology[1].images.portrait
    }

    technologyNameEl.textContent = data.technology[1].name
    technologyDetailEl.textContent = data.technology[1].description

    technologyButton1El.classList.remove("selected-technology-button")
    technologyButton2El.classList.add("selected-technology-button")
    technologyButton3El.classList.remove("selected-technology-button")
}

technologyButton3El.onclick = function(){
    if (mediaQuery.matches) {
        technologyImageEl.src = data.technology[2].images.landscape
    }
    else{
        technologyImageEl.src = data.technology[2].images.portrait
    }

    technologyNameEl.textContent = data.technology[2].name
    technologyDetailEl.textContent = data.technology[2].description

    technologyButton1El.classList.remove("selected-technology-button")
    technologyButton2El.classList.remove("selected-technology-button")
    technologyButton3El.classList.add("selected-technology-button")
}