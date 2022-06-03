// #########   home page javascript  ###########

let exploreButtonContainerEl = document.getElementById("exploreButtonContainer")
let exploreButtonEl = document.getElementById("exploreButton")

exploreButtonEl.addEventListener('mouseover', function(){
    exploreButtonContainerEl.style.backgroundColor = 'rgb(255,255,255,0.1)'
    exploreButtonEl.style.cursor = 'pointer'
})

exploreButtonEl.addEventListener('mouseout', function(){
    exploreButtonContainerEl.style.backgroundColor = 'transparent'
})

let destinationButtonEl = document.getElementById("destinationButton")
let crewButtonEl = document.getElementById("crewButton")
let technologyButtonEl = document.getElementById("technologyButton")

destinationButtonEl.onclick = function(){
    window.location.href = '../html/destination.html'
}

crewButtonEl.onclick = function(){
    window.location.href = '../html/crew.html'
}

technologyButtonEl.onclick = function(){
    window.location.href = '../html/technology.html'
}

exploreButtonEl.onclick = function(){
    window.location.href = '../html/destination.html'
}