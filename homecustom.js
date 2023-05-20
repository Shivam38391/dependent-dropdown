
import countryStates from './countriesdatasets.json' assert { type: 'json' };
console.log(countryStates);
console.log(typeof countryStates);
console.log(Object.keys(countryStates).length);



// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: 'Select an option',
        allowClear: true,

      });


    //   $('.js-example-basic-single').trigger('change')

    //  console.log( $('.js-example-basic-single').select2('data'));

      let selectedOne = $('.js-example-basic-single').find(':selected');
      console.log(selectedOne)

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

        $("#country").change(function(){
            console.log("Country has been changed.");

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

        $('.st').select2({
            placeholder: 'Select State',
            allowClear: true,
    
          });

        });

        $("#state").change(function(){
            console.log("State has been changed.");
            const selectedState = stateDropdown.value;
            console.log(selectedState)

          });




});




