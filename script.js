const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})