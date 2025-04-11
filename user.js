let user = localStorage.getItem("activeUsers")
let names = document.querySelector(".name")
names.innerHTML = user
names.style.display = "inline"
let person = document.querySelector(".bi-person")
person.style.display = "inline"
let username = document.querySelector(".username")
let surname = document.querySelector(".surname")
let users = localStorage.getItem("user")
localStorage.setItem("activeUserSurname",users)
let surnames = JSON.parse(localStorage.getItem("activeUserSurname"))
let emails = document.querySelector(".surname")
let email = JSON.parse(localStorage.getItem("activeUserEmail"))
let namess = document.querySelector(".surname")
let namesss = JSON.parse(localStorage.getItem("activeUserName"))
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
    username.innerHTML = "username:"
    surname.innerHTML = "surname:"
    emails.innerHTML = "email:"
    namess.innerHTML = "name:"
    localStorage.removeItem("activeUser")
}
function openss() {
    window.open("./user.html")
}
username.innerHTML = `username:${user}`;
surname.innerHTML = `surname:${surnames}`;