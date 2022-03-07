const styleSwitcherToggle = document.querySelector('.style-switch-toggler');

styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
}); 

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else {
            style.setAttribute("disabled","true");
        }
    })
}

const dayNigth = document.querySelector(".day-night");
dayNigth.addEventListener("click", () => {
    dayNigth.querySelector("i").classList.toggle("fa-sun");
    dayNigth.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNigth.querySelector("i").classList.add("fa-sun");
    }else {
        dayNigth.querySelector("i").classList.add("fa-moon");
    }
});

//my

// scroll spy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav li a');

window.onscroll = () =>{

  if(window.scrollY > 0){
    document.querySelector('.home').classList.add('active');
  }else{
    document.querySelector('.home').classList.remove('active');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('.nav li a[href*='+id+']').classList.add('active');
      });
    };

  });

};

window.onload = () =>{
  if(window.scrollY > 0){
    document.querySelector('.home').classList.add('active');
  }else{
    document.querySelector('.home').classList.remove('active');
  }
}
