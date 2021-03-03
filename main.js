
// nav
var button = document.getElementById("button");
 
var openOptions = function(){
    var hide = document.getElementById("hide");
    hide.className = hide.className.replace("navbar-hide-options","");
    button.removeEventListener('click', openOptions);
    button.addEventListener('click',closeOptions);
}

var closeOptions = function(){
    var hide = document.getElementById("hide");
    hide.className += "navbar-hide-options";
    button.removeEventListener('click', closeOptions);
    button.addEventListener('click', openOptions);
}

button.addEventListener('click',openOptions);


