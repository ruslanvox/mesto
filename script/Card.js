import {
  togglePopup,
  popupPic,
  popupPicName,
  popupContainer,
} from "./Popup.js";
export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._element = this._createCard();
  }

  get element() {
    return this._element;
  }
  _toggleLikeButton(evt) {
    evt.target.classList.toggle("element__like-button_active");
  }

  _toggleDeleteCard(evt) {
    evt.target.parentElement.remove();
  }
  _toggleImagePopup() {
    togglePopup(popupContainer);
    popupPic.src = this._link;
    popupPicName.textContent = this._name;
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        // делаем лайк активным
        this._toggleLikeButton(evt);
      });
    this._element
      .querySelector(".element__delete-icon")
      .addEventListener("click", (evt) => {
        // делаем активной иконку удаления
        this._toggleDeleteCard(evt);
      });
    this._element
      .querySelector(".element__pic")
      .addEventListener("click", () => {
        this._toggleImagePopup();
      });
  }

  _createCard() {
    const cardTemplate = document.querySelector(this._templateSelector).content; // забрали значения у созданного в HTML template
    const cardElement = cardTemplate.cloneNode(true); // клонируем template
    this._element = cardElement;
    cardElement.querySelector(".element__pic").src = this._link; // подставляем link, который будет вводить пользователь
    cardElement.querySelector(".element__title").textContent = this._name; // подставляем name, который будет вводить пользователь
    this._setEventListeners();
    return cardElement;
  }
}
