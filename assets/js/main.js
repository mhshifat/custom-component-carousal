document.querySelectorAll(".container").forEach(item => {
  const container = item;
  const carousel = item.querySelector(".carousel");
  const lCon = item.querySelector(".controller-left");
  const rCon = item.querySelector(".controller-right");
  let direction = -1;

  lCon.addEventListener("click", previousCarousel);
  rCon.addEventListener("click", nextCarousel);

  setInterval(() => nextCarousel(), 2000);

  function previousCarousel() {
    if (direction === -1) {
      carousel.appendChild(carousel.firstElementChild);
      direction = 1;
    }
    container.style.justifyContent = "flex-end";
    carousel.style.transform = "translateX(20%)";
  }

  function nextCarousel() {
    if (direction === 1) {
      carousel.prepend(carousel.lastElementChild);
      direction = -1;
    }
    container.style.justifyContent = "flex-start";
    carousel.style.transform = "translateX(-20%)";
  }

  carousel.addEventListener("transitionend", function() {
    if (direction === -1) {
      carousel.appendChild(carousel.firstElementChild);
    } else {
      carousel.prepend(carousel.lastElementChild);
    }
    carousel.style.transition = "none";
    carousel.style.transform = "translateX(0%)";
    setTimeout(() => (carousel.style.transition = "all .4s ease-in-out"));
  });
});
