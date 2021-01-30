const arrowsRight = document.querySelectorAll('.arrow-right');
const arrowsLeft = document.querySelectorAll('.arrow-left');

const links = document.querySelectorAll('.projects__link');


links.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
       arrowsRight[i].classList.add('hovered');
       arrowsLeft[i].classList.add('hovered');
    })
})


links.forEach((item, i) => {
    item.addEventListener('mouseleave', () => {
       arrowsRight[i].classList.remove('hovered');
       arrowsLeft[i].classList.remove('hovered');
    })
})