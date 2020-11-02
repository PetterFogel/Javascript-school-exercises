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


/* === IMAGE SLIDE-SHOW === */
setInterval(startSlideShow, 3000)
const imageOne = document.getElementById("image1");
const imageTwo = document.getElementById("image2");
const imageThree = document.getElementById("image3");
const imageArray = [imageOne, imageTwo, imageThree];

function startSlideShow(){
    for(i = 0; i < imageArray.length; i++){
        if(imageArray[i].classList.contains("show")){
            imageArray[i].classList.toggle("show")
            imageArray[2].classList.toggle("show")
        } else if (imageArray[2].classList.contains("show")){
            imageArray[i].classList.toggle("show")
            imageArray[2].classList.toggle("show")
        }
    }
}

/* === JUMPING MAN === */