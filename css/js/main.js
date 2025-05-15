document.addEventListener('DOMContentLoaded', () => {
  console.log("Página cargada");
});

function animateCard(card) {
  card.style.transform = 'scale(1.05)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 200);
}
