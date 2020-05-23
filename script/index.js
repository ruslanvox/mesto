const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

// Функция добавления карточки в DOM 

function createCard(name, link) {

	const




}


//Константы для всплывающего окна EDIT

const popup = document.querySelector('.popup'); // забрали значения для добавления модификатора к popup
const profileEditButton = document.querySelector('.profile__edit-button'); // забрали значения для открытия попап

//Константа для закрытия окна EDIT

const editButtonClose = document.querySelector('.popup__close'); // забрали значения для закрытия попап

//Константы для всплывающего окна ADD

const popupAdd = document.querySelector('.popup-add'); // забрали значения для добавления модификатора к popup-add
const сardButtonOpen = document.querySelector('.profile__add-button'); // забрали значения для открытия окна добавления карточки

//Константа для закрытия окна EDIT

const сardButtonClose = document.querySelector('.popup-add__close'); // забрали значения для закрытия окна добавления карточки

// Функция открытия и закрытия окна добавления карточки

function openClosePopupAddMenu() {
	popupAdd.classList.toggle('popup-add_opened'); // добавляем либо убираем модификатор класса popup, чтобы открылось всплываюбщее меню

}


//Переменные для редактирования всплывающего окна

let formElement = document.querySelector('.popup__content'); // забрали значения для добавления данных в форму
let profileName = document.querySelector('.profile__title-text'); // забрали значения для изменения данных в имени пользователя
let profileOccupation = document.querySelector('.profile__subtitle-text'); // забрали значения для изменения данных в occupation пользователя
let nameInput = document.querySelector('.popup__input_edit-name'); // забрали значения для новых данных имени пользователя
let jobInput = document.querySelector('.popup__input_edit-about'); // забрали значения для новой occupation пользователя


//Функция появления и убирания всплывающего меню 

function openClosePopupMenu() {
	popup.classList.toggle('popup_opened'); // добавляем либо убираем модификатор класса popup, чтобы открылось всплываюбщее меню
	if (popup.classList.contains('popup_opened')) { // условие - если класс содержит модификатор - то подставить в форму значения имени пользователя и рода занятий в форму при загрузке формы
		nameInput.value = profileName.textContent;
		jobInput.value = profileOccupation.textContent;
	};

}


//Обработчик отправки формы - при нажатии submit поставить введенные значения имени пользователя и рода занятий в данные пользователя.

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileOccupation.textContent = jobInput.value;
	openClosePopupMenu();

}

//Слушатели

formElement.addEventListener('submit', formSubmitHandler); // кнопка сохранить

profileEditButton.addEventListener('click', openClosePopupMenu); // запускаем функцию открыть меню ( при нажатии открывается меню)

editButtonClose.addEventListener('click', openClosePopupMenu); // запускаем функцию закрыть меню ( при нажатии закрывается меню)

сardButtonOpen.addEventListener('click', openClosePopupAddMenu); // запускаем функцию открыть меню добавления карточек

сardButtonClose.addEventListener('click', openClosePopupAddMenu); // запускаем функцию закрыть меню добавления карточек










