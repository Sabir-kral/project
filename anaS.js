let user = localStorage.getItem("activeUsers")
let names = document.querySelector(".name")
names.innerHTML = user
names.style.display = "inline"
let person = document.querySelector(".bi-person")
person.style.display = "inline"
function opens() {
    window.open("./login.html")
}
function out() {
    person.style.display = "none"
    names.style.display = "none"
    let logOut = document.querySelector(".logOut")
    let logIn = document.querySelector(".logIn")
    logOut.style.display = "none"
    logIn.style.display = "inline"
}