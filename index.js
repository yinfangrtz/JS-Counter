// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// logLapTime()
// // console.log(totalTime) error, function can read global scope of lap1, 
// // but out of function, console can't read totalTime



// change the count-el in the HTML to reflect the new count
// camelCase, normal convention
let countEl = document.getElementById("count-el") //pass in arguments
let saveEl = document.getElementById("save-el")
// console.log(countEl), to see if we get the right element

let count = 0

function increment() {
    count = count + 1
    // count += 1
    // less code is better code
    countEl.innerText = count
}

function decrement() {
    count = count - 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " /😊 "
    // saveEl.innerText += countStr
    // Make sure to not delete the existing content of the paragraph by +=
    // console.log(count)
    // lost a space, debug with google, it might be innerText problem, innerText alternative mdn
    // textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}

