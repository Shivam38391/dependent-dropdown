import countryStates from './countriesdatasets.json' assert { type: 'json' };
console.log(countryStates);
console.log(typeof countryStates);

$(document).ready(function(){
  console.log("jquery working")
  $('.ch').chosen();
  $(".st").chosen()
})


// const {countries} = data
// console.log(countries)
// console.log(typeof countries)

// const countryStates = {}

// for (let i in data){

    // const {country, states }= countries[i]
    // console.log(country)
    // console.log(states)


//     countryStates[`${country}`] = states
// }

// console.log(countryStates)




    

      // Get references to the dropdown elements
      const countryDropdown = document.getElementById("country");
      const stateDropdown = document.getElementById("state");


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
        
        // Clear previous options in the state dropdown
        stateDropdown.innerHTML = "<option value=''>Select a state</option>";
  
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


