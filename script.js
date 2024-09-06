console.log("Hello World");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (e) => {
    alert("enit poda Signup cheyan vanekan avan");
    e.preventDefault()
});


const loginLink = document.querySelector("#login-link");

loginLink.addEventListener("click", (e) => {
    alert("login cheyan evadra account ninak");
    e.preventDefault()
})