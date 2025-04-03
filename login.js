let form = document.querySelector(".f")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let input1 = document.querySelector("#input")
    let input2 = document.querySelector("#inputIki")
    let users = JSON.parse(localStorage.getItem("users"))
    let findUser = users.find(user=>user.username==input1.value)
    let findUser2 = users.find(user=>user.password==input2.value)
    let p = document.querySelector(".p1")
    let p2 = document.querySelector(".p2")
    if (findUser) {
        p.innerText = "looks good!"
        p.style.color = "green"
    } else {
        p.innerText = "looks bad!"
        p.style.color = "red"
    }
    if (findUser2) {
        p2.innerText = "looks good!"
        p2.style.color = "green"
    } else {
        p2.innerText = "looks bad!"
        p2.style.color = "red"
    }
    if (p.style.color=="green"&&p2.style.color=="green") {
        window.open("./anaS2.html")
    }
})