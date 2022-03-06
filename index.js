var yearError = document.getElementById('year-error')
var monthError = document.getElementById('month-error')
var dayError = document.getElementById('day-error')
var submitError = document.getElementById('submit-error')

//add year validation

function validateYear(year) {
  var year = document.getElementById('year').value;
  var year = /^[0-9]+$/;
      if (year.length != 4) {
          alert("Year invalid. Please check");
          return false;
      }
      if((year < 1920) || (year > current_year))
          {
          alert("Year should be in range 1920 to current year");
          return false;
          }
      return true;
  }
}

//add month validation 

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
  return true;
}

//add day validation

function validateDay(day) {
    var day = document.getElementById('day').value;

    if(day.length == 0) {
        dayError.innerHTML = 'day value invalid'
        return false;
    }
    if((day < 0) || (day > 31)) {
        dayError = 'day value invalid'
        return false;
    }
    return true;
}

//Day of week calculations 

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

var year = document.getElementById('year').value;
var month = document.getElementById('month').value;
var day = document.getElementById('day').value;
var century = parseInt(year/100);

//day of week 

var dayOfWeek = ((century/4)-2*century-1)+(5*year/4)+(26*(month+1)/10+day)%7;
return dayOfWeek;

//Factor in Akan name based on gender

for(var i = 0;i<gender.length;i++){
    if(gender[i].checked){
        valid = true;
        break;
    }
}

if(valid) {
    if (gender[i].value == 'Male') {
        display.innerHTML = "You were born on a "+day+" <br> "+"Your Akan name is" + maleName[dayOfWeek];
    }
    else {
        if (gender[i].value == 'Female') {
            display.innerHTML = "You were born on a "+day+" <br> "+"Your Akan name is" + femaleName[dayOfWeek];  
    }
}
else {
    genderError.innerHTML = "select gender";
    return false;
}








