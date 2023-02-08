const items = document.querySelectorAll('.item')
window.addEventListener('scroll', checkItems)

function checkItems() {
    const triggerBottom = window.innerHeight
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top
        if (itemTop < triggerBottom) {
            item.classList.add('show')
        }
    })
}