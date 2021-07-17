// salary indicator
var salary = document.querySelector("#salary");
var output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

//  Name validations
var text = document.querySelector("#text");
var textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) {
    textError.textContent = "";
    document.getElementById("button").disabled = false;
  } else {
    textError.textContent = "**Name is Incorrect";
    document.getElementById("button").disabled = true;
  }
});
//password validation
var pwd = document.querySelector("#password");
var textError = document.querySelector(".text-error");
pwd.addEventListener("input", function () {
  let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[&%$#@^*!~]).{8,}$");
  if (passwordRegex.test(pwd.value)) {
    textError.textContent = "";
    document.getElementById("button").disabled = false;
  }
  if (pwd.value.length < 8) {
    textError.textContent =
      "**Password Invalid\n Password should have atleast 8 characters";
    document.getElementById("button").disabled = true;
  } 
  if(!passwordRegex.test(pwd.value)) {
    textError.textContent =
      "**Password Invalid \n Password must contain atleast \n 1 Uppercase, Lowercase, special character.";
    document.getElementById("button").disabled = true;
  }
});

//  Email validations
var email = document.querySelector("#email");
var textError = document.querySelector(".text-error");
email.addEventListener("input", function () {
  let emailRegex = RegExp(
    "^[a-zA-Z0-9]+[._+-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$"
  );
  if (emailRegex.test(email.value)) {
    textError.textContent = "";
    document.getElementById("button").disabled = false;
  } else {
    textError.textContent = "**Invalid Email, \n Enter a valid email";
    document.getElementById("button").disabled = true;
  }
});

//  Number validations
var number = document.querySelector("#number");
var textError = document.querySelector(".text-error");
number.addEventListener("input", function () {
  let numberRegex = RegExp("^[0-9]{10,15}$");
  if (numberRegex.test(number.value)) {
    textError.textContent = "";
    document.getElementById("button").disabled = false;
  }
  if (number.value >= 0 && number.value.length < 10) {
    textError.textContent =
      "**Invalid Phone Number, \n Digits cannot be less than 10.";
    document.getElementById("button").disabled = true;
  }
  if (!number.value > 0) {
    textError.textContent =
      "**Invalid Phone Number, \n Enter a valid Phone Number";
    document.getElementById("button").disabled = true;
  }
});


//adding data to table

var SubmitButton = document.querySelector("#button");
var tbody = document.querySelector('tbody')
//for deleting the row
var tableEl = document.querySelector('table');
function onAddData(e){
  e.preventDefault();
  var fullName = document.getElementById("text").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var url = document.getElementById("url").value;
  var number = document.getElementById("number").value;
  var date = document.getElementById("date").value;
  var salary = document.getElementById("salary").value;

  tbody.innerHTML += `
  <tr>
      <td>${fullName}</td>
      <td>${password}</td>
      <td>${email}</td>
      <td>${url}</td>
      <td>${number}</td>
      <td>${date}</td>
      <td>${salary}</td>
      <td><button class="deleteBtn">Delete</button></td>
  </tr>
  `;

}

function onDeleteRow(e){
  if(!e.target.classList.contains("deleteBtn")){
    return
  }
  var btn = e.target;
  btn.closest('tr').remove();
}

SubmitButton.addEventListener('click', onAddData );
tableEl.addEventListener('click', onDeleteRow);
