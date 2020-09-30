export const popupContainer = document.querySelector(".popup_pic");
export const popupPic = document.querySelector(".popup__image");
export const popupPicName = document.querySelector(".popup__name");
export const popupPicCloseButton = document.querySelector(
  ".popup__close_image"
);

export const userFormAdd = document.querySelector(".popup__content_add_card");

export const popup = document.querySelector(".popup_profile");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);

export const editButtonClose = document.querySelector(".popup__close_profile");
export const popupAdd = document.querySelector(".popup_card");
export const cardButtonOpen = document.querySelector(".profile__add-button");
export const cardButtonClose = document.querySelector(".popup__close_add_card");

// Функция открытия и закрытия окна добавления карточки

export function togglePopup(somePopup) {
  somePopup.classList.toggle("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//Переменные для редактирования всплывающего окна

export const formElement = document.querySelector(".popup__content_profile");
export const profileName = document.querySelector(".profile__title-text");
export const profileOccupation = document.querySelector(
  ".profile__subtitle-text"
);
export const nameInput = document.querySelector(".popup__input_edit-name");
export const jobInput = document.querySelector(".popup__input_edit-about");

//Функция появления и убирания всплывающего меню

export function openClosePopupMenu() {
  togglePopup(popup);
  if (popup.classList.contains("popup_opened")) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    document.addEventListener("keydown", closeByEsc);
  }
}

export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc);
  }
}
