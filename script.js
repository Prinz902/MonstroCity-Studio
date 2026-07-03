const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener ("click",function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "&#10005"; }
        else {
            menuToggle.innerHTML = "&#9776;";
        }

    }
);


/*scroll animation*/
const reveals=
document.querySelectorAll(".reveal");
window.addEventListener("scroll", function()
{
    reveals.forEach(function (section)
    {
        const windowHeight = window.innerHeight;

        const sectionTop = 
        section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    }
);
}
);

const links =
document.querySelectorAll(".nav-links a");

links.forEach(function(link) { 

link.addEventListener("click", function() {;

navLinks.classList.remove("active");
menyToggle.innerHtml = "&#9776;";
});
});

const sections=
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function(section){
        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop - 150 ) {

            current = 
            section.getAttribute("id");


        }
    }
);

navItems.forEach(function(link){

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + 
current ){
    link.classList.add("active");
}
});
});

/* About Stats*/
const counters =
document.querySelectorAll(".counter");

counters.forEach(function(counter){

    const target =
    Number(counter.dataset.target);

    let count= 0;
    const updateCounter = function(){

        if(count < target){
            count++;

            counter.textContent = count;
            setTimeout(updateCounter, 80);
        }
    };
    updateCounter();
}
);

/*preloader section*/

window.addEventListener("load", function(){

    const preloader = 
    document.getElementById("preloader");

    const hero =
    document.querySelector(".hero-content");

    setTimeout(function(){
        preloader.classList.add("hide");
        hero.classList.add("hero-animation")
    },1500);
});




/*Hero anime text*/
const words1 = [
    "We Build",
    "We Design",
    "We Create",
    "We Develop"
]

const words2 = [
    "Businesses",
    "Restaurants",
    "Hotels",
    "Travel Agencies"
];

const typing1 =
document.getElementById("typing1");
const typing2 =
document.getElementById("typing2");

let index = 0;

function changeWords( ){
    typing1.textContent = words1[index];
    typing2.textContent = words2[index];

    index++;

    if (index >= words1.length) {
        index = 0;
    }
}

//Force the browser to restart the animation

void typing1.offsetWidth;
void typing2.offsetWidth;

typing1.classList.add("fade");
typing2.classList.add("fade");

index = (index + 1) % words1.length;


changeWords();
setInterval(changeWords, 3000);




/*
const modal =
document.querySelector(".modal");

const openModal =
document.querySelector(".open-modal");

const closeModal =
document.querySelector(".close");


openModal.addEventListener("click", function(e) {

    e.preventDefault();

    modal.computedStyleMap.display = "flex";
}
);

closeModal.addEventListener("click", function(){

    modal.computedStyleMap.display = "none"
}
);

window.addEventListener("click", function(e){

    if(e.target === modal) {

        modal.computedStyleMap.display = "none";
    }
}
);
*/

const openButtons =
document.querySelectorAll(".open-modal");

openButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        modal.style.display = "flex";
    }
);
}
);




    
























/*Hero anime text

const words = [
    "Build",
    "Design",
    "Create",
    "Develop"
];

let wordIndex = 0;

const typing =
document.getElementById("typing");

function changeWord(){
    typing.textContent = words[wordIndex];
    wordIndex++;

    if(wordIndex >= words.length){

        wordIndex = 0;
    }
}

changeWord();
setInterval(changeWord,2000);
*/

