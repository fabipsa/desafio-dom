// Selecciona los elementos de los controles deslizantes y los elementos que mostrarán los valores
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

// Función para actualizar el color de fondo
function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Actualiza el color de fondo de la página
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    // Actualiza los valores mostrados
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

// Agrega un evento para cada control deslizante
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);
