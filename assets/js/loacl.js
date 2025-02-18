 function loadPage(){ 
  window.location.href='thankyou.html'
 }
  
document.addEventListener("DOMContentLoaded", function() {
    // Mapping of Car Brands to their respective Models
    var brandToModels = {
      "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Alto", "Brezza"],
      "Hyundai": ["i10", "i20", "Verna", "Creta", "Venue"],
      "Tata Motors": ["Tiago", "Nexon", "Harrier", "Safari", "Altroz"],
      "Mahindra": ["XUV300", "XUV700", "Scorpio", "Thar", "Bolero"],
      "Honda": ["City", "Amaze", "Jazz", "WR-V"],
      "Toyota": ["Innova", "Fortuner", "Glanza", "Urban Cruiser"],
      "Kia": ["Seltos", "Sonet", "Carens", "EV6"],
      "Renault": ["Kwid", "Triber"],
      "Volkswagen": ["Kiger", "Duster", "Polo", "Virtus", "Taigun", "Tiguan"],
      "MG Motors": ["Hector", "Astor", "Gloster", "ZS EV"]
    };

    var brandSelect = document.getElementById("00NdL00000F1NJh");
    var modelSelect = document.getElementById("00NdL00000F1PRy");

    // Listen for changes on the Car Brand select field
    brandSelect.addEventListener("change", function() {
      var selectedBrand = this.value;
      
      // Clear out any existing options in Car Model dropdown
      modelSelect.innerHTML = '<option value="">--None--</option>';

      // If a valid brand is selected, populate the models dropdown
      if (selectedBrand && brandToModels[selectedBrand]) {
        brandToModels[selectedBrand].forEach(function(model) {
          var option = document.createElement("option");
          option.value = model;
          option.text = model;
          modelSelect.add(option);
        });
      }
    });
  });