// Get the form element
const form = document.getElementById("dForm");

// When user clicks Accept
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Confirm submission
  if (!confirm("Are you sure you want to submit?")) return;

  // Get existing signups from localStorage
  let saved = localStorage.getItem("accounts");

  // If nothing saved yet, create empty array
  let accounts = saved ? JSON.parse(saved) : [];

  // Collect form data
  const data = new FormData(form);
  const student = Object.fromEntries(data.entries());

  // Add new student to array
  accounts.push(student);

  // Save back to localStorage
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