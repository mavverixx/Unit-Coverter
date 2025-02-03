document.addEventListener('DOMContentLoaded', function() {

const convertButton = document.getElementById("convert-button")
const numberEntered = document.getElementById("input-section")

const lengthText = document.getElementById("container-details-1")
const volumeText = document.getElementById("container-details-2")
const massText = document.getElementById("container-details-3")
    // your entire conversion code here

convertButton.addEventListener("click", function(){

    const numberValue = parseInt(numberEntered.value);

    const metersToFeet = numberValue * 3.281;
    const feetToMeters = numberValue / 3.281;

    const litersToGallons = numberValue * 0.264;
    const gallonToLiters = numberValue / 0.264;

    const kilogramToPound = numberValue * 2.204;
    const poundToKilogram = numberValue / 2.204;

    const textContentLength = 
   `${numberValue} meters = ${metersToFeet.toFixed(3)} feet | ${numberValue} feet = ${feetToMeters.toFixed(3)} meters`
   const textContentVolume = 
   `${numberValue} liters = ${litersToGallons.toFixed(3)} gallons | ${numberValue} gallons = ${gallonToLiters.toFixed(3)} liters`
   const textContentMass = 
   `${numberValue} kilos = ${kilogramToPound.toFixed(3)} pounds | ${numberValue} pounds = ${poundToKilogram.toFixed(3)} kilos`

    lengthText.textContent = textContentLength;
    volumeText.textContent = textContentVolume;
    massText.textContent = textContentMass;

    console.log("convert button clicked");
    console.log(`the number entered is ${numberValue}`);
    });

});

// // ${}

/*
STEP 1: SETUP DOM ELEMENTS
- Find and store button element
- Find and store input element
- Find and store all three display containers (length, volume, mass)

STEP 2: CREATE EVENT LISTENER
When convert button is clicked:
    
    STEP 3: GET INPUT
    - Get number from input field
    - Convert string to number

    STEP 4: CALCULATE CONVERSIONS
    Length:
    - Meters to Feet = input × 3.281
    - Feet to Meters = input ÷ 3.281

    Volume:
    - Liters to Gallons = input × 0.264
    - Gallons to Liters = input ÷ 0.264

    Mass:
    - Kilos to Pounds = input × 2.204
    - Pounds to Kilos = input ÷ 2.204

    STEP 5: CREATE OUTPUT STRINGS
    Length String:
    - Create template: "{input} meters = {metersToFeet} feet | {input} feet = {feetToMeters} meters"

    Volume String:
    - Create template: "{input} liters = {litersToGallons} gallons | {input} gallons = {gallonsToLiters} liters"

    Mass String:
    - Create template: "{input} kilos = {kilosToPounds} pounds | {input} pounds = {poundsToKilos} kilos"

    STEP 6: UPDATE DISPLAY
    - Set length container's text to length string
    - Set volume container's text to volume string
    - Set mass container's text to mass string

END EVENT LISTENER
*/

// // I need to out line th thinking only the pseudocode for an app Im making 
// that say if 20 is entered for example into as a unit converter and convert button 
// is pressed using a unit it mus then populate 3 sections of the interface with 
// the result,:
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// // 1 kilogram = 2.204 pound
// // */ I think the first time I need to create a function which 
// grabs the button as described above from the DOM, then a number is entered ( so there needs to be an input expression in the HTML)
// into the unit converter take this number times it by the single unit times 
// an populate the textContent, this must happen using template literals/strings