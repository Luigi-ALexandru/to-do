import './styles.css';
import { createForm } from './form.js';

const dayBoxes = document.querySelectorAll(".day");

let currentDay = new Date();
let today = currentDay.getDate();

dayBoxes.forEach((dayBox) => {
    dayBox.addEventListener("click", function (event) {
        // Check if the target element is an input field, and return early if it is
        if (event.target.tagName.toLowerCase() === "input" || event.target.tagName.toLowerCase() === "textarea") {
            return;
        }

        if (Number(dayBox.textContent) < today) {
            dayBox.style.backgroundColor = `rgb(${244},${232},${165})`;
            return;
        }

        const existingForm = document.querySelector(".modal");
        if (existingForm) {
            existingForm.remove();
        }

        createForm(dayBox);

        const button = dayBox.querySelector(".btn");
        button.addEventListener("click", function (event) {
            
                event.preventDefault(); // Prevent form submission and page refresh
                event.stopPropagation(); // Prevent event bubbling to parent elements
    
                const input = event.target.closest(".modal").querySelector(".subject");
                const storage = input.value;
                
                if(storage === "") {
                    return;
                } else {
                    const contentDiv = document.createElement("div");
                contentDiv.classList.add("edit");
                contentDiv.textContent = storage;
                dayBox.appendChild(contentDiv); // Add the content to the current dayBox
    
                const fatherDiv = dayBox.querySelector(".modal");
                dayBox.removeChild(fatherDiv);
                }
        });
    });
});