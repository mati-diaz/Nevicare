document.addEventListener('DOMContentLoaded', () => {
    locales();
});

// Locales
const locales = () => {
    const ubicaciones = document.querySelectorAll('.ubicacion');
    const tarjetas = document.querySelectorAll('.tarjeta');

    for(let i = 0; i < 6; i++) {
        ubicaciones[i].addEventListener('mouseover', () => {
            ubicaciones[i].classList.add('ubicacion-sel');
            tarjetas[i].classList.add('tarjeta-sel');
        })
        ubicaciones[i].addEventListener('mouseout', () => {
            ubicaciones[i].classList.remove('ubicacion-sel');
            tarjetas[i].classList.remove('tarjeta-sel');
        })
        tarjetas[i].addEventListener('mouseover', () => {
            ubicaciones[i].classList.add('ubicacion-sel');
            tarjetas[i].classList.add('tarjeta-sel');
        })
        tarjetas[i].addEventListener('mouseout', () => {
            ubicaciones[i].classList.remove('ubicacion-sel');
            tarjetas[i].classList.remove('tarjeta-sel');
        })
    }
}