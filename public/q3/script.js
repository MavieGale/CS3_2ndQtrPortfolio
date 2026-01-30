// read from the localStorage saved as a string - to see if there are anything saved on the users computer
let acctString = localStorage.getItem("accounts");
if (!acctString) {
accountList = {};
} else {
accountList = JSON.parse(acctString);
}

const form = document.getElementById("dForm"); // get the HTML form

// event handler on the submit button
form.addEventListener("submit", function (e) {
e.preventDefault(); // prevent page reload

if (confirm("Are you sure you want to proceed?")) {
const data = new FormData(form);
const obj = Object.fromEntries(data.entries());

// USE Student ID as the key instead of uname
accountList[obj.sId] = {};

for (let key in obj) {
if (key !== "sId") {
accountList[obj.sId][key] = obj[key];
}
}

console.log(accountList);
acctString = JSON.stringify(accountList);
localStorage.setItem("accounts", acctString);

form.submit();
}
});

// event handler for the reset button
form.addEventListener("reset", function (e) {
if (!confirm("Are you sure you want to clear the form?")) {
e.preventDefault();
}
});


function focusColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "light blue";
} 

function blurColor(ele) {
  console.log(ele);
 ele.style.backgroundColor = "white";
} 