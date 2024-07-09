function LoginFun() {
  let email = document.getElementById("Email-Id").value;
  let Password = document.getElementById("ps-Id").value;
  if (email == "shoaib@gmail.com") {
    document.getElementById("email-check").innerText = "";
    document.getElementById("email-check").style.color = "red";
  } else if (email == "") {
    document.getElementById("email-check").innerText =
      "Please Enter Your Email";
    document.getElementById("email-check").style.color = "red";
  } else if (email != "shoaib@gmail.com") {
    document.getElementById("email-check").innerText = " Email do not matches";
    document.getElementById("email-check").style.color = "red";
  }
  if (Password == "") {
    document.getElementById("ps-check").innerText =
      "Please Enter Your Password";
    document.getElementById("ps-check").style.color = "red";
  } else if (Password != "12345678") {
    document.getElementById("ps-check").innerText = "Password do not matches";
    document.getElementById("ps-check").style.color = "red";
  } else if (Password == "12345678") {
    document.getElementById("ps-check").innerText = "";
  }
  if (email == "shoaib@gmail.com" && Password == "12345678") {
    document.getElementById("ps-check").innerText = "Login Success";
    document.getElementById("ps-check").style.color = "green";
  }
}
function Signup() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const e_mail = document.getElementById("email").value;
  const fpassword = document.getElementById("fpassword").value;
  const cPassword = document.getElementById("Cpassword").value;
  const mNumber = document.getElementById("number").value;

  // Regular Expressions
  const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/; // Username must be 3-16 characters long and can include letters, numbers, and underscores
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character
  const phoneNumberRegex = /^\d{11}$/; // Matches exactly 11 digits

  let isValid = true;

  // Validate username
  if (!userNameRegex.test(firstName)) {
    document.getElementById("fname-check").innerText =
      "First Name must be 3-16 characters long and can include letters, numbers, and underscores";
    document.getElementById("fname-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("fname-check").innerText = "";
  }

  // ... existing first Name code ...

  if (!userNameRegex.test(lastName)) {
    document.getElementById("lname-check").innerText =
      "Last Name must be 3-16 characters long and can include letters, numbers, and underscores";
    document.getElementById("lname-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("lname-check").innerText = "";
  }

  // Validate email
  if (!emailRegex.test(e_mail)) {
    document.getElementById("email-check").innerText =
      "Invalid Email Address Format";
    document.getElementById("email-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("email-check").innerText = "";
  }

  //Validate Password
  if (!passwordRegex.test(fpassword)) {
    document.getElementById("fpassword-check").innerText =
      "Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character";
    document.getElementById("fpassword-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("fpassword-check").innerText = "";
  }

  if (!passwordRegex.test(cPassword)) {
    document.getElementById("Cpassword-check").innerText =
      "Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character";
    document.getElementById("Cpassword-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("Cpassword-check").innerText = "";
  }
  // Validate confirm password
  if (fpassword !== cPassword) {
    document.getElementById("Cpassword-check").innerText =
      "Passwords do not match";
    document.getElementById("Cpassword-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("Cpassword-check").innerText = "";
  }

  // Validate phone number
  if (!phoneNumberRegex.test(mNumber)) {
    document.getElementById("number-check").innerText =
      "Phone number must be exactly 11 digits";
    document.getElementById("number-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("number-check").innerText = "";
  }

  if (isValid) {
    document.getElementById("signin-check").innerText = "Signup Success";
    document.getElementById("signin-check").style.color = "green";
  }
  // ... existing code ...
}

function submitBtn(event) {
  event.preventDefault();
  const oldPassword = document.getElementById("oPassword").value;
  const newPassword = document.getElementById("nPassword").value;
  const confirmPassword = document.getElementById("C_Password").value;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character

  let isValid = true;

  // Validate old password
  if (oldPassword === "12345678") {
    document.getElementById("oPassword-check").innerText = "Password Matched";
    document.getElementById("oPassword-check").style.color = "green";
  } else {
    document.getElementById("oPassword-check").innerText =
      "Old Password is incorrect";
    document.getElementById("oPassword-check").style.color = "red";
    isValid = false;
  }

  // Validate new password
  if (!passwordRegex.test(newPassword)) {
    document.getElementById("nPassword-check").innerText =
      "Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character";
    document.getElementById("nPassword-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("nPassword-check").innerText = "";
  }

  // Validate confirm password
  if (!passwordRegex.test(confirmPassword)) {
    document.getElementById("C_Password-check").innerText =
      "Password must be 8 characters long, include uppercase letter, lowercase letter, number, and special character";
    document.getElementById("C_Password-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("C_Password-check").innerText = "";
  }

  // Check if new password and confirm password match
  if (newPassword !== confirmPassword) {
    document.getElementById("C_Password-check").innerText =
      "Passwords do not match";
    document.getElementById("C_Password-check").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("C_Password-check").innerText = "";
  }

  if (isValid) {
    document.getElementById("submit-check").innerText =
      "Password Change Successful";
    document.getElementById("submit-check").style.color = "green";
  } else {
    document.getElementById("submit-check").innerText =
      "Password Change Failed";
    document.getElementById("submit-check").style.color = "red";
  }
}
function resetBtn() {
  document.getElementById("oPassword").value = "";
  document.getElementById("nPassword").value = "";
  document.getElementById("C_Password").value = "";
  document.getElementById("fname").value = "";
}
