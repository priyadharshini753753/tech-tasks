function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

console.log("Name:", name);
console.log("Email:", email);
console.log("Password:", password);

if(name == "" || email == "" || password == ""){
document.getElementById("error").innerHTML = "All fields required!";
return false;
}

alert("Form submitted successfully");
return true;

}