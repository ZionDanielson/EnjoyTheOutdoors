"use strict"; // You must first declare your variables





console.log(`Loading Page...`); //message displayed in console





//Declare Global Variables - what elements are you interacting with?
const selectLocationDropdown       = document.getElementById("selectLocationDropdown"); // ID for the Location drop down element

const selectParkTypeDropdown       = document.getElementById("selectParkTypeDropdown"); // ID for the Parktype Drop down element

const parkDropDownSectionWithLabel = document.getElementById("searchByParkType");       // ID for the <div> section that holds
                                                                                        // the park dropdown and it's label.

let   nationalParksInfoCard        = document.getElementById("nationalParksInfoCard");  // This is the National Parks Info Card
                                                                                        // tag from it's container in HTML
                                                                                    
                                                                             





// When page loads init the functions...
window.onload = function () { //When page loads we want the two functions below
                              // to be evoked...

    selectLocationDropdown.onchange = showParkTypeDropDown; 
                              // When the location is chosen from the locations
                              // dropdown it will call the function 
                              // showP arkTypeDropDown() to show the Park Types
                              // Dropdown.

    // selectParkTypeDropdown.onchange = onActivitySelectChange;

   addLocationsToTheDropdown(); // Initiate first function - this function adds
                                // the array of locations to the dropdown as soon
                                // as the page loads.

   addParksToTheDropdown();     // Initiates second function - this function adds
                                // the array of parks to the drop down as soon as
                                // the page loads.

   hideParkTypeDropDown();      // Hide the Park Type Dropdown - this function
                                // hides the Park Type drop down as soon as the
                                // page loads.


   hideNationalParkInfoCard();  // Hide Park Info Card - this function
                                // hides the Park Info card drop down as soon as
                                // the page loads.

}



console.log(`Page has finished loading`); //message displayed in the console





// ARRAY ITEMS MUST FIRST BE ADDED TO THE DROPDOWN LISTS: 2 Functions -
// addLocationsToTheDropdown() & addParksToTheDropdown()





//1ST FUNCTION is addLocationsToTheDropdown(): (DISPLAYED BELOW)




// BELOW:
// This is where the second function from window.onload is displayed. Before
// dropdown is clicked, when window loads, locations are added to the Locations
// Dropdown list

function addLocationsToTheDropdown() { // this function will add locations to the
                                       // drop down

    console.log(`We have made it inside the locations dropdown`);

       for (let location of locationsArray) { // We are first looping through the
                                              // provided array of information
                                              // (locationsArray) provided in the
                                              // JavaScript file locationData.js
  
       let newLocationOption = new Option(location); // We are then creating a
                                                     // new option.

       selectLocationDropdown.appendChild(newLocationOption); // We are adding
                                                              // the new option
                                                              // to the array/
                                                              // dropdown list.

    }
}





console.log(`All of our Locations from our array are displayed in the dropdown`); 
                                             // This is displaying a message in
                                             // the console.





// 2ND FUNCTION: addParksToTheDropdown() (DISPLAYED BELOW):





// BELOW:
// This function will add the lists of parks to the dropdown


function addParksToTheDropdown() { 

    for (let parktype of parkTypesArray) {

        let newParkOption = new Option(parktype);

        selectParkTypeDropdown.appendChild(newParkOption);

        console.log(`Park Types are now displayed in the dropdown`);
    }

}





console.log(`All of our Parks from our array are displayed in the dropdown`); 
                                             // This is displaying a message in
                                             // the console.





// NOW WE MUST HIDE/SHOW PAGE ELEMENTS WHEN NEEDED:
// 1. Park Dropdown Hide = hideParkTypeDropDown() Show = showParkTypeDropDown()
// 2. National Park Info Card = hideNationalParkInfoCard() Show =
//    showNationalParkInfoCard()





// BELOW:
// This function, evoked in the window.onload, hides the parks dropdown when the
// window loads. It will not show until the showParkTpeDropDown() function is
// evoked.

function hideParkTypeDropDown() {

    selectParkTypeDropdown.style.display = "none";  // this adjusts the style
                                                    // display of the element and
                                                    // hides the element.
    
    // We also need to hide the label that displays above the function. We will
    // do it with this line of code below: (Remember to add the tag/ retrieve the
    // variable id for the javascript in order for it to work)
    // Also you can use the same formula structure as above.

    parkDropDownSectionWithLabel.style.display = "none";
                                                    // this adjusts the style
                                                    // display of the element and
                                                    // hides the element.  

    





    console.log(`The park types dropdown is now hidden`);  // This is displaying
                                                           // a message in the
                                                           // console.

}





// BELOW:
// This function, , shows the parks dropdown in the browser. It will not
// be hidden until the hide function is called.

function showParkTypeDropDown() {

    selectParkTypeDropdown.style.display = "block";  // this adjusts the style
                                                     // display of the element and
                                                     // shows the element.
    

    console.log(`The park types dropdown is now shown`);
                                                     // This is displaying
                                                     // a message in the
                                                     // console.
    } 
    
    



function hideNationalParkInfoCard() {

    nationalParksInfoCard.style.display = "none";   // this adjusts the style
                                                    // display of the element and
                                                    // hides the element.

    console.log(`The National Parks Info Card is now hidden`); 
                                                    // This is displaying
                                                    // a message in the
                                                    // console.
}





function showNationalParkInfoCard() {

    nationalParksInfoCard.style.display = "block"   // this adjusts the style
                                                    // display of the element and
                                                    // shows the element.

    console.log(`The National Parks Info Card is now shown`); 
                                                    // This is displaying
                                                    // a message in the
                                                    // console.                                                
}
 




// NEXT WHAT ELSE DO WE NEED? WE NEED THE CARD THAT WILL BE DISPLAYED WHEN THE
// FUNCTION whenALocationIsClicked() is ran/complete.
// This will first be set up in the HTML. You need to create a card template.
// Go do that...





// WHEN A LOCATION IS CLICKED/CHOSEN IN THE LOCATION DROPDOWN WE WANT THE PARK
// DROPDOWN TO SHOW.
// HOW DO WE DO THAT?
// WE NEED TO WIRE UP AN "ON CHANGE" EVENT ..Well what does that loolk like?




//Below is 




   // showParkTypeDropDown() // evoking this function
    //addLocationsToTheDropdown()  ; // after the for loop we are evoking/initiating this next function


//function showParkTypeDropDown() {
  // variable is declared globally "selectParkTypeDropDown"
   
   //selectParkTypeDropdown.onclick = selectLocationDropdown.style.display = none;  // wire up an onclick event

    // 
//}



//function whenLocationIsSelected() {
    //Show Park Types DropDown
//}
