const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})

// Login Section

const checkLogin=()=> {
    if (localStorage.getItem("rc_hackathon_id")) {
        
    }
}

checkLogin()