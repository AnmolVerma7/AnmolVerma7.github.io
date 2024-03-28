const boxes = document.querySelectorAll('.project-box')

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const  triggerBottom = window.innerHeight / 5 * 3.5;
    boxes.forEach((pBox) => {
        const boxTop = pBox.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            pBox.classList.add('show');
        } else {
            pBox.classList.remove('show');
        }
    });
}