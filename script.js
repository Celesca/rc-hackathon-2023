const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})

// Login Section

const profileElement = document.getElementById('profile');

const userIcon = document.getElementById('user-icon');
const loginButton = document.getElementById('login-icon');


const checkLogin=()=> {
    if (profileElement.classList.contains('login')) {
        userIcon.style.display = "block";
        loginButton.style.display = "none";
    }
    else { 
        userIcon.style.display = "none";
        loginButton.style.display = "block";
    }
}

checkLogin();