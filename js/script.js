const bottomHeader = document.getElementById("bottom-header");
const descriptionContainer = document.querySelector(".buy-description");
const descriptionContainerTop =
  descriptionContainer.getBoundingClientRect().top;
function toggleClassHeader() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > descriptionContainerTop) {
    bottomHeader.classList.add("active");
    bottomHeader.classList.remove("inactive");
  } else {
    bottomHeader.classList.remove("active");
    bottomHeader.classList.add("inactive");
  }
}
window.addEventListener("scroll", toggleClassHeader);
