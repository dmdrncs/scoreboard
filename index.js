let homeScore = 0
let guestScore = 0
let homeBtn = document.getElementById("home-scr")
let guestBtn = document.getElementById("guest-scr")

// HOME ADD 1 POINT
function homeAddOne() {
    homeScore += 1
    homeBtn.textContent = homeScore
}

// HOME ADD 2 POINT
function homeAddTwo() {
    homeScore += 2
    homeBtn.textContent = homeScore
}

// HOME ADD 3 POINT
function homeAddThree() {
    homeScore += 3
    homeBtn.textContent = homeScore
}

// GUEST ADD 1 POINT
function guestAddOne() {
    guestScore += 1
    guestBtn.textContent = guestScore
}

// GUEST ADD 2 POINT
function guestAddTwo() {
    guestScore += 2
    guestBtn.textContent = guestScore
}

// GUEST ADD 3 POINT
function guestAddThree() {
    guestScore += 3
    guestBtn.textContent = guestScore
}

// NEW GAME 
function gameReset() {
    homeBtn.textContent = 0
    guestBtn.textContent = 0
    homeScore = 0
    guestScore = 0
}