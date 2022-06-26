/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let tempNum = Number(inputEl.value)
    renderLength(tempNum)
    renderVolume(tempNum)
    renderMass(tempNum)
})

function renderLength(input){
    lengthEl.innerHTML=`
    <h2 class="info-h2">Length (Meter/Feet)</h2>
    <p>${input} meters = ${metersToFeet(input)} feet | ${input} feet = ${feetToMeters(input)} meters </p>
    `
}

function metersToFeet(num){
    return (num*3.281).toFixed(3)
}

function feetToMeters(num){
    return (num/3.281).toFixed(3)
}

function renderVolume(input){
    volumeEl.innerHTML=`
    <h2 class="info-h2">Volume (Liters/Gallons)</h2>
    <p>${input} liters = ${litersToGallons(input)} gallons | ${input} gallons = ${gallonsToLiters(input)} liters</p>
    `
}

function litersToGallons(num){
    return (num*0.264).toFixed(3)
}

function gallonsToLiters(num){
    return (num/0.264).toFixed(3)
}

function renderMass(input){
    massEl.innerHTML=`
    <h2 class="info-h2">Mass (Kilograms/Pounds)</h2>
    <p>${input} kilos = ${kilosToPounds(input)} pounds | ${input} pounds = ${poundsToKilos(input)} kilos
    `
}

function kilosToPounds(num){
    return (num*2.204).toFixed(3)
}

function poundsToKilos(num){
    return (num/2.204).toFixed(3)
}