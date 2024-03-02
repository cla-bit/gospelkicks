const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    cards.forEach((card) => {
        const cardTitle = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = cardTitle.includes(searchTerm) ? "block" : "none";
    });
});
