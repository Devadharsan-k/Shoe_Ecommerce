const scrollBtn = document.querySelector(".scrollup");


scrollBtn.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop < 150) {
        scrollBtn.style.opacity = "0";
    } else {
        scrollBtn.style.opacity = "1";
    }
});