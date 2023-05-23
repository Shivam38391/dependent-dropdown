"use strict";


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
            console.log(selectedState.slice(-1,0))

          });




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++form ajax calls +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





$("#environment_input").focus(function(){
  $(this).css("background-color", "yellow");

  //function triger to show suggestions

  $.ajax({
    url : "/environment-list/",
    dataType: "json",
  
    success : successfn,
    error : errorfn,
  
  })

  
function removeItem(element) {
  // You can perform actions here to remove the item
  // For example, you can use JavaScript to remove the <li> element
  element.parentNode.parentNode.removeChild(element.parentNode);
}

  
  function successfn(response, status){
    const { environments } = response
    console.log(environments[0])
  
  for (let r in environments){
  
      var liTags =   `<li id = "${environments[r].Environment}" class="list-items" onclick="displayNames(${ environments[r].Environment })" style="cursor: pointer;">${ environments[r].Environment } <span id = "${environments[r].id}" class="close-button" onclick="removeItem(this)">x</span> </li>`

      $(".list").append(liTags);
    
      $(`#${environments[r].Environment}`).click(function() {
        let extration = this.textContent.trim().slice(0,-2)
        console.log(extration);
        $("#environment_input").val(extration)
        console.log($("#environment_input").val())
        

        $("span").click(function(){
          $("li").hide();
        })
        

          //clear all the item
          let items = document.querySelectorAll(".list-items");
          items.forEach((item) => {
            item.remove();
          });

      })

      // $(`#${environments[r].id}`).click(function() {
      //     $("li").hide()
      // })




   }

  

  }


});




$("*").focus(function(){
  // $(this).css("background-color", "skyblue");

  removeElements()
})




function errorfn(error, status){
  console.log(error)
  console.log(status)
}




function removeItem(element) {
  // You can perform actions here to remove the item
  // For example, you can use JavaScript to remove the <li> element
  element.parentNode.parentNode.removeChild(element.parentNode);
}


function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}



});









