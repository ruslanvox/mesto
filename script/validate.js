const validateOptions = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_inactive',
	inputErrorClass: 'popup__input-button_border-error',
	errorClass: 'popup__error_active'
}


function showInputError(formElement, inputElement, errorMessage, validateOptions) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add(validateOptions.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(validateOptions.errorClass);
};


function hideInputError(formElement, inputElement, validateOptions) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove(validateOptions.inputErrorClass);
	errorElement.classList.remove(validateOptions.errorClass);
	errorElement.textContent = '';
};


function inputValidity(formElement, inputElement, validateOptions) {
	console.log(inputElement.validity.valid);
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, validateOptions);
	} else {
		hideInputError(formElement, inputElement, validateOptions);
	}
};

function setEventListeners(formElement, validateOptions) {
	const inputList = Array.from(formElement.querySelectorAll(validateOptions.inputSelector));
	const buttonElement = formElement.querySelector(validateOptions.submitButtonSelector);
	handleFormInput(formElement, buttonElement, validateOptions.inactiveButtonClass);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			inputValidity(formElement, inputElement, validateOptions);
		});
	});
	formElement.addEventListener('input', () => handleFormInput(formElement, buttonElement, validateOptions.inactiveButtonClass));
};

function enableValidation(validateOptions) {
	const formList = Array.from(document.querySelectorAll(validateOptions.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formElement, validateOptions);
	});
};

function handleFormInput(formElement, submitButton, inactiveButtonClass) {
	const hasErrors = !formElement.checkValidity();
	submitButton.disabled = hasErrors;
	submitButton.classList.toggle(inactiveButtonClass, hasErrors);
}

enableValidation(validateOptions);
