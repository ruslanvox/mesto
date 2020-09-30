export class FormValidator {
  constructor(validateOptions, formSelector) {
    this._validateOptions = validateOptions;
    this._formSelector = formSelector;
  }
  _showInputError(profileForm, inputElement, errorMessage, validateOptions) {
    const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validateOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateOptions.errorClass);
  }

  _hideInputError(profileForm, inputElement, validateOptions) {
    const errorElement = profileForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validateOptions.inputErrorClass);
    errorElement.classList.remove(validateOptions.errorClass);
    errorElement.textContent = "";
  }

  _inputValidity(profileForm, inputElement, validateOptions) {
    console.log(inputElement.validity.valid);
    if (!inputElement.validity.valid) {
      this._showInputError(
        profileForm,
        inputElement,
        inputElement.validationMessage,
        validateOptions
      );
    } else {
      this._hideInputError(profileForm, inputElement, validateOptions);
    }
  }

  _setEventListeners(profileForm, validateOptions) {
    const inputList = Array.from(
      profileForm.querySelectorAll(validateOptions.inputSelector)
    );
    const buttonElement = profileForm.querySelector(
      validateOptions.submitButtonSelector
    );
    this._handleFormInput(
      profileForm,
      buttonElement,
      validateOptions.inactiveButtonClass
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputValidity(profileForm, inputElement, validateOptions);
      });
    });
    profileForm.addEventListener("input", () =>
      this._handleFormInput(
        profileForm,
        buttonElement,
        validateOptions.inactiveButtonClass
      )
    );
  }

  enableValidation() {
    const profileForm = document.querySelector(this._formSelector);
    profileForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(profileForm, this._validateOptions);
  }

  _handleFormInput(profileForm, submitButton, inactiveButtonClass) {
    const hasErrors = !profileForm.checkValidity();
    submitButton.disabled = hasErrors;
    submitButton.classList.toggle(inactiveButtonClass, hasErrors);
  }
}
