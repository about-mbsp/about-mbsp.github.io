function showBenefits() {
    const benefitsSection = document.getElementById('benefits');
    benefitsSection.scrollIntoView({ behavior: 'smooth' });
}

function subscribe() {
    window.location.href = "https://mbspshop.wixsite.com/net-pl/order-prime";
}

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
    
    // Sprawdzenie, czy odpowiedź jest widoczna; jeśli tak, ukrywa ją, jeśli nie - pokazuje
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function toggleMenu() {
    const navMenu = document.querySelector('.navbar ul');
    navMenu.classList.toggle('show');
}

