//Dom
const mTof = document.getElementById("meterTofeet")
const fTom = document.getElementById("feetTometer")
const lTog = document.getElementById("literTogallon")
const gTol = document.getElementById("gallontoleter")
const kTop = document.getElementById("kilotopound")
const pTok = document.getElementById("poundtokilo")
const conVert = document.getElementById("btn")
const inputValue = document.getElementById("input").value

conVert.addEventListener("click",function(){
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
    let meter = inputValue
    let feet = (3.281*inputValue).toFixed(2)
    mTof.textContent= `${inputValue} meters = ${feet} Feet`
} 

function FtoM() {
    console.log("function Runs")
    let feet = inputValue
    let meter = (0.3048*inputValue).toFixed(2)
    fTom.textContent = `${inputValue} Feets = ${meter} Meters`
}

function LtoG() {
    console.log("function Runs")
    let liter = inputValue
    let Gallon = (0.264*inputValue).toFixed(2)
    lTog.textContent = `${inputValue} Liters = ${Gallon} Gallons`
}

function GtoL() {
    console.log("function Runs")
    let Gallon = inputValue
    let liter = 3.7878*inputValue 
    gTol.textContent = `${inputValue} Gallons = ${liter} liters`
}
function KtoP() {
    console.log("function Runs")
    let killo = inputValue
    let pound = (2.204*inputValue).toFixed(2)
    kTop.textContent = `${inputValue} kilogram = ${pound} pounds` 
}
function Ptok() {
    console.log("function Runs")
    let pound = inputValue
    let killo = (0.4537*inputValue).toFixed(2)
    pTok.textContent = `${inputValue} Pounds = ${killo} Kilograms`
}