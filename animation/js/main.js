function showPhoto( e, userid){
    var userPhoto = document.getElementById(userid);

    if (userPhoto.classList.contains("animate")) {
        userPhoto.classList.remove("animate");
    }

    var calcTop  = e.clientY - ( userPhoto.offsetHeight / 2 );
    var calcLeft  = e.clientX - ( userPhoto.offsetWidth / 2 );
    var left  = calcLeft  + "px";
    var top  = calcTop  + "px";

    userPhoto.style.left = left;
    userPhoto.style.top = top;
    userPhoto.classList.add("animate");
    return false;
}