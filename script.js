document.addEventListener("DOMContentLoaded", () => {
    const targetLabel = document.querySelectorAll('.slider')
    targetLabel.forEach(el => el.addEventListener('click', () => {
        el.closest('.newsletter-item').classList.toggle('hidden')
    }))
})