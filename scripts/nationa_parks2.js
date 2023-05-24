"use strict"; // You must first declare your variables

console.log(`Loading Page...`); // message displayed in the console

// Declare Global Variables - what elements are you interacting with?
const selectLocationDropdown = document.getElementById("selectLocationDropdown"); // ID for the Location drop-down element
const selectParkTypeDropdown = document.getElementById("selectParkTypeDropdown"); // ID for the Park Type drop-down element
const parkDropDownSectionWithLabel = document.getElementById("searchByParkType"); // ID for the <div> section that holds the park dropdown and its label.
let nationalParksInfoCard = document.getElementById("nationalParksInfoCard"); // This is the National Parks Info Card tag from its container in HTML

// ...

// WHEN THE LOCATION IS CHOSEN/CHANGED WE WANT THE SECOND DROPDOWN TO POP UP:
selectLocationDropdown.onchange = function () {
  if (selectLocationDropdown.value !== "") {
    // When a value is selected, the second dropdown will appear.
    showParkTypeDropDown();
    populateNationalParks();
  }
};

// ...

// 1ST FUNCTION is addLocationsToTheDropdown():
function addLocationsToTheDropdown() {
  console.log(`We have made it inside the locations dropdown`);

  for (let location of locationsArray) {
    let newLocationOption = new Option(location);
    selectLocationDropdown.appendChild(newLocationOption);
  }
}

// ...

// 2ND FUNCTION: addParksToTheDropdown()
function addParksToTheDropdown() {
  for (let parktype of parkTypesArray) {
    let newParkOption = new Option(parktype);
    selectParkTypeDropdown.appendChild(newParkOption);
    console.log(`Park Types are now displayed in the dropdown`);
  }
}

// ...

// Hide Park Type Dropdown
function hideParkTypeDropDown() {
  selectParkTypeDropdown.style.display = "none";
  parkDropDownSectionWithLabel.style.display = "none";
  console.log(`The park types dropdown is now hidden`);
}

// Show Park Type Dropdown
function showParkTypeDropDown() {
  selectParkTypeDropdown.style.display = "block";
  console.log(`The park types dropdown is now shown`);
}

// Hide National Park Info Card
function hideNationalParkInfoCard() {
  nationalParksInfoCard.style.display = "none";
  console.log(`The National Parks Info Card is now hidden`);
}

// Show National Park Info Card
function showNationalParkInfoCard() {
  nationalParksInfoCard.style.display = "block";
  console.log(`The National Parks Info Card is now shown`);
}

console.log(`Page has finished loading`);





electLocationDropdown.onchange = function() {
    if (selectLocationDropdown.value !== "") {
      // Show the park type dropdown
      showParkTypeDropDown();
  
      // Get the selected state/location
      const selectedState = selectLocationDropdown.value;
  
      // Filter the national parks array based on the selected state/location
      const parks = nationalParksArray.filter(park => park.State === selectedState);
  
      // Perform your desired action with the filtered parks data
      // For example, you can display the park information in the HTML elements
      if (parks.length > 0) {
        const selectedPark = parks[0]; // Assuming you only want to display the first park
        parkName.innerHTML = selectedPark.LocationName;
        parkAddress.innerHTML = selectedPark.Address;
        parkId.innerHTML = selectedPark.LocationID;
        parkLocationID.innerHTML = selectedPark.Location;
        parkPhone.innerHTML = selectedPark.Phone;
        parkFax.innerHTML = selectedPark.Fax;
        parkLatitude.innerHTML = selectedPark.Latitude;
        parkLongitude.innerHTML = selectedPark.Longitude;
  
        // Show the national park info card
        showNationalParkInfoCard();
      }
    }
  };