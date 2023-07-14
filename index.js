const navToggle = document.querySelector(".nav-toggle");
const navToggleContent = document.querySelector(".nav-toggle-content");

navToggle.addEventListener("click", (e) => {
    e.preventDefault();

    if (navToggleContent.style.maxHeight){
        navToggleContent.style.maxHeight = null;
    } else {
        navToggleContent.style.maxHeight = "200px";
    } 
});