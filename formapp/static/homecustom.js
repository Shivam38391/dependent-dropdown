"use strict";


import countryStates from './countriesdatasets.json' assert { type: 'json' };
console.log(countryStates);
console.log(typeof countryStates);
console.log(Object.keys(countryStates).length);






// ==============function to get crsf-token =================================================================

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');


// ==============function to get crsf-token =================================================================






// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {

  //settings of Select2 librarary for dropdown search functionlity in dropdown
    $('.js-example-basic-single').select2({
        placeholder: 'Select an option',
        allowClear: true,

      });



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




// +++++++++++++++++++++++++++++++++++++++++++++++++++form ajax calls +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//when user clicks the input field of environment hit the api that fetches the environment from the server
$("#environment_input").focus(function(){
  $(this).css("background-color", "yellow");

  //function triger to show suggestions

  $.ajax({
    url : "/environment-list/",
    dataType: "json",
  
    success : successfn,
    error : errorfn,
  
  })


  //when the data fetch succesfully
  function successfn(response, status){
    const { environments } = response
    console.log(environments[0])
  
  for (let r in environments){
  
      var liTags =   `<li id = "${environments[r].Environment}" class="list-items" style="cursor: pointer;">${ environments[r].Environment } <span id = "${environments[r].id}" class="close-button" onclick="removeItem(this)">x</span> </li>`

      //append the li tags
      $(".list").append(liTags);
    

      //when user clicks on any of  the suggestion fill the the input field with that text
      $(`#${environments[r].Environment}`).click(function() {
        let extration = this.textContent.trim().slice(0,-2)
        console.log(extration);
        //fill the the input field with that text
        $("#environment_input").val(extration)
        console.log($("#environment_input").val())

        

          //clear all the item
          // let items = document.querySelectorAll(".list-items");
          // items.forEach((item) => {
          //   item.remove();
          // });

      })


      //when user clicks on any of  the suggestion it will delete that suggestion from the saved history env
      $(`#${environments[r].id}`).click(function() {
        console.log("clicked on rmove span")
        console.log(this)
        console.log(this.parentNode)


//it will delete that suggestion from the saved history env
        let urlForDelete = `/env-delete/${environments[r].id}`
        console.log(urlForDelete)



        
//it will delete that suggestion from the saved history env
        fetch( urlForDelete,{

        method : 'DELETE',
        headers: {'Content-Type': 'application/json', 
        'X-CSRFToken': csrftoken,}
      
        }).then((response) => {
          console.log("deleted response")
          // and remove that suggestion from the list
          console.log( this.parentNode.remove())
        // this.parentNode.removeChild(this)
        })




      })


   }

  

  }


});




$("*").focus(function(){
  // $(this).css("background-color", "skyblue");


//may be the solution of double click issue with this removeElement
  removeElements()
})




function errorfn(error, status){
  console.log(error)
  console.log(status)
}




function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}



});







