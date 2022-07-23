
let elPhone = document.querySelector(".fix-phone")
let elInstagram = document.querySelector(".instagram")
let elBody = document.querySelector("main")
let elHeader = document.querySelector("header")
let elFooter = document.querySelector("footer")




elPhone.addEventListener("click", function() {
    elPhone.classList.toggle("open")
})

elInstagram.addEventListener("click", function() {
    elInstagram.classList.toggle("open")
})
elBody.addEventListener("click", function() {
    elPhone.classList.remove("open")
    elInstagram.classList.remove("open")
})
elHeader.addEventListener("click", function() {
    elPhone.classList.remove("open")
    elInstagram.classList.remove("open")
})
elFooter.addEventListener("click", function() {
    elPhone.classList.remove("open")
    elInstagram.classList.remove("open")
})