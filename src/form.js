//create form
function createForm(dayBox) {
    const fatherDiv = document.createElement("div");
    fatherDiv.classList.add("modal");
    const form = document.createElement("form");
    fatherDiv.appendChild(form);
    const formTitle = document.createElement("h2");
    formTitle.textContent = "To-Do";
    form.appendChild(formTitle);
    const div = document.createElement("div");
    form.appendChild(div);
    div.style.display = "flex";
    div.style.flexDirection = "column";
    const input = document.createElement("input");
    input.setAttribute("class", "subject");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Subject");
    div.appendChild(input);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Date");
    div.appendChild(input2);
    const span = document.createElement("span");
    span.textContent = "What to do...";
    form.appendChild(span);
    const div2 = document.createElement("div");
    form.appendChild(div2);
    const tarea = document.createElement("textarea");
    tarea.setAttribute("rows", "4");
    tarea.style.padding = "5px";
    div2.appendChild(tarea);
    const button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("type", "submit");
    button.textContent = "Create";
    form.appendChild(button);

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission and page refresh
        event.stopPropagation(); // Prevent event bubbling to parent elements

        const storage = input.value;

        const contentDiv = document.createElement("div");
        contentDiv.textContent = storage;
        dayBox.appendChild(contentDiv);
        dayBox.removeChild(fatherDiv);
    });

    dayBox.appendChild(fatherDiv);

    let popUp = document.querySelector(".modal");
    popUp.style.display = "flex";
    popUp.style.flexDirection = "column";
}

export {
    createForm
}