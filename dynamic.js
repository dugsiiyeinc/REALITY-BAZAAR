// selec all element from the html page to change it dynamically in the js
let menu = document.getElementById("menu");
let icons = menu.querySelectorAll("i");
let navigationBar = document.getElementById("navigation");
// program starts whene ever user clicks the menu burger, either bars or close icons//

menu.addEventListener("click", ()=> {
    // every time user clicked the menu element run this function//
    let currentState = navigationBar.getAttribute("appear");
    // do checking//
    if(currentState === "true"){
        icons[0].setAttribute("appear", "true");
        icons[1].setAttribute("appear", "false");
        navigationBar.setAttribute("appear", "false");

    }else{
        icons[0].setAttribute("appear", "false");
        icons[1].setAttribute("appear", "true");
        navigationBar.setAttribute("appear", "true");
    }
})

