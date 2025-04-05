let arr  =[]
let form=document.querySelector("form")
form.addEventListener("submit", (event)=>{
event.preventDefault();
let inputs=document.querySelectorAll("input")
let users=JSON.parse(localStorage.getItem("users"));
let findusers= users.find(user=> user.username==inputs[1].value&& user.password==inputs[2].value);
 if (findusers) {
   
    alert("giris uqurludur😊")
    window.location.href="index.html";
    arr.push(inputs[1].value)
    JSON.parse(localStorage.setItem("activeUsers",arr))
 } else {
    alert("users tapilmadi😊")
 }

inputs[1].value="";
inputs[2].value="";


})