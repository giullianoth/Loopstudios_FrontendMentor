const fixedHeader = document.querySelector(".j_fixed_header");
const mobileMenu = document.querySelector(".j_mobile_menu");
const mobileMenuIcon = document.querySelector(".j_mobile_menu_icon");

// TOGGLE FIXED HEADER
window.onscroll = () => {
    fixedHeader.style.backgroundColor = window.scrollY > 0 ? "black" : "";
    fixedHeader.style.padding = window.scrollY > 0 ? "10px 0" : "";
}

// MOBILE MENU
mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.style.left = mobileMenu.offsetLeft !== 0 ? 0 : "";

    mobileMenuIcon.style.transform = "translateY(-100%)";
    mobileMenuIcon.style.opacity = 0;

    setTimeout(() => {
        mobileMenuIcon.classList.toggle("fa-bars");
        mobileMenuIcon.classList.toggle("fa-xmark");

        mobileMenuIcon.style.transform = "";
        mobileMenuIcon.style.opacity = "";
    }, 300);
})