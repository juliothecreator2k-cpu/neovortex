const imgShirt = document.getElementById('shirt-img');
const btnColors = document.querySelectorAll('.colors input[type="radio"]');

const imgByColor = {

    'b': 'img/black-shirt.jpg',
    'w': 'img/white-shirt.jpg',
    'purple': 'img/purple-shirt.jpg'
    
}

btnColors.forEach(btn => {
    btn.addEventListener('change', (event) => {
        const selectedColor = event.target.value;

        imgShirt.classList.remove('fade-in');
        void imgShirt.offsetWidth
        imgShirt.src = imgByColor[selectedColor];
        imgShirt.classList.add('fade-in');
    });
});


const btnToggleSidebar = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('#main-nav');

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
});