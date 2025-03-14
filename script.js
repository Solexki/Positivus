const toggelBtn = document.querySelectorAll(".list-items");
console.log("this is ta", toggelBtn);

toggelBtn.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    console.log("parents", this.parentElement.classList);

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
