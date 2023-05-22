"use strict";

console.log(`Loading Page...`);

//Variables
const selectLocationDropdown = document.getElementById("selectLocationDropdown");

const selectParkTypeDropdown = document.getElementById("selectParkTypeDropdown")

//When page loads...
window.onload = function () {

    //selectLocation.onchange = 
    addLocationsToTheDropdown();

}


//Add locations to Dropdown list
function addLocationsToTheDropdown() {

    for (let location of locationsArray) {

        let newOption = new Option(location);

        selectLocationDropdown.appendChild(newOption);

        console.log(`Locations are now displayed in the dropdown`);
    }

}


function whenLocationIsSelected() {
    //Hide Location
}
