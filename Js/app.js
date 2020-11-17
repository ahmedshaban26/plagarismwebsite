new WOW().init();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



let mybutton = document.getElementById("go-up");

window.onscroll = function () {
  if (window.pageYOffset >= 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.onclick = () => {
  window.scrollTo(0, 0);
};

let myTextArea = document.getElementById("myText");

myTextArea.onfocus = function () {

  this.setAttribute ("data-place" , this.getAttribute("placeholder"));

  this.setAttribute("placeholder", " ");
}

myTextArea.onblur = function () {

  this.setAttribute ("data-place" , this.getAttribute("data-place"));

  this.setAttribute("data-place", " ");
}