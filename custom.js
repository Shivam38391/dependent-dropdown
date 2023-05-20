import countryStates from './countriesdatasets.json' assert { type: 'json' };
console.log(countryStates);
console.log(typeof countryStates);

// $(document).ready(function(){
//   console.log("jquery working")



      // Get references to the dropdown elements
      const countryDropdown = document.getElementById("country");
      const stateDropdown = document.getElementById("state");
      // let selectedCountryFromJquery = $("span").text()

    // Populate the state dropdown
    const populateCountries = Object.keys(countryStates);

     populateCountries.forEach(populateCountries => {
                    const option = document.createElement("option");
                    option.value = populateCountries;
                    option.textContent = populateCountries;
                    countryDropdown.appendChild(option);
                  });

      
  
      // Add event listener to country dropdown

      countryDropdown.addEventListener("change", function() {
        const selectedCountry = countryDropdown.value;


        console.log(selectedCountry)

        // Clear previous options in the state dropdown
        stateDropdown.innerHTML = "<option value=''></option>";
  
        if (selectedCountry) {
          // Get the states for the selected country
          const states = countryStates[selectedCountry];
          
          // Populate the state dropdown
          states.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);


          });
        }
      });


    // })

    // In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  $('.ch').select2();
});
