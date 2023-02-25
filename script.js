let form = document.querySelector("form");
let foot = document.getElementById("foot").offsetHeight;
document.documentElement.style.setProperty("--foot-height", foot + "px");

function get() {
  let num = document.getElementById("num");
  var a = num.value;
  form.setAttribute("action", `https://wa.me/+20${a}`);
}
