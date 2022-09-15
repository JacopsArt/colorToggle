const toggle = document.getElementById("hamburgerIcon");

const sidebar = document.getElementById("sidebar");

// open sidebar on hover
toggle.addEventListener("mouseover", function () {
  sidebar.style.left = "0px";
});

// color toggle change background
const btns = document.querySelectorAll("label");

btns.forEach((i) => {
  i.addEventListener("click", function () {
    let buttonStyle = getComputedStyle(this);
    let ButtonBgColor = buttonStyle["backgroundColor"];

    document.body.style.backgroundColor = ButtonBgColor;
  });
});

// hide sidebar after click
btns.forEach((i) => {
  i.addEventListener("click", function () {
    sidebar.style.left = "-300px";
  });
});
