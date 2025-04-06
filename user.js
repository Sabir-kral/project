let username = document.querySelector(".username")
username.innerHTML = `username:${localStorage.getItem("activeUsers")}`
let logOut = document.querySelector(".logOut")
logOut.addEventListener("click",()=>{
    let cont = document.querySelector(".cont")
    cont.style.display = "none"
    let main = document.querySelector("main")
    let h1 = document.createElement("h1")
    h1.innerText = "your not logined"
main.append(h1)
})
function out() {
    person.style.display = "none"
    names.style.display = "none"
    let logOut = document.querySelector(".logOut")
    let logIn = document.querySelector(".logIn")
    logOut.style.display = "none"
    logIn.style.display = "inline"
}
