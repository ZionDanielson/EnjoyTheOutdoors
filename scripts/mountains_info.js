"use strict";

console.log(`Loading Page...`); //message displayed in console


/*                                                      V A R I A B L E S ...                                                         */   


const theMountainsDropdown = document.getElementById("theMountainsDropdown");  // The Mountains Dropdown <div>

let selectedMountain = theMountainsDropdown.value; // Mountain Selected (by user) // converts selction => value 

let mountainInfoCard = document.getElementById("mountainInfoCard"); // Mountain Info Card <div>

let infoCardContainer = document.getElementById("infoCardContainer"); // Container for the Mountain info cards


const mountainImage = document.getElementById("mountainImage");

const mountainName = document.getElementById("mountainName");

const mountainElevation = document.getElementById("mountainElevation");

const mountainEffort = document.getElementById("mountainEffort");

const mountainDesc = document.getElementById("mountainDesc");

const mountainCoords = document.getElementById("mountainCoords");

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

/*_____________________________________________________________________________________________________________________________________*/

// When page loads...                     ******** HIDE MOUNTAIN INFO CARDS ********


function showMountainInfoCard() {

    mountainInfoCard.style.display = "block";  
          
   console.log(`Mountain Info Card is Shown`);

} 

/*_____________________________________________________________________________________________________________________________________



                                                N  E  X  T  .  .  . F U N C T I O N S

                                                   

_____________________________________________________________________________________________________________________________________*/

// // When Mountain Dropdown is Changed...      ******** DISPLAY MOUNTAIN INFO CARD ********

// function whenMountainIsChanged() {


// // let selectedMountain = selectedMountain.value; // Converts selection => value

// // if (selectedMountain == "") { // if there is no value show no card
// //     hideMountainInfoCard();

// // }
// // else {

//     // let selectedMountain = getActivityById(selectedMountain.value);

//     mountainImage.innerHTML = selectedMountain.img;
//     mountainName.innerHTML = selectedMountain.name;
//     mountainElevation.innerHTML = selectedMountain.elevation;
//     mountainEffort.innerHTML = selectedMountain.effort;
//     mountainDesc.innerHTML = selectedMountain.desc;
//     mountainCoords.innerHTML = selectedMountain.coords;

//     showMountainInfoCard();
// }

function whenMountainIsChanged() {
    
    
    let selectedMountain = theMountainsDropdown.value; // Retrieve the selected mountain value from the dropdown
    if (selectedMountain) {
      // Check if a mountain is selected
      // Retrieve the mountain information based on the selected value
      let mountainInfo = document.getElementById(selectedMountain);
      
        // Update the info card elements with the retrieved mountain information
        //mountainImage.innerHTML = mountainInfo.img;
        mountainName.innerHTML = selectedMountain.name;
        mountainElevation.innerHTML = selectedMountain.elevation;
        mountainEffort.innerHTML = selectedMountain.effort;
        mountainDesc.innerHTML = selectedMountain.desc;
        mountainCoords.innerHTML = selectedMountain.coords;
  
        showMountainInfoCard();
  }
}

  


/*_____________________________________________________________________________________________________________________________________*/


//  // When initiated...                     ******** MOUNTAIN INFO CARD ********


//  function theMountainInfoCard() {
    
  
//     showmountainInfoCard(selectedMountain); // This function initiates showing the MOUNTAIN info card
//   }
  
            
//         console.log(`The Mountain Info Card is displayed on the screen`);
        
        
/*_____________________________________________________________________________________________________________________________________*/
