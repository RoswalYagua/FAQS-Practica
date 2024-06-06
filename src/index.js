const question = document.querySelectorAll('.question');
const activo = document.querySelectorAll('.question .active');
const inactivo = document.querySelectorAll('.question .inactive');
const answer = document.querySelectorAll('.answer');
const parrafo = document.querySelectorAll('.answer p');

let activeIndex = null; // Para rastrear el índice del elemento activo actual

for (let i = 0; i < question.length; i++) {
    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    inactivo[i].classList.add('hidden');

    question[i].addEventListener('click', () => {
        if (activeIndex !== null && activeIndex !== i) {
            // Si hay un elemento activo diferente y no es el mismo que el actual
            answer[activeIndex].style.height = '0';
            question[activeIndex].style.marginBottom = '0';
            question[activeIndex].classList.remove('listActive');
            question[activeIndex].classList.add('listInactive');
            activo[activeIndex].classList.remove('hidden');
            inactivo[activeIndex].classList.add('hidden');
            activeIndex = null; // Restablecer el índice activo actual
        }

        if (switchc === 0) {
            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = '10px';
            question[i].classList.add('listActive');
            question[i].classList.remove('listInactive');
            activo[i].classList.add('hidden');
            inactivo[i].classList.remove('hidden');
            switchc++;
            activeIndex = i; // Establecer el nuevo índice activo actual
        } else if (switchc === 1) {
            answer[i].style.height = '0';
            question[i].style.marginBottom = '0';
            question[i].classList.remove('listActive');
            question[i].classList.add('listInactive');
            activo[i].classList.remove('hidden');
            inactivo[i].classList.add('hidden');
            switchc--;
            activeIndex = null; // Restablecer el índice activo actual
        }
    });
}