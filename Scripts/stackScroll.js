const boxes = document.querySelectorAll('.projectBox')

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const  triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((pBox) => {
        const boxTop = pBox.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            pBox.classList.add('show');
        } else {
            pBox.classList.remove('show');
        }
    });
}