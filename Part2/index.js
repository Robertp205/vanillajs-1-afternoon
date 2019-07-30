

let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

const setCard = () => {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
};