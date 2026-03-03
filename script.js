// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// Demo Add to Cart Alert
document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart (Demo Only)");
    });
});