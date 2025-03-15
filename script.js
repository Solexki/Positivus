const toggelBtn = document.querySelectorAll(".list-items");


toggelBtn.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    if (!this.parentElement.classList.contains("extend-work-process")) {
      this.querySelector("i").classList.replace("fa-plus", "fa-minus");
      this.parentElement.classList.toggle("extend-work-process");
    }
  });
  btn.addEventListener("mouseleave", function () {
    if (this.parentElement.classList.contains("extend-work-process")) {
      this.querySelector("i").classList.replace("fa-minus", "fa-plus");
      this.parentElement.classList.remove("extend-work-process");
    }
  });

  btn.addEventListener("click", function () {
    this.parentElement.classList.toggle("extend-work-process");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonies-slider");
  const slides = document.querySelectorAll(".testimonies");
  const prevButton = document.querySelector(".fa-arrow-left");
  const nextButton = document.querySelector(".fa-arrow-right");
  const navigator = document.querySelectorAll(".diomond-indicator");

  let activeIndex = 1;

  function updateSlidePosition() {
    const translateValue = -activeIndex * (slides[0].offsetWidth + 40); // Slide width + gap
    slider.style.transform = `translateX(${translateValue}px)`;

    prevButton.parentElement.classList.toggle("disabled", activeIndex === 0);
    nextButton.parentElement.classList.toggle(
      "disabled",
      activeIndex === slides.length - 1
    );

    navigator.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === activeIndex);
    });
  }
  nextButton.addEventListener("click", function () {
    if (activeIndex < slides.length - 1) {
      activeIndex++;
    }
    updateSlidePosition();
  });

  prevButton.addEventListener("click", function () {
    if (activeIndex > 0) {
      activeIndex--;
    }
    updateSlidePosition();
  });

  updateSlidePosition(); // Initialize position on load
});
