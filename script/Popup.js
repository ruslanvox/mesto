export const popupContainer = document.querySelector(".popup_pic");
export const popupPic = document.querySelector(".popup__image");
export const popupPicName = document.querySelector(".popup__name");
export const popupPicCloseButton = document.querySelector(
  ".popup__close_image"
);

export const userFormAdd = document.querySelector(".popup__content_add_card");

export const popup = document.querySelector(".popup_profile"); // забрали значения для добавления модификатора к popup
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
); // забрали значения для открытия попап

//Константа для закрытия окна EDIT

export const editButtonClose = document.querySelector(".popup__close_profile"); // забрали значения для закрытия попап

//Константы для всплывающего окна ADD

export const popupAdd = document.querySelector(".popup_card"); // забрали значения для добавления модификатора к popup-add
export const cardButtonOpen = document.querySelector(".profile__add-button"); // забрали значения для открытия окна добавления карточки

//Константа для закрытия окна ADD

export const cardButtonClose = document.querySelector(".popup__close_add_card"); // забрали значения для закрытия окна добавления карточки

// Функция открытия и закрытия окна добавления карточки

export function togglePopup(somePopup) {
  somePopup.classList.toggle("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//Переменные для редактирования всплывающего окна

export const formElement = document.querySelector(".popup__content_profile"); // забрали значения для добавления данных в форму
export const profileName = document.querySelector(".profile__title-text"); // забрали значения для изменения данных в имени пользователя
export const profileOccupation = document.querySelector(
  ".profile__subtitle-text"
); // забрали значения для изменения данных в occupation пользователя
export const nameInput = document.querySelector(".popup__input_edit-name"); // забрали значения для новых данных имени пользователя
export const jobInput = document.querySelector(".popup__input_edit-about"); // забрали значения для новой occupation пользователя

//Функция появления и убирания всплывающего меню

export function openClosePopupMenu() {
  togglePopup(popup); // добавляем либо убираем модификатор класса popup, чтобы открылось всплываюбщее меню
  if (popup.classList.contains("popup_opened")) {
    // условие - если класс содержит модификатор - то подставить в форму значения имени пользователя и рода занятий в форму при загрузке формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    document.addEventListener("keydown", closeByEsc);
  }
}

//Обработчик отправки формы - при нажатии submit поставить введенные значения имени пользователя и рода занятий в данные пользователя.

export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc);
  }
}
