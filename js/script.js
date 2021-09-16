const basicBtn = document.getElementById('basic-btn');
const premiumBtn = document.getElementById('premium-btn');
basicBtn.addEventListener('click', function () {
    const basicHr = document.getElementById('basic-btn-hr');
    const premiumHr = document.getElementById('premium-btn-hr');
    basicHr.classList.add('active');
    premiumHr.classList.remove('active');
});
premiumBtn.addEventListener('click', function () {
    const basicHr = document.getElementById('basic-btn-hr');
    const premiumHr = document.getElementById('premium-btn-hr');
    premiumHr.classList.add('active');
    basicHr.classList.remove('active');
});