let elDarkBtn = document.querySelector(".nav-bar__list-item-btn");

elDarkBtn.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("dark-mode")
})