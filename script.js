
function toggleMode() {
    const html = document.documentElement;

// if (html.classList.contains('light')) {
//     html.classList.remove('light');
// } else {
//     html.classList.add('light');
// }

    html.classList.toggle('light'); // toggle e um metodo que adiciona ou remove uma classe, sem a necessidade de um if else'

    const img = document.querySelector('#profile img');

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Avatar light mode');
        console.log(img.getAttribute('alt'));
    } else {
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Avatar dark mode');
        console.log(img.getAttribute('alt'));
    }

}