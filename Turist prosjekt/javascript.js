window.addEventListener("scroll",skroll)
let heroEl = document.querySelector(".hero");

 function skroll() {
    heroEl.classList.toggle("scrolled", window.scrollY > 0);
};
    
