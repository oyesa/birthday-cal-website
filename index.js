var yearError = document.getElementById('year-error')
var monthError = document.getElementById('month-error')
var dayError = document.getElementById('day-error')
var genderError = document.getElementById('gender-error')
var submitError = document.getElementById('submit-error')

//add function to validate year value and its correct fomart

function validateYear(year) {
  var text = /^[0-9]+$/;
  if (year != 0) {
      if ((year != "") && (!text.test(year))) {

          alert("Please Enter Numeric Values Only");
          return false;
      }

      if (year.length != 4) {
          alert("Year invalid. Please check");
          return false;
      }
      var current_year=new Date().getFullYear();
      if((year < 1920) || (year > current_year))
          {
          alert("Year should be in range 1920 to current year");
          return false;
          }
      return true;
  }
}

//add function for month validation 

function validateMonth(month) {
  var month = document.getElementById('month').value;

  if(month.length == 0) {
      monthError.innerHTML = 'month invalid'
      return false;
  }
  if((month < 0) || (month > 12)) {
      monthError = 'month value invalid'
      return false;
  }
  return true:
}

//add day function and validation

function validateDay(day) {
    var day = document.getElementById('day').value;

    if(day.length == 0) {
        dayError.innerHTML = 'day invalid'
        return false;
    }
    if((day < 0) || (day > 31)) {
        dayError = 'day value invalid'
        return false;
    }
    return true;
}

//add gender options and birth date calculations based on gender that returns Akan name

function validateGender(gender){
    var gender = document.getElementById('gender').value;

    if
}











