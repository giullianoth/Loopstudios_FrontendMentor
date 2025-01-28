const fixedHeader = document.querySelector(".j_fixed_header")
const arrowUp = document.querySelector(".j_arrow_up")
const mobileMenu = document.querySelector(".j_mobile_menu")
const mobileMenuIcon = document.querySelector(".j_mobile_menu_icon")

// TOGGLE FIXED HEADER
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        fixedHeader.classList.add("scrolling")
        arrowUp.classList.add("visible")
    } else {
        fixedHeader.classList.remove("scrolling")
        arrowUp.classList.remove("visible")
    }
})

// SCROLL UP WITH ARROW
arrowUp.addEventListener("click", () => window.scrollTo(0, 0))

// MOBILE MENU
mobileMenuIcon.addEventListener("click", () => {
    let icon = mobileMenuIcon.querySelector("img")

    mobileMenu.classList.toggle("open")
    mobileMenuIcon.style.transform = "translateY(-100%)"
    mobileMenuIcon.style.opacity = 0

    setTimeout(() => {
        icon.src = `/assets/images/icon-${mobileMenu.offsetLeft === 0 ? "close" : "hamburger"}.svg`
        mobileMenuIcon.style.transform = ""
        mobileMenuIcon.style.opacity = ""
    }, 300);    
})