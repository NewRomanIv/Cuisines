let logIn = document.querySelectorAll(".nav__linc")[0];
let signUp = document.querySelectorAll(".nav__linc")[1];
let burger = document.querySelectorAll(".nav__linc")[2];

let modalLogIn = document.querySelector(".modalLogIn");
let modalSignUp = document.querySelector(".modalSignUp");
let modalForm = document.querySelector(".modal-content");
let modalBack = document.querySelector(".modalLogIn");
let btnCloseLogIn = document.querySelector(".closeLogIn");
let btnCloseSignUp = document.querySelector(".closeSignUp");

let burgerBtn = document.querySelector(".closebtn");

logIn.addEventListener("click", () => (modalLogIn.style.display = "block"));
signUp.addEventListener("click", () => (modalSignUp.style.display = "block"));
burger.addEventListener("click", () => openNav());
burgerBtn.addEventListener("click", () => closeNav());

btnCloseLogIn.addEventListener(
  "click",
  () => (modalLogIn.style.display = "none")
);

btnCloseSignUp.addEventListener(
  "click",
  () => (modalSignUp.style.display = "none")
);

modalLogIn.addEventListener("click", (event) => {
  let element = event.target.classList;
  if (element.contains("modalLogIn")) modalLogIn.style.display = "none";
});

modalSignUp.addEventListener("click", (event) => {
  let element = event.target.classList;
  if (element.contains("modalSignUp")) modalSignUp.style.display = "none";
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    modalSignUp.style.display = "none";
    modalLogIn.style.display = "none";
  }
});

/* Open */
function openNav() {
  document.querySelector(".overlay").style.height = "100%";
}

/* Close */
function closeNav() {
  document.querySelector(".overlay").style.height = "0%";
}
