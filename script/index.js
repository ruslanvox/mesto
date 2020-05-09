
//Константы для всплывающего окна

const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');

//Функция появления всплывающего меню 

function openPopupMenu() {
	popup.classList.add('popup_opened');
}

//Константа для закрытия окна

const editButtonClose = document.querySelector('.popup__close');

//Функция убирания всплывающего окна
function closePopupMenu() {
	popup.classList.remove('popup_opened');
}


//Переменные для редактирования всплывающего окна

let formElement = document.querySelector('.popup__content');
let profileName = document.querySelector('.profile__title-text');
let profileOccupation = document.querySelector('.profile__subtitle-text');
let nameInput = document.querySelector('.popup__input-edit-name');
let jobInput = document.querySelector('.popup__input-edit-about');

//Получили значения для переменных

nameInput.value = profileName.textContent;
jobInput.value = profileOccupation.textContent;


//Обработчик отправки формы

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileOccupation.textContent = jobInput.value;
	closePopupMenu();

}

//Константа для сохранения введенных данных

const saveButton = document.querySelector('.popup__save-button');

//Слушатели

formElement.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', openPopupMenu);

editButtonClose.addEventListener('click', closePopupMenu);








