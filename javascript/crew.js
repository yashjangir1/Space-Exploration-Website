import data from './data.js'

let homeButtonCPEl = document.getElementById("homeButtonCP")
let destinationButtonCPEl = document.getElementById("destinationButtonCP")
let technologyButtonCPEl = document.getElementById("technologyButtonCP")

homeButtonCPEl.onclick = function(){
    window.location.href = '../html/index.html'
}

destinationButtonCPEl.onclick = function(){
    window.location.href = '../html/destination.html'
}

technologyButtonCPEl.onclick = function(){
    window.location.href = '../html/technology.html'
}

let crewButton1El = document.getElementById("crewButton1")
let crewButton2El = document.getElementById("crewButton2")
let crewButton3El = document.getElementById("crewButton3")
let crewButton4El = document.getElementById("crewButton4")

let crewDesignationEl = document.getElementById("crewDesignation");
let crewMemberNameEl = document.getElementById("crewMemberName");
let crewMemberDetailEl = document.getElementById("crewMemberDetail");
let crewMemberPhotoEl = document.getElementById("crewMemberPhoto");

crewButton1El.onclick = function(){
    crewButton1El.classList.add("crew-selected-button")
    crewButton2El.classList.remove("crew-selected-button")
    crewButton3El.classList.remove("crew-selected-button")
    crewButton4El.classList.remove("crew-selected-button")

    crewDesignationEl.textContent = data.crew[0].role
    crewMemberNameEl.textContent = data.crew[0].name
    crewMemberDetailEl.textContent = data.crew[0].bio
    crewMemberPhotoEl.src = data.crew[0].images.png
}

crewButton2El.onclick = function(){
    crewButton1El.classList.remove("crew-selected-button")
    crewButton2El.classList.add("crew-selected-button")
    crewButton3El.classList.remove("crew-selected-button")
    crewButton4El.classList.remove("crew-selected-button")

    crewDesignationEl.textContent = data.crew[1].role
    crewMemberNameEl.textContent = data.crew[1].name
    crewMemberDetailEl.textContent = data.crew[1].bio
    crewMemberPhotoEl.src = data.crew[1].images.png
    crewMemberPhotoEl.style.width = '340px'
}

crewButton3El.onclick = function(){
    crewButton1El.classList.remove("crew-selected-button")
    crewButton2El.classList.remove("crew-selected-button")
    crewButton3El.classList.add("crew-selected-button")
    crewButton4El.classList.remove("crew-selected-button")

    crewDesignationEl.textContent = data.crew[2].role
    crewMemberNameEl.textContent = data.crew[2].name
    crewMemberDetailEl.textContent = data.crew[2].bio
    crewMemberPhotoEl.src = data.crew[2].images.png
    crewMemberPhotoEl.style.width = '400px'
}

crewButton4El.onclick = function(){
    crewButton1El.classList.remove("crew-selected-button")
    crewButton2El.classList.remove("crew-selected-button")
    crewButton3El.classList.remove("crew-selected-button")
    crewButton4El.classList.add("crew-selected-button")

    crewDesignationEl.textContent = data.crew[3].role
    crewMemberNameEl.textContent = data.crew[3].name
    crewMemberDetailEl.textContent = data.crew[3].bio
    crewMemberPhotoEl.src = data.crew[3].images.png
    crewMemberPhotoEl.style.width = '440px'
}