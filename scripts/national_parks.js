"use strict";

console.log(`Loading Page...`); //message displayed in console


/*                                                      V A R I A B L E S ...                                                         */   


const theLocationsDropdown = document.getElementById("theLocationsDropdown");  // Location Dropdown <div>

const theParkTypesDropDown = document.getElementById("theParkTypesDropDown");   // Park Type Dropdown <div>


let selectedLocation = theLocationsDropdown.value; // State Selected (by user) // converts selction => value 

let selectedParkType = theParkTypesDropDown.value; // Selected Park Type (by user) // converts selction => value


let nationalParksInfoCards = document.getElementById("nationalParksInfoCards"); // National Parks Info Card <div>

let cardContainer = document.getElementById("cardContainer"); // Container for the National Park info cards



/*_____________________________________________________________________________________________________________________________________*/




/*                                                    N  E  X  T  .  .  .



/*_____________________________________________________________________________________________________________________________________*/


// When page loads...

window.onload = function () {


       addLocationsToTheDropdown(); // Locations are in Dropdown

       addParksToTheDropdown();     // Park Types are in Dropdown


       hideParkTypeDropDown();      // Park Type Dropdown is hidden

       hideNationalParkInfoCard();  // National Parks Info Cards are hidden

  

       theLocationsDropdown.onchange = function() { // When a State is Selected...
    
       showParkTypeDropDown(); // Park Type Dropdown is Shown

       whenLocationIsChanged(); // When the Location Dropdown Changes...

    }
}


/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                      ******** LOCATIONS ARE ADDED TO THE DROPDOWN ********


function addLocationsToTheDropdown() {

       for (let location of locationsArray) { // Loops through locations
  
       let newLocationOption = new Option(location); // creating new option (location)

       theLocationsDropdown.appendChild(newLocationOption); // Adds new option (location) to Dropdown

    }

    console.log(`Locations are in the Dropdown`);

} 

/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                      ******** PARK TYPES ARE ADDED TO THE DROPDOWN ********


function addParksToTheDropdown() { 

       for (let parktype of parkTypesArray) { // Loops through park types

       let newParkOption = new Option(parktype); // creating new option (park type)

       theParkTypesDropDown.appendChild(newParkOption); // Adds new option (park type) to Dropdown

    }

    console.log(`Park Types are in the Dropdown`);

}

/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                      ******** HIDES PARK TYPES DROPDOWN ********


function hideParkTypeDropDown() {

      theParkTypesDropDown.style.display = "none";  // Hides Park Types Dropdown

      console.log(`Park Types Dropdown is Hidden`);

}

/*_____________________________________________________________________________________________________________________________________*/


// When initiated...                      ******** SHOWS PARK TYPES DROPDOWN ********


function showParkTypeDropDown() {

      theParkTypesDropDown.style.display = "block";  // Shows Park Types Dropdown

      console.log(`Park Types Dropdown is Shown`);

    } 
    
/*_____________________________________________________________________________________________________________________________________*/


// When page loads...                     ******** HIDE NATIONAL PARKS INFO CARDS ********


function hideNationalParkInfoCard() {

      nationalParksInfoCards.style.display = "none";  
             
      console.log(`National Parks Info Cards are Hidden`);

} 

/*_____________________________________________________________________________________________________________________________________




                                                   N  E  X  T  .  .  . F U N C T I O N S

                                                      

  _____________________________________________________________________________________________________________________________________*/

// When Location Dropdown is Changed...      ******** FIND PARKS IN THE CHOSEN LOCATION ********

    
function whenLocationIsChanged() {

        const selectedLocation = theLocationsDropdown.value; // Converts selection => value

    
        if (theLocationsDropdown.value !== "") {  // If a value is present...

        
        //showParkTypeDropDown();  // show the Park Type Dropdown

      
        const parks = nationalParksArray.filter(park => park.State === selectedLocation); // Find the parks that are in the location chosen
                                                
        
        console.log(parks); // Shows all of the parks in that are in the location chosen in the console

/*_____________________________________________________________________________________________________________________________________*/


// When Park Type Dropdown is Changed...     ******** FIND PARKS IN THE CHOSEN LOCATION ********


        theParkTypesDropDown.onchange = function () {  // // When a Park Type is Selected...
             
            
        const selectedParkType = theParkTypesDropDown.value; // Converts selection => value


        const nationalParks = parks.filter(park => park.LocationName.includes(selectedParkType)); // Find the parks that are in the location chosen and under the park type chosen
                                      
                           
        console.log(nationalParks); // Shows all of the parks in that are in the location chosen and under the park type chosen in the console                                  
                   

        if (nationalParks.length > 0) {

            for (let thePark of nationalParks) {

                newInfoCard(thePark);
    }                

  }                                                                                                                      
        
}

        }

    }

/*_____________________________________________________________________________________________________________________________________




                                                 N  E  X  T  .  .  . C A R D   D I S P L A Y

                                                      

  _____________________________________________________________________________________________________________________________________*/

  // When initiated...                     ******** FIND PARKS IN THE CHOSEN LOCATION ********


  function newInfoCard(park) {
    let divCol = document.createElement("div");
    divCol.className = "col-4";
    cardContainer.appendChild(divCol);
  
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCard.style.width = "18rem";
    divCol.appendChild(divCard);
  
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);
  
    let h3Name = document.createElement("h5");
    h3Name.className = "card-title";
    h3Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h3Name);
  
    let detailList = document.createElement("ul");
    divCardBody.appendChild(detailList);
  
    let liId = document.createElement("li");
    liId.innerHTML = park.LocationID;
    detailList.appendChild(liId);
  
    let liAddress = document.createElement("li");
    liAddress.innerHTML = park.Address;
    detailList.appendChild(liAddress);
  
    let liCity = document.createElement("li");
    liCity.innerHTML = park.City;
    detailList.appendChild(liCity);
  
    let liState = document.createElement("li");
    liState.innerHTML = park.State;
    detailList.appendChild(liState);
  
    let liZipCode = document.createElement("li");
    liZipCode.innerHTML = park.ZipCodes;
    detailList.appendChild(liZipCode);
  
    let liPhone = document.createElement("li");
    liPhone.innerHTML = park.Phone;
    detailList.appendChild(liPhone);
  
    let liFax = document.createElement("li");
    liFax.innerHTML = park.Fax;
    detailList.appendChild(liFax);
  
    let liLatitude = document.createElement("li");
    liLatitude.innerHTML = park.Latitude;
    detailList.appendChild(liLatitude);
  
    let liLongitude = document.createElement("li");
    liLongitude.innerHTML = park.Longitude;
    detailList.appendChild(liLongitude);
  
    let liLocation = document.createElement("li");
    liLocation.innerHTML = park.Location;
    detailList.appendChild(liLocation);
  
    showNationalParkInfoCard(park); // This function initiates showing the national park info card
  }
  
            
        console.log(`The National Park Info Card is displayed on the screen`);
        
        
/*_____________________________________________________________________________________________________________________________________*/


// When initiated...                      ******** SHOW NATIONAL PARKS INFO CARDS ********


function showNationalParkInfoCard() {

    nationalParksInfoCards.style.display = "block"  
 
    console.log(`National Parks Info Cards are Shown`);
}

console.log(`End`);