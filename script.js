const password = document.getElementById("password");
const strengthFill = document.getElementById("strengthFill");
const message = document.getElementById("message");
const tips = document.getElementById("tips");

password.addEventListener("input", () => {

  let value = password.value;
  let score = 0;
  let suggestions = [];

  // Length Check
  if(value.length >= 8){
    score++;
  } else{
    suggestions.push("✔ Use at least 8 characters");
  }

  // Uppercase Check
  if(/[A-Z]/.test(value)){
    score++;
  } else{
    suggestions.push("✔ Add uppercase letters");
  }

  // Number Check
  if(/[0-9]/.test(value)){
    score++;
  } else{
    suggestions.push("✔ Add numbers");
  }

  // Special Character Check
  if(/[^A-Za-z0-9]/.test(value)){
    score++;
  } else{
    suggestions.push("✔ Add special characters");
  }

  // Password Strength
  if(score === 1){
    strengthFill.style.width = "25%";
    strengthFill.style.background = "red";
    message.innerHTML = "Weak Password";
  }

  else if(score === 2){
    strengthFill.style.width = "50%";
    strengthFill.style.background = "orange";
    message.innerHTML = "Medium Password";
  }

  else if(score === 3){
    strengthFill.style.width = "75%";
    strengthFill.style.background = "yellow";
    message.innerHTML = "Good Password";
  }

  else if(score === 4){
    strengthFill.style.width = "100%";
    strengthFill.style.background = "lime";
    message.innerHTML = "Strong Password";
  }

  else{
    strengthFill.style.width = "0%";
    message.innerHTML = "";
  }

  tips.innerHTML = suggestions.join("<br>");

});