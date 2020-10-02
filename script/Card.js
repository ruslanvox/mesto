import {
  openPopup,
  userFormAdd,
  popupPic,
  popupPicName,
  popupContainer,
} from "./Utils.js";
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
  _toggleLikeButton() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  _toggleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
  _toggleImagePopup() {
    openPopup(popupContainer);
    popupPic.src = this._link;
    popupPicName.textContent = this._name;
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._toggleLikeButton();
      });
    this._element
      .querySelector(".element__delete-icon")
      .addEventListener("click", () => {
        this._toggleDeleteCard();
      });
    this._element
      .querySelector(".element__pic")
      .addEventListener("click", () => {
        this._toggleImagePopup();
      });
  }

  _createCard() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    const cardPic = cardElement.querySelector(".element__pic");
    this._element = cardElement;
    cardPic.src = this._link;
    cardPic.alt = this._name;
    cardElement.querySelector(".element__title").textContent = this._name;
    this._setEventListeners();
    return cardElement;
  }
}
