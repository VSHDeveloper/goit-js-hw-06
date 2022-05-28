const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    caunterValue: document.querySelector('#value'),
};

let value = 0;

refs.decrement.addEventListener('click', () => {
    makeDecrement();
    updateValue();
});

refs.increment.addEventListener('click', () => {
    makeIncrement();
    updateValue();
});

function makeDecrement() {
    value -= 1;
}

function makeIncrement() {
    value += 1;
}

function updateValue() {
    refs.caunterValue.textContent = value;
}



