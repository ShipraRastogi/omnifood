///////////////////////////////////////////////////////////
// KEEPING YEAR UP TO DATE IN THE FOOTER
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ////////////////////////////////////////////////////////
/////// MOBILE NAVIGATION //////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION/////////////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // SCROLL BACK TO TOP
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //  SCROLL TO OTHER LINKS
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // CLOSE MOBILE NAVIGATION
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// ///////////////////////////////////////////
/// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-65px",
  }
);
obs.observe(sectionHeroEl);

// ////////////////////////////////////////////////
// /// FIXING FLEXBOX gap property missing in some safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// ////////////////////////////////////////////////
// /////
