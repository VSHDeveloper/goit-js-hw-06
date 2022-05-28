const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener('input', onInput);

function onInput(e) {
    refs.nameOutput.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        refs.nameOutput.textContent = "Anonymous";
    }
}

