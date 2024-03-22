//Header Toggle

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

//Mobile menu

const openMenuBtn = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");
const closeMenuBtn = document.querySelector(".close_mobile_menu");
const navegationItemsMobile = document.querySelectorAll(
  ".navigation_item_mobile",
);

const openMenu = () => {
  !mobileMenu.classList.contains("visible")
    ? mobileMenu.classList.add("visible")
    : null;
};

const closeMenu = () => {
  mobileMenu.classList.contains("visible")
    ? mobileMenu.classList.remove("visible")
    : null;
};

navegationItemsMobile.forEach((item) => {
  item.addEventListener("click", closeMenu);
});
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

//Testimonials scrollbar

const scrollableDiv = document.getElementById("testimonials_list");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

scrollLeftButton.addEventListener("click", function () {
  scrollableDiv.scrollBy({
    left: -390,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", function () {
  scrollableDiv.scrollBy({
    left: 390,
    behavior: "smooth",
  });
});

//Hero Slider
const scrollableWrapper = document.getElementById("gallery_hero_mobile");
const contents = document.querySelectorAll(".content");
let currentIndex = 0;

function scrollAutomatically() {
  currentIndex++;
  if (currentIndex === contents.length) {
    currentIndex = 0;
  }
  const contentWidth = contents[currentIndex].offsetLeft;
  const currentScroll = scrollableWrapper.scrollLeft;
  const increment = (contentWidth - currentScroll) / 20; // Ajuste o valor para alterar a velocidade do deslizamento
  let counter = 0;
  const scrollInterval = setInterval(function () {
    if (counter < 20) {
      scrollableWrapper.scrollLeft += increment;
      counter++;
    } else {
      clearInterval(scrollInterval);
    }
  }, 20); // Ajuste o intervalo para alterar a suavidade do deslizamento
}

setInterval(scrollAutomatically, 3000);
