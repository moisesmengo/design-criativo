document.querySelectorAll(".stoty-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");

    btn.nextElementSibling.classList.toggle("change");
  });
});
