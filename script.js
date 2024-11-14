// Script file for Light mode -> Dark Mode

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

// function for both start and end darkmode states

function startDarkMode(){
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    // themeSwitch.innerHTML = "Switch to Light Mode"

}

function endDarkMode() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode==='active') {
    startDarkMode()
    
}

// check if the user has previously selected dark mode

themeSwitch.addEventListener("click", ()=>{
    let darkmode = localStorage.getItem('darkmode')
// adding a good written conditionl statment using expressions
darkmode !== "active"? startDarkMode() : endDarkMode()

// the colon here means else statement
 

})