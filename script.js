const sideBar = document.querySelector(".sidebar");
const userProfile = document.querySelector(".user-profile");
const linkTitles = document.querySelector(".link-title");
const settingsLink = document.querySelector(".settings");

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
// window.onresize = function() {
//     if(window.innerWidth > 1200){
//         sideBar.style.width = "4rem"; 
//         sideBar.style.marginLeft = "0";
//         userProfile.style.display = "none";
//         linkTitles.style.display = "none";
//     }
//     else if (window.innerWidth < 1200) { 
//         sideBar.style.width = "15rem";
//         sideBar.style.marginLeft = "0";
//         userProfile.style.display = "block";
//         linkTitles.style.display = "block";
//     }
// }




/* === JUMPING MAN === */
