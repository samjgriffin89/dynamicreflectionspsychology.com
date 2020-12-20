function searchSymptoms() {
  // Declare variables
  var input, filter, symptom, h3s, h3, i, txtValue;

  input = document.getElementById('search-symptoms');
  filter = input.value.toUpperCase();
  symptomList = document.getElementById("symptomCtas");
  symptoms = symptomList.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < symptoms.length; i++) {
    symptomTitle = symptoms[i].getElementsByTagName('h3')[0];

    txtValue = symptomTitle.textContent || symptomTitle.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      symptoms[i].style.display = "";
    } 
    else {
      symptoms[i].style.display = "none";
    }
  }
}