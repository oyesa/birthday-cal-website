
const button = document.getElementById('submit')
const gender = document.querySelectorAll('#gender')
const feedback = document.querySelector('.return')


const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

button.addEventListener('click', function(){
    const input = document.getElementById('mydate').value;
    let birthDate = new Date(input);
    let day = birthDate.getDay();
    console.log(`the day is ${day}`);

    for (let choice of gender){
        let genderChoice = choice.value;
        
        if (genderChoice === "Male"){
            feedback.innerHTML = `Your Akan name is ${maleName[day]}`
        } else if (genderChoice === "Female"){
            feedback.innerHTML = `Your Akan name is ${femaleName[day]}`
        } else {
            feedback.innerHTML = `Invalid choice`
        }
    }
});





















// var gender = document.AkanForm.gender;
// var birthdate = mydate.value;
// var date = new date(document.getElementById('mydate').value);
// var dateday = date.getDay();

// var day = weekdays[dateday];

// var valid = false;

// //displaying error messages

// var mydateerror = document.getElementById('mydateerror');
// var gendererror = document.getElementById('gendererror');

// //display object
// var display = document.getElementById('display');

// if(mydate.value == ""){
//     mydateerror.innerHTML = "Enter a valid date";
//     return false;
// }
// else{
//     for(var i = 0;i<gender.length;i++){
//         if(gender[i].checked){
//             valid = true;
//             break;
//         }
//     }
// }
// if(valid) {
//     if (gender[i].value == 'Male') {
//         display.innerHTML = "You were born on a "+day+" <br> "+"Your Akan name is" + maleName[dayOfWeek];
//     }
//     else {
//         if (gender[i].value == 'Female') {
//             display.innerHTML = "You were born on a "+day+" <br> "+"Your Akan name is" + femaleName[dayOfWeek];  
//     }
// }
// else {
//     genderError.innerHTML = "select gender";
//     return false;
// }
// function refresh(){
//     document.getElementById('mydateerror').innerHTML = "";
//     document.getElementById('gendererror').innerHTML ="";
// }








