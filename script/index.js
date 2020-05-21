
//Константы для всплывающего окна

const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');

//Константа для закрытия окна

const editButtonClose = document.querySelector('.popup__close');


//Переменные для редактирования всплывающего окна

let formElement = document.querySelector('.popup__content');
let profileName = document.querySelector('.profile__title-text');
let profileOccupation = document.querySelector('.profile__subtitle-text');
let nameInput = document.querySelector('.popup__input_edit-name');
let jobInput = document.querySelector('.popup__input_edit-about');


//Функция появления всплывающего меню 

function openClosePopupMenu() {
	popup.classList.toggle('popup_opened');
	if (popup.classList.contains('popup_opened')) {
		nameInput.value = profileName.textContent;
		jobInput.value = profileOccupation.textContent;
	};

}


//Обработчик отправки формы

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileOccupation.textContent = jobInput.value;
	openClosePopupMenu();

}

//Слушатели

formElement.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', openClosePopupMenu);

editButtonClose.addEventListener('click', openClosePopupMenu);








