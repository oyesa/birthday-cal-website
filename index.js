var yearError = document.getElementById('year-error')
var monthError = document.getElementById('month-error')
var dayError = document.getElementById('day-error')
var genderError = document.getElementById('gender-error')
var submitError = document.getElementById('submit-error')


function validateYear(year) {
  var text = /^[0-9]+$/;
  if (year != 0) {
      if ((year != "") && (!text.test(year))) {

          alert("Please Enter Numeric Values Only");
          return false;
      }

      if (year.length != 4) {
          alert("Year is not proper. Please check");
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