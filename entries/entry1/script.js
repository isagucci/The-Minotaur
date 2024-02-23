
function checkPassword() {

  var enteredPassword = document.getElementById("passwordInput").value;

  var correctPassword = "theminotaur";

  if (enteredPassword === correctPassword) {

    window.location.href = "../entry2/index.html";
  
  } else {
    // Display an error message if the password is incorrect
    alert("Incorrect password! Hint: To find the answer you have to look at the SOURCE");
  }
}