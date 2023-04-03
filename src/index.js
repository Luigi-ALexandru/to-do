import "./styles.css";
import { createForm, removeForm } from "./form.js";

const dayBoxes = document.querySelectorAll(".day");

let currentDay = new Date();
let today = currentDay.getDate();

dayBoxes.forEach((dayBox) => {
    if (isPastDay(dayBox)) {
        dayBox.style.backgroundColor = "grey";
        dayBox.style.cursor = "not-allowed";
        return;
      }
  dayBox.addEventListener("click", function (event) {
    // Check if the target element is an input field, and return early if it is
    if (
      event.target.tagName.toLowerCase() === "input" ||
      event.target.tagName.toLowerCase() === "textarea" ||
      event.target.classList.contains("edit")
    ) {
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

      const form = event.target.closest(".modal");
    const input = form.querySelector(".subject");
    const input2 = form.querySelector("input[type='text']:nth-child(2)");
    const tarea = form.querySelector("textarea");
      const fatherDiv = dayBox.querySelector(".modal");
      const storage = input.value;

      if (storage === "") {
        return;
      } else {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("edit");
        contentDiv.textContent = storage;
        contentDiv.dataset.date = input2.value;
        contentDiv.dataset.description = tarea.value;
        dayBox.appendChild(contentDiv); // Add the content to the current dayBox
        dayBox.removeChild(fatherDiv);

        // Add event listener to the new .edit element
        contentDiv.addEventListener("click", function (event) {
          event.stopPropagation(); // Stop event bubbling up to dayBox
          showNoteDetails(contentDiv);
        });
      }
    });

    const button2 = dayBox.querySelector(".btn2");
    button2.addEventListener("click", function (event) {
      event.stopPropagation();
      removeForm(dayBox);
    });
  });
});

function showNoteDetails(editElement) {
    const title = editElement.textContent;
    const date = editElement.dataset.date;
    const description = editElement.dataset.description;
  
    const noteDetails = document.createElement("div");
    noteDetails.classList.add("note-details");
    noteDetails.innerHTML = `
        <h2>${title}</h2>
        <p>Date: ${date}</p>
        <p>${description}</p>
        <button class="close-note">Close</button>
    `;
    editElement.parentElement.appendChild(noteDetails);
  
    noteDetails.querySelector(".close-note").addEventListener("click", function (event) {
      event.stopPropagation(); // Stop event from bubbling up to the dayBox
      noteDetails.remove();
    });
  }

  function isPastDay(dayBox) {
    const currentYear = currentDay.getFullYear();
    const currentMonth = currentDay.getMonth();
    const dayBoxDay = parseInt(dayBox.textContent, 10);
  
    if (currentMonth > 3 || currentYear > 2023) {
      return true;
    }
  
    if (currentMonth === 3 && dayBoxDay < today) {
      return true;
    }
  
    return false;
  }