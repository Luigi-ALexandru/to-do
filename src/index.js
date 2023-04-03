import './styles.css';
import { createForm } from './form.js';

const dayBoxes = document.querySelectorAll(".day");

let currentDay = new Date();
let today = currentDay.getDate();

dayBoxes.forEach((dayBox) => {
    if(Number(dayBox.textContent) < today) {
        dayBox.style.backgroundColor = `rgb(${244},${232},${165})`;
        dayBox.addEventListener("click", function(){
            return;
        })
    } else {
        dayBox.addEventListener("click", function () {
            createForm(dayBox);
        });
    }
})
