
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');
const input = document.getElementById('registrationForm');
const savedNameElement = document.getElementById('savedName');


const localStorageKey = 'registrationForm-memory';


const loadSavedName = function () {
    const savedName = localStorage.getItem(localStorageKey);
    if (savedName) {
        savedNameElement.textContent = `Nome salvato: ${savedName}`;
    } else {
        savedNameElement.textContent = 'Nessun nome salvato';
    }
};


const save = function () {
    const registrationFormContent = input.value;
    if (registrationFormContent) {

        localStorage.setItem(localStorageKey, registrationFormContent);

        savedNameElement.textContent = `Nome salvato: ${registrationFormContent}`;
    }
};


const reset = function () {

    input.value = '';

    localStorage.removeItem(localStorageKey);

    savedNameElement.textContent = 'Nessun nome salvato';
};


saveButton.addEventListener('click', save);
resetButton.addEventListener('click', reset);


loadSavedName();
