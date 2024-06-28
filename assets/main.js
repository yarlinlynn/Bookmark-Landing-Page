//mobile nav menu

const navLinks = document.querySelectorAll(".nav_list");
const menuBtn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const overlay = document.querySelector(".overlay");


menuBtn.addEventListener("click", () => {
    const icon = document.querySelector(".menu_btn img");
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (menuBtn.classList.contains("active")) {
        icon.src = "assets/images/icon-close.svg";
    } else {
        icon.src = "assets/images/icon-hamburger.svg";
    }
});


//tabs button 

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-container]");
let [lastActiveTabBtn] = $tabBtn;

    $tabBtn.forEach(item =>{
        item.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const $tabContent = document.querySelector(`[data-tab-container="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this
    });
});


/* accordion button */ 

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accordion) => {
    accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});