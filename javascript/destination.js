import data from './data.js'

let homeButtonDPEl = document.getElementById("homeButtonDP")
let crewButtonDPEl = document.getElementById("crewButtonDP")
let technologyButtonDPEl = document.getElementById("technologyButtonDP")

homeButtonDPEl.onclick = function(){
    window.location.href = '../html/index.html'
}

crewButtonDPEl.onclick = function(){
    window.location.href = '../html/crew.html'
}

technologyButtonDPEl.onclick = function(){
    window.location.href = '../html/technology.html'
}

let moonButtonEl = document.getElementById("moonButton");
let marsButtonEl = document.getElementById("marsButton");
let europaButtonEl = document.getElementById("europaButton");
let titanButtonEl = document.getElementById("titanButton");

let planetImageEl = document.getElementById("planetImage");
let distanceEl = document.getElementById("distance");
let travelTimeEl = document.getElementById("travelTime");
let planetNameEl = document.getElementById("planetName");
let planetDetailEl = document.getElementById("planetDetail")

moonButtonEl.onclick = function(){
    moonButtonEl.classList.add('selected-planet-button')
    marsButtonEl.classList.remove('selected-planet-button')
    europaButtonEl.classList.remove('selected-planet-button')
    titanButtonEl.classList.remove('selected-planet-button')

    planetNameEl.textContent = data.destinations[0].name
    planetDetailEl.textContent = data.destinations[0].description
    planetImageEl.src = data.destinations[0].images.png
    distanceEl.textContent = data.destinations[0].distance
    travelTimeEl.textContent = data.destinations[0].travel
}

marsButtonEl.onclick = function(){
    moonButtonEl.classList.remove('selected-planet-button')
    marsButtonEl.classList.add('selected-planet-button')
    europaButtonEl.classList.remove('selected-planet-button')
    titanButtonEl.classList.remove('selected-planet-button')

    planetNameEl.textContent = data.destinations[1].name
    planetDetailEl.textContent = data.destinations[1].description
    planetImageEl.src = data.destinations[1].images.png
    distanceEl.textContent = data.destinations[1].distance
    travelTimeEl.textContent = data.destinations[1].travel
}

europaButtonEl.onclick = function(){
    moonButtonEl.classList.remove('selected-planet-button')
    marsButtonEl.classList.remove('selected-planet-button')
    europaButtonEl.classList.add('selected-planet-button')
    titanButtonEl.classList.remove('selected-planet-button')

    planetNameEl.textContent = data.destinations[2].name
    planetDetailEl.textContent = data.destinations[2].description
    planetImageEl.src = data.destinations[2].images.png
    distanceEl.textContent = data.destinations[2].distance
    travelTimeEl.textContent = data.destinations[2].travel
}

titanButtonEl.onclick = function(){
    moonButtonEl.classList.remove('selected-planet-button')
    marsButtonEl.classList.remove('selected-planet-button')
    europaButtonEl.classList.remove('selected-planet-button')
    titanButtonEl.classList.add('selected-planet-button')

    planetNameEl.textContent = data.destinations[3].name
    planetDetailEl.textContent = data.destinations[3].description
    planetImageEl.src = data.destinations[3].images.png
    distanceEl.textContent = data.destinations[3].distance
    travelTimeEl.textContent = data.destinations[3].travel
}