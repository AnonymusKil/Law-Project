
console.log("GM");

const displaySearch = document.getElementById("displayDynamic");
const searchBTN = document.getElementById("searchC");
const cards = document.querySelectorAll(".first-Card"); // Select all cards
const prevButton = document.querySelector(".page-btn-1"); // Previous button
const nextButton = document.querySelector(".go-Front"); // Next button

// Create a close button dynamically
const closeBtn = document.createElement("i");
closeBtn.className = "fa-solid fa-xmark close-btn";
displaySearch.appendChild(closeBtn);

function displaySearchBar() {
  displaySearch.classList.add("show");
}

function closeSearchBar() {
  displaySearch.classList.remove("show");
}

searchBTN.addEventListener("click", displaySearchBar);
closeBtn.addEventListener("click", closeSearchBar);


let currentSlide = 1; 


function showBanner(cana) {
  cards.forEach((card) => {
    if (parseInt(card.dataset.cana) === cana) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}
// setInterval(() => {
// currentSlide = currentSlide < cards.length ? currentSlide + 1 : 1;
// }, 1000)
// function startAutoSlide() {
//   autoSlideInterval = setInterval(prevButton,1000)
// }
prevButton.addEventListener("click", () => {
  currentSlide = currentSlide === 1 ? cards.length : currentSlide - 1; // Go to last card if at the first
  showBanner(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide === cards.length ? 1 : currentSlide + 1; // Go to first card if at the last
  showBanner(currentSlide);
});
function startAutoSlide(params) {
  setInterval(() => { 
    currentSlide = currentSlide === cards.length ? 1 : currentSlide + 1;
    showBanner(currentSlide);
  },1000)
}
// Initially show the first card
showBanner(currentSlide);
// startAutoSlide()