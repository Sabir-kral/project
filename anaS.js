let button = document.querySelector(".logIn")
let person = document.querySelector(".bi-person")
let names = document.querySelector(".name")
button.addEventListener("click",()=>{
    if (person.style.display = "none") {
        window.open("./login.html")
    } else {
        person.style.display = "none"
        names.style.display = "none"
    }
})