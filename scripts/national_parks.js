"use strict"; // You must first declare your variables





console.log(`Loading Page...`); //message displayed in console





//Declare Global Variables - what elements are you interacting with?
const selectLocationDropdown       = document.getElementById("selectLocationDropdown"); // ID for the Location drop down element

const selectParkTypeDropdown       = document.getElementById("selectParkTypeDropdown"); // ID for the Parktype Drop down element

const parkDropDownSectionWithLabel = document.getElementById("searchByParkType");       // ID for the <div> section that holds
                                                                                        // the park dropdown and it's label.


let   nationalParksInfoCards        = document.getElementById("nationalParksInfoCards");  // This is the National Parks Info Card
                                                                                        // tag from it's container in HTML

// THESE ARE THE VARIABLES FOR THE CARDS:

const parkName       = document.getElementById("LocationName");   // ID for park title

const parkAddress    = document.getElementById("parkAddress");    // ID for park address

// const parkId         = document.getElementById("parkId"); 

const parkLocationID = document.getElementById("parkLocationID"); // ID for park location id

const parkPhone      = document.getElementById("parkPhone");      // ID for park phone

const parkFax        = document.getElementById("parkFax");        // ID for park fax

const parkLatitude   = document.getElementById("parkLatitude");   // ID for park latitude

const parkLongitude  = document.getElementById("parkLongitude");  // ID for park longitude

const parkLocation   = document.getElementById("parkLocation");   // ID for park location
                                                                                    
                                                                             





// When page loads init the functions...
window.onload = function () {   //When page loads we want the two functions below
                                // to be evoked...


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

  

   selectLocationDropdown.onchange = function() { // When a state is selected it 
                                                  // will initiate this function.
    aStateHasBeenSelected();
    showParkTypeDropDown();
 }

   
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
    parkDropDownSectionWithLabel.style.display = "block";

    console.log(`The park types dropdown is now shown`);
                                                     // This is displaying
                                                     // a message in the
                                                     // console.
    } 
    
    



function hideNationalParkInfoCard() {

    nationalParksInfoCards.style.display = "none";   // this adjusts the style
                                                    // display of the element and
                                                    // hides the element.

    console.log(`The National Parks Info Card is now hidden`); 
                                                    // This is displaying
                                                    // a message in the
                                                    // console.
}





function showNationalParkInfoCard() {

    nationalParksInfoCards.style.display = "block"   // this adjusts the style
                                                    // display of the element and
                                                    // shows the element.

    console.log(`The National Parks Info Card is now shown`); 
                                                    // This is displaying
                                                    // a message in the
                                                    // console.                                                
}
 

  


// THE FUNCTION BELOW WILL OCCUR WHEN IT IS INITIATED BY THE EVENT CHANGE.
// When the location dropdown is changed, the second dropdown will show.
// The user will then choose a park type from the second dropdown.
// the Park Type dropdown will show and the display the parks in that state.

    function aStateHasBeenSelected() {
    
        if (selectLocationDropdown.value !== "") {  // If the .value is not (!==) an
            showParkTypeDropDown();                 // empty string, meaning it has
        // So if this value has a state OR          // a state, then it will 
        // a state is chosen by the user we         // move forward with what's
        // wiill proceed with the if statement      // inside the brackets.
                                                                        
                                                    
        const selectedState = selectLocationDropdown.value; //This is the chosen state
  
      
        const parks = nationalParksArray.filter(park => park.State === selectedState);
                                                    // Here we are filtering the
                                                    // national parks array based on
                                                    // the selected state/location

        console.log(`These are all of the parks in ${selectedState}: ${parks}`); 
                                                    // This will show us what state
                                                    // the user chose and what parks
                                                    // are all in that state.
        
        // THE USER WILL THEN SELECT A PARK TYPE:
        
        selectParkTypeDropdown.onchange = function () {
                                                    // This event will innitiate the    
            aParkTypeHasBeenSelected();             // next function.   

        }                                                                                                                      
        
        }
    }





    // BELOW IS THE NEXT FUNCTION
    // This function will be for filtering through the parks in that state and will
    // match the user with the parks that fall under the park type they chose from the
    // Park types Dropdown. 


    function aParkTypeHasBeenSelected() {

                                                    // SO FIRST...
                                                    // the user selects a state:

        const selectedParkType = selectParkTypeDropdown.value; //This is the chosen state

        // Here, I'm just defining a few variables for this function:
        const selectedState = selectLocationDropdown.value; //This is the chosen state
        const parks = nationalParksArray.filter(park => park.State === selectedState);

        const nationalParks = parks.filter(park => park.LocationName.includes(selectedParkType));

                                                    // The computer will search through the
                                                    // array of parks' (arrays w/ parks
                                                    // in the state the user selected) and
                                                    // find the objects that include a
                                                    // string with a word that matches one
                                                    // of the park types in the
                                                    // "parkTypesArray"                                        
                           
        console.log(`These are the ${selectedParkType} parks in ${selectedState}: ${nationalParks}`);                                           
                   
        // NOW THAT WE HAVE THE NATIONAL PARKS RESULTS THAT HAVE BEEN FILTERED BY THE STATE
        // AND THE PARK TYPE, WE NOW WANT TO DISPLAY THIS INFORMATION IN A CARD

        // Here, let's call a the function that will create the card and display once finished:

        createNationalParkInfoCard()                


        // BELOW IS THE FUNCTION WE WILL USE TO CREATE THE CARD:


        function createNationalParkInfoCard(){

            if (nationalParks.length > 0) {

                        for (let selectedPark of nationalParks) {
                            
        // WE WANT TO DISPLAY MULTIPLE CARDS INSIDE OF OUR CONTAINER

        // Declaring variables we plan on interacting with...
        const container = document.getElementById("nationalParksInfoCards"); // This is the 
                                                                             // container
                                                                             // that will
                                                                             // hold all of
                                                                             // the cards.
        
        // LET'S CREATE THE CARDS:
            
                
                            parkName.innerHTML       = selectedPark.LocationName;  
                            parkAddress.innerHTML    = selectedPark.Address;
                            //parkId.innerHTML       = selectedPark.LocationID;
                            parkLocationID.innerHTML = selectedPark.Location;
                            parkPhone.innerHTML      = selectedPark.Phone;
                            parkFax.innerHTML        = selectedPark.Fax;
                            parkLatitude.innerHTML   = selectedPark.Latitude;
                            parkLongitude.innerHTML  = selectedPark.Longitude;
                
                        }
                        
                        showNationalParkInfoCard(); // This function initiates showing the national
                                                    // park info card
                      }
                    }

                    console.log(`The National Park Info Card is displayed on the screen`);
                }

