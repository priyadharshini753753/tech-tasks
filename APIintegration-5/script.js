function getUser(){

fetch("data.json")

.then(response => response.json())   // JSON parse

.then(data => {

document.getElementById("result").innerHTML =
"Name: " + data.name + "<br>" +
"Email: " + data.email + "<br>" +
"City: " + data.state;

})

.catch(error => console.log(error));

}