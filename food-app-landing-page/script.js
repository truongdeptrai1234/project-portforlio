"use-strict";

const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", (e) => {
  //   console.log(e.target.name);
  document.querySelector(".main-nav").classList.toggle("active");
  btnClose.classList.toggle("active");
  btnMenu.classList.toggle("hidden");
});
btnClose.addEventListener("click", (e) => {
  //   console.log(e.target.name);
  document.querySelector(".main-nav").classList.toggle("active");
  btnClose.classList.toggle("active");
  btnMenu.classList.toggle("hidden");
});
// document.querySelector("body").addEventListener("click", (e) => {
//   if (!e.target.classList.contains('size-6')) {
//     document.querySelector(".main-nav").classList.remove("active");
//     btnClose.classList.remove("active");
//     btnMenu.classList.remove("hidden");
//   }
// });

const observer = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    } else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  { root: null, threshold: 0.1, rootMargin: "-80px" }
);
observer.observe(document.querySelector(".hero"));
// js file to make the mobile menu work and add sticky bar
