// Get the signup form
const form = document.getElementById("dForm");

if (form) {


// Run when user clicks Accept
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Ask confirmation before saving
  if (!confirm("Are you sure you want to submit?")) return;

  // Read existing accounts from localStorage
  let saved = localStorage.getItem("accounts");

  // If none yet, start with empty array
  let accounts = saved ? JSON.parse(saved) : [];

  // Collect all form inputs
  const student = {
    sId: document.getElementById("sId").value,
    fname: document.getElementById("fname").value,
    dob: document.getElementById("dob").value,
    emad: document.getElementById("emad").value,
    gradelvl: document.getElementById("gradelvl").value,
    club: document.getElementById("club").value,
    "i/e": document.querySelector('input[name="i/e"]:checked').value
  };
  // Add new signup to array
  accounts.push(student);

  // Save updated array back to localStorage
  localStorage.setItem("accounts", JSON.stringify(accounts));

  alert("Signup saved successfully!");

  // Clear form after saving
  form.reset();
});

// Ask confirmation before clearing form
form.addEventListener("reset", function (e) {
  if (!confirm("Clear the form?")) {
    e.preventDefault();
  }
});
}
