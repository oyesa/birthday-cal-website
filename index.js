var yearError = document.getElementById('year-error')
var monthError = document.getElementById('month-error')
var dayError = document.getElementById('day-error')
var genderError = document.getElementById('gender-error')
var submitError = document.getElementById('submit-error')


function validateYear({
  var name = document.getElementById('birth-year').value;

  if(year.length == 0){
    yearError.innerHTML = 'Year is required';
    return false;
  }
})