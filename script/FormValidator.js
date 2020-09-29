export class FormValidator {
  constructor(validateOptions, formSelector) {
    this._validateOptions = validateOptions;
    this._formSelector = formSelector;
  }
  _showInputError(formElement, inputElement, errorMessage, validateOptions) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validateOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateOptions.errorClass);
  }

  _hideInputError(formElement, inputElement, validateOptions) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validateOptions.inputErrorClass);
    errorElement.classList.remove(validateOptions.errorClass);
    errorElement.textContent = "";
  }

  _inputValidity(formElement, inputElement, validateOptions) {
    console.log(inputElement.validity.valid);
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        validateOptions
      );
    } else {
      this._hideInputError(formElement, inputElement, validateOptions);
    }
  }

  _setEventListeners(formElement, validateOptions) {
    const inputList = Array.from(
      formElement.querySelectorAll(validateOptions.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validateOptions.submitButtonSelector
    );
    this._handleFormInput(
      formElement,
      buttonElement,
      validateOptions.inactiveButtonClass
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputValidity(formElement, inputElement, validateOptions);
      });
    });
    formElement.addEventListener("input", () =>
      this._handleFormInput(
        formElement,
        buttonElement,
        validateOptions.inactiveButtonClass
      )
    );
  }

  enableValidation() {
    const formElement = document.querySelector(this._formSelector);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(formElement, this._validateOptions);
  }

  _handleFormInput(formElement, submitButton, inactiveButtonClass) {
    const hasErrors = !formElement.checkValidity();
    submitButton.disabled = hasErrors;
    submitButton.classList.toggle(inactiveButtonClass, hasErrors);
  }
}
