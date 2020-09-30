import * as data from "./Utils.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Карточки, загружаемые по умолчанию
const templateSelector = "#cards-template";
const elementsContainer = document.querySelector(".elements");

initialCards.forEach((element) => {
  const name = element.name;
  const link = element.link;
  const temp = new Card(name, link, templateSelector);
  elementsContainer.prepend(temp.element);
});

data.userFormAdd.addEventListener("submit", submitUserCardHandler);

//Слушатели

data.profileForm.addEventListener("submit", profileFormSubmitHandler);

data.profileEditButton.addEventListener("click", () => {
  data.openPopup(data.popupProfile);
  data.nameInput.value = data.profileName.textContent;
  data.jobInput.value = data.profileOccupation.textContent;
});

data.editButtonClose.addEventListener("click", () => {
  data.closePopup(data.popupProfile);
  data.nameInput.textContent = data.profileName.value;
  data.jobInput.textContent = data.profileOccupation.value;
});

data.cardButtonOpen.addEventListener("click", function () {
  data.openPopup(data.popupAdd);
  titleInput.value = "";
  picInput.value = "";
});

data.cardButtonClose.addEventListener("click", function () {
  data.closePopup(data.popupAdd);
});

data.popupPicCloseButton.addEventListener("click", function () {
  data.closePopup(data.popupContainer);
});

document.addEventListener("mousedown", function (evt) {
  evt.target.classList.remove("popup_opened");
  evt.stopPropagation();
});

// Валидация

const validateOptions = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input-button_border-error",
  errorClass: "popup__error_active",
};

const validateEditProfile = new FormValidator(
  validateOptions,
  ".popup__form_profile"
);

const validateAddCard = new FormValidator(
  validateOptions,
  ".popup__form_add_card"
);

validateEditProfile.enableValidation();
validateAddCard.enableValidation();

function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  data.profileName.textContent = data.nameInput.value;
  data.profileOccupation.textContent = data.jobInput.value;
  data.closePopup(data.popupProfile);
}

const titleInput = document.querySelector(".popup__input_add_name");
const picInput = document.querySelector(".popup__input_add_place");

function submitUserCardHandler(evt) {
  const name = titleInput.value;
  const link = picInput.value;
  evt.preventDefault();

  const temp = new Card(name, link, templateSelector);
  document.querySelector(".elements").prepend(temp.element);
  data.closePopup(data.popupAdd);
}
