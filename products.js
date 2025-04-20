let user = JSON.parse(localStorage.getItem("activeUser"));
let names = document.querySelector(".name");
names.innerHTML = user.username;
names.style.display = "inline" ;
let person = document.querySelector(".bi-person") ;
person.style.display = "inline";
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
let products =JSON.parse(localStorage.getItem("products"));
let tbody = document.querySelector("tbody")

products.forEach(element => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = element.id;
    let td2 = document.createElement("td");
    td2.innerText = element.brend;
    let td3 = document.createElement("td");
    td3.innerText = element.model;
    let td4 = document.createElement("td");
    td4.innerText = element.kategory;
    let td5 = document.createElement("td");
    let img = document.createElement("img")
    img.src = element.img;
    img.style.width = "5vw"
    td5.append(img)
    let td6 = document.createElement("td");
    td6.innerText = element.price;
    let td7 = document.createElement("td");
    td7.innerText = element.rating;
    let td8 = document.createElement("td");
    let button = document.createElement("button")
    button.style.backgroundColor = "red"
    button.style.color = "white"
    button.style.border = "none"
    button.style.borderRadius = "4px"
    button.innerText = "sil"
    button.classList.add("delete")
    td8.append(button)

    

    

    tr.append(td1, td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr)
});
let deletebutton = document.querySelectorAll(".delete")
deletebutton.forEach(button => {
    button.addEventListener("click",(event)=>{
        event.target.parentElement.parentElement.remove()
        localStorage.removeItem("products")
    })
});