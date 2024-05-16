function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`${page}-page`).classList.remove('hidden');
}

function navigateBack() {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById('main-page').classList.remove('hidden');
}
