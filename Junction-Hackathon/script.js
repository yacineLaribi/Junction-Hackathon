//*Form Post Data
const form = document.querySelector("form");
let j;
j = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("sub").value = "submitting...";
  if (j == 0) {
    let data = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbyLJELeoNFg8-g5wdTYWaF3trdC4hOaJa1QI31HRBRtRQJCM_7B2NF20WTgj1LUPVH-/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        j = j + 1;
        console.log(data);
        document.querySelector("#sub").value = data;
        console.log(j);
      });
  } else {
    document.getElementById("sub").value = "You are already registered!";
  }
});

//*Header

const header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.style.backgroundColor = "rgba(0,0,0," + window.scrollY * 0.01 + ")";
  if (window.scrollY > 3500) {
    header.style.opacity = "0";
  } else {
    header.style.opacity = "100";
  }
});
//*Menu backend
const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".menuLinks");
menuButton.onclick = () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
};
for (var i = 0; i < menu.children.length; i++) {
  menu.children[i].onclick = () => {
    menu.classList.add("hidden");
  };
}
//!
if (menu.classList.contains("hidden")) {
const body =document.body
for (var c = 1; c < body.children.length-1; c++) {
  console.log(body.children[c]);
  body.children[c].onclick=()=>{
    menu.classList.add("hidden");
  }
}}
