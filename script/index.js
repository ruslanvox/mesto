import * as data from "./Popup.js";
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

initialCards.forEach((element) => {
  const name = element.name;
  const link = element.link;
  const templateSelector = "#cards-template";
  const temp = new Card(name, link, templateSelector);
  document.querySelector(".elements").prepend(temp.element);
});

//--------------------ДОБАВЛЕНИЕ КАРТОЧЕК--------------------------------

// Слушатели для редактирования карточки
data.userFormAdd.addEventListener("submit", submitUserCardHandler); // слушатель для создания новой карточки

//Константы для всплывающего окна EDIT

//Слушатели

data.formElement.addEventListener("submit", formSubmitHandler); // кнопка сохранить

data.profileEditButton.addEventListener("click", data.openClosePopupMenu); // запускаем функцию открыть меню ( при нажатии открывается меню)

data.editButtonClose.addEventListener("click", data.openClosePopupMenu); // запускаем функцию закрыть меню ( при нажатии закрывается меню)

data.cardButtonOpen.addEventListener("click", function () {
  data.togglePopup(data.popupAdd);
}); // запускаем функцию открыть меню добавления карточек

data.cardButtonClose.addEventListener("click", function () {
  data.togglePopup(data.popupAdd);
}); // запускаем функцию закрыть меню добавления карточек

data.popupPicCloseButton.addEventListener("click", function () {
  data.togglePopup(data.popupContainer);
});

document.addEventListener("mousedown", function (evt) {
  evt.target.classList.remove("popup_opened");
  evt.stopPropagation();
});

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

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  openClosePopupMenu();
}

function submitUserCardHandler(evt) {
  // функция-обработчик submit
  const titleInput = document.querySelector(".popup__input_add_name"); // обьявили константу для имени
  const picInput = document.querySelector(".popup__input_add_place"); // обьявили константу для ссылки
  const name = titleInput.value; // присвоили аргументу имени значение
  const link = picInput.value; // присвоили аргументу ссылки значение
  const templateSelector = "#cards-template";
  evt.preventDefault();
  titleInput.value = "";
  picInput.value = "";
  const temp = new Card(name, link, templateSelector);
  document.querySelector(".elements").prepend(temp.element);
  data.togglePopup(data.popupAdd); // при нажатии submit функция обработчик выполнит функцию закрыть меню модального окна
}
