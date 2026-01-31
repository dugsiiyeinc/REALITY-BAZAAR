// selec all element from the html page to change it dynamically in the js
let menu = document.getElementById("menu");
let icons = menu.querySelectorAll("i");
let navigationBar = document.getElementById("navigation");

menu.addEventListener("click", () => {
    let currentState = navigationBar.getAttribute("appear");
    if(currentState === "true"){
        icons[0].setAttribute("appear", "true");
        icons[1].setAttribute("appear", "false");
        navigationBar.setAttribute("appear", "true");
    }else{
        icons[0].setAttribute("appear", "false");
        icons[1].setAttribute("appear", "true");
        navigationBar.setAttribute("appear", "false"); 
    }
})

