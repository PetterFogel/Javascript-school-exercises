const sideBar = document.querySelector(".sidebar");
const userProfile = document.querySelector(".user-profile");
const linkTitles = document.querySelector(".link-title");
const settingsLink = document.querySelector(".settings");
const burgerIcon = document.querySelector(".burger");

sideBar.onmouseover = function() {
    if(window.innerWidth > 1200){
    sideBar.style.width = "15rem";
    }
} 

sideBar.onmouseout = function() {
    if(window.innerWidth > 1200){
    sideBar.style.width = "4rem";
    } 
}

burgerIcon.onclick = function() {
    sideBar.classList.toggle("sidebar-active");
    burgerIcon.classList.toggle("burger-active");
    settingsLink.style.display = "block";
} 