var hamburger = document.getElementById('hamburger');
hamburger.onclick = function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
};

var hamburger_2 = document.getElementById('hamburger-2');
hamburger_2.onclick = function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
};

var arrow_img = document.getElementById('arrow-img');
arrow_img.onclick = function() {
    var section = document.getElementById('section');
    section.classList.toggle('hidden');
    window.scrollTo(0,document.body.scrollHeight);
};