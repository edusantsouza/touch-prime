//Header Toogle

const logoHeaderBlack = document.querySelector(".logotype");
const logoHeaderWhite = document.querySelector(".logotype-white");
const navegationItems = document.querySelectorAll(".navigation_item");
const navegationItemsAncor = document.querySelectorAll(".navigation_item a");

const controllerColor = () => {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 860) {
    logoHeaderBlack.classList.add("hidden");
    logoHeaderWhite.classList.add("visible");
    navegationItemsAncor.forEach((item) => {
      item.style = "color: white;";
    });
  } else if (scrollPosition < 860) {
    logoHeaderBlack.classList.remove("hidden");
    logoHeaderWhite.classList.remove("visible");
    navegationItemsAncor.forEach((item) => {
      item.style = "color: black;";
    });
  }
};

const scrollToSection = (id) => {
  let section = document.getElementById(`${id}`);
  section.scrollIntoView({
    behavior: "smooth",
  });
};

const selectHeaderItem = (e) => {
  e.preventDefault();
  navegationItemsAncor.forEach((item) => {
    item.classList.remove("navigation_selected");
  });
  scrollToSection(e.target.classList);
  e.target.classList.add("navigation_selected");
};

navegationItemsAncor.forEach((item) => {
  item.addEventListener("click", selectHeaderItem);
});
window.addEventListener("scroll", controllerColor);
