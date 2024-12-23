document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".explore-inner-card");
  const triggerHeight = window.innerHeight * 0.75;

  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition < triggerHeight) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
});
