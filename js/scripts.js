$(document).ready(function() {
  $('#survey-form').submit(function(event) {
    event.preventDefault();
    const input1 = $('#input1').val();

    const array = ["My favorite icecream flavor is ..."];
    array.forEach(function(flavors) {
      flavors = input1
      $("#result-container").append("<li>" + array + flavors + "!");
    });
    
    $('#result-container').show();
  });
});