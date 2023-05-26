"use strict";

console.log(`Loading Page...`); //message displayed in console


/*                                                      V A R I A B L E S ...                                                         */   


const theMountainsDropdown = document.getElementById("theMountainsDropdown");  // The Mountains Dropdown <div>

let selectedMountain = theMountainsDropdown.value; // Mountain Selected (by user) // converts selction => value 

let mountainInfoCard = document.getElementById("mountainInfoCard"); // Mountain Info Card <div>

let infoCardContainer = document.getElementById("infoCardContainer"); // Container for the Mountain info cards

/*_____________________________________________________________________________________________________________________________________*/




/*                                                    N  E  X  T  .  .  .



/*_____________________________________________________________________________________________________________________________________*/


// When page loads...

window.onload = function () {


    addMountainsToTheDropdown(); // Mountains are in Dropdown

    hideMountainInfoCard();  // Mountain Info Cards are hidden



    theMountainsDropdown.onchange = function() { // When a Mountain is Selected...
 
    whenMountainIsChanged(); // When the Mountain Dropdown Changes...

 }
}

/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                      ******** MOUNTAINS ARE ADDED TO THE DROPDOWN ********


function addMountainsToTheDropdown() {

    for (let mountain of mountainsArray) { // Loops through mountains

    let newMountainOption = new Option(mountain.name); // creating new option (mountain)

    theMountainsDropdown.appendChild(newMountainOption); // Adds new option (mountain) to Dropdown

 }

 console.log(`Mountains are in the Dropdown`);

} 

/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                     ******** HIDE MOUNTAIN INFO CARDS ********


function hideMountainInfoCard() {

    mountainInfoCard.style.display = "none";  
          
   console.log(`Mountain Info Card is Hidden`);

} 

/*_____________________________________________________________________________________________________________________________________




                                                N  E  X  T  .  .  . F U N C T I O N S

                                                   

_____________________________________________________________________________________________________________________________________*/

// When Mountain Dropdown is Changed...      ******** DISPLAY MOUNTAIN INFO CARD ********

function whenMountainIsChanged() {


    const selectedMountain = theMountainsDropdown.value; // Converts selection => value

    console.log(selectedMountain);

        if (theMountainsDropdown.value !== "") {  // If a value is present...

            mountainInfoCard()  // initiate this function

}

}