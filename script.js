let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let curentWordIndex = 0;
let maxWordINdex = words.length -1;
words[curentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let curentWord = words[curentWordIndex];
    let nextword = curentWordIndex === maxWordINdex ? words[0] : words[curentWordIndex + 1];

    Array.from(curentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    curentWordIndex = curentWordIndex === maxWordINdex ? 0 : curentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)


////////sticky navlist////////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);







const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


////hamburger form/////////////////////////////////////////////////////

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li'); document.querySelectorAll('.menu li');

let isMenuOpen = false;

burger.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  menu.classList.add('open');
  document.body.classList.add('menu-open');
  isMenuOpen = true;
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  isMenuOpen = false;
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    closeMenu();
  });

});

///////////////////////////////////////////////////////////////////
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('show');
  menuItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `menuItemFadeIn 0.2s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});


//////////////////////////////////////////////////////////////////

setTimeout(function() {
  var span = document.getElementById("mySpan");
  span.innerHTML = "tony";
}, 2000);