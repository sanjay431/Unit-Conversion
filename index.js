//Dom
const mTof = document.getElementById("meterTofeet")
const fTom = document.getElementById("feetTometer")
const lTog = document.getElementById("literTogallon")
const gTol = document.getElementById("gallontoleter")
const kTop = document.getElementById("kilotopound")
const pTok = document.getElementById("poundtokilo")
const conVert = document.getElementById("btn")
const inputValue = document.getElementById("input")

conVert.addEventListener("click",function(){
    console.log(inputValue.value)
    console.log("button clicked")
    MtoF()
    FtoM() 
    LtoG() 
    GtoL()
    KtoP()
    Ptok()  
})

function MtoF () {
    console.log("function runs")
    let meter = inputValue.value
    let feet = (3.281*inputValue.value).toFixed(2)
    mTof.textContent = `${inputValue.value} meters = ${feet} Feet`
} 

function FtoM() {
    console.log("function Runs")
    let feet = inputValue.value
    let meter = (0.3048*inputValue.value).toFixed(2)
    fTom.textContent = `${inputValue.value} Feets = ${meter} Meters`
}

function LtoG() {
    console.log("function Runs")
    let liter = inputValue.value
    let Gallon = (0.264*inputValue.value).toFixed(2)
    lTog.textContent = `${inputValue.value} Liters = ${Gallon} Gallons`
}

function GtoL() {
    console.log("function Runs")
    let Gallon = inputValue.value
    let liter = (3.7878*inputValue.value).toFixed(2) 
    gTol.textContent = `${inputValue.value} Gallons = ${liter} liters`
}
function KtoP() {
    console.log("function Runs")
    let killo = inputValue.value
    let pound = (2.204*inputValue.value).toFixed(2)
    kTop.textContent = `${inputValue.value} kilogram = ${pound} pounds` 
}
function Ptok() {
    console.log("function Runs")
    let pound = inputValue.value
    let killo = (0.4537*inputValue.value).toFixed(2)
    pTok.textContent = `${inputValue.value} Pounds = ${killo} Kilograms`
}