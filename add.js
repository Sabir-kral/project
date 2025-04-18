let resets = document.querySelector(".Reset")
resets.addEventListener("click",()=>{
    let form = document.querySelector("form")
    form.reset()
})
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

let form = document.querySelector("form")
let save = document.querySelector(".save")
let reset = document.querySelector(".Reset")
reset.addEventListener("click",()=>{
    let form = document.querySelector("form")
    form.reset()
})
save.addEventListener("dblclick",()=>{
    window.open("./products.html")
})
let arr = []
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let inputs = document.querySelectorAll("input")
    let objekt = {
        id:arr.length+1,
        brend:inputs[1].value,
        model:inputs[2].value,
        kategory:inputs[3].value,
        img:inputs[4].value,
        price:inputs[5].value,
        rating:inputs[6].value,
        img:inputs[7].value
    }
let img = document.querySelector("img")
img.src = inputs[7].value
    arr.push(objekt)
    localStorage.setItem("products",JSON.stringify(arr))
})