// togglebutton

const toggleClass = function() {
  let menu = document.getElementsByClassName(".sideMenu");
  
  // Menu is closed if it doesn't have the ".opened" class
  // let menuIsClosed = !menu.classList.contains("opened") 

  // if (menuIsClosed) {
  //   menu.classList.add('opened');
  // } else {
  //   menu.classList.remove('opened');
  // }
}

let hamburger = document.querySelector(".hamburgerIcon");

hamburger.addEventListener("click", toggleClass);

// change backgroundcolor with eventlistener

let btns = document.getElementsByClassName("btn");
  
for (let i = 0; i < btns.length; i++) {
    
btns[i].addEventListener("click",function(){

let buttonStyle = getComputedStyle(this);
let ButtonBgColor = buttonStyle["backgroundColor"];
    
document.body.style.backgroundColor = ButtonBgColor; 
    });
}




