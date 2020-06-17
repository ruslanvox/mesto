const arg = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_inactive',
	inputErrorClass: 'popup__input-button_border-error',
	errorClass: '.popup__error_active'
}

// Вывод ошибки______________________________________________________________
function showInputError(formElement, inputElement, errorMessage, arg) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add(arg.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(arg.errorClass);
};

// Скрытие ошибки______________________________________________________________
function hideInputError(formElement, inputElement, arg) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove(arg.inputErrorClass);
	errorElement.classList.remove(arg.errorClass);
	errorElement.textContent = '';
};

// Функция валидации полей_____________________________________________________
function inputValidity(formElement, inputElement, arg) {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, arg);
	} else {
		hideInputError(formElement, inputElement, arg);
	}
};
function setEventListeners(formElement, arg) {
	const inputList = Array.from(formElement.querySelectorAll(arg.inputSelector));
	const buttonElement = formElement.querySelector(arg.submitButtonSelector);
	handleFormInput(formElement, buttonElement, arg.inactiveButtonClass);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			inputValidity(formElement, inputElement, arg);
		});
	});
	formElement.addEventListener('input', () => handleFormInput(formElement, buttonElement, arg.inactiveButtonClass));
};

function enableValidation(arg) {
	const formList = Array.from(document.querySelectorAll(arg.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formElement, arg);
	});
};

function handleFormInput(formElement, submitButton, inactiveButtonClass) {
	const hasErrors = !formElement.checkValidity();
	submitButton.disabled = hasErrors;
	submitButton.classList.toggle(inactiveButtonClass, hasErrors);
}

enableValidation(arg);
