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
    localStorage.removeItem("activeUsers")
    logOut.style.display = "none"
}
function openss() {
    window.open("./user.html")
}
function opensss() {
    window.open("./add.html")
}
let body = document.querySelector("body")
let products = localStorage.getItem("activeProducts")
let activeProducts = JSON.parse(localStorage.setItem("activeProducts",products))
let tbody = document.createElement("tbody")
let table = document.querySelector("table")
table.append(tbody)
let tr = document.createElement("tr")
tbody.append(tr)
let td = document.createElement("td")
td.innerText = products
tr.append(td)

tbody.append(body)