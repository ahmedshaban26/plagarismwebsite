
let myFuckinTextArea = document.getElementById("myText");

myFuckinTextArea.onfocus = function () {

  this.setAttribute ("data-place" , this.getAttribute("placeholder"));

  this.setAttribute("placeholder", " ");
}

myFuckinTextArea.onblur = function () {

  this.setAttribute ("placeholder" , this.getAttribute("data-place"));

  this.setAttribute("data-place", " ");
}
//////////////////////////////////////////////////

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


