const fixedHeader = document.querySelector(".j_fixed_header");
const headline = document.querySelector(".j_headline");

// TOGGLE FIXED HEADER
window.onscroll = () => {
    if (window.scrollY > 0) {
        fixedHeader.style.backgroundColor = "black";
        fixedHeader.style.padding = "10px 0";
    } else {
        fixedHeader.style.backgroundColor = "";
        fixedHeader.style.padding = "";
    }
}