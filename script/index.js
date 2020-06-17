
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

	const cardTemplate = document.querySelector('#cards-template').content; // забрали значения у созданного в HTML template
	const cardElement = cardTemplate.cloneNode(true); // клонируем template 

	cardElement.querySelector('.element__pic').src = link; // подставляем link, который будет вводить пользователь
	cardElement.querySelector('.element__delete-icon')
	cardElement.querySelector('.element__title').textContent = name; // подставляем name, который будет вводить пользователь
	cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) { // делаем лайк активным
		evt.target.classList.toggle('element__like-button_active')
	});
	cardElement.querySelector('.element__delete-icon').addEventListener('click', function (evt) { // делаем активной иконку удаления
		evt.target.parentElement.remove();
	});

	cardElement.querySelector('.element__pic').addEventListener('click', function (evt) {
		togglePopup(popupContainer);
		popupPic.src = link;
		popupPicName.textContent = name;
	})
	document.querySelector('.elements').prepend(cardElement); // добавляем карточку в текущий массив (заметим, что prepend добавляет карточку в начало списка, тогда как append - в конец)
}

// Карточки, загружаемые по умолчанию 

initialCards.forEach(element => {
	const name = element.name;
	const link = element.link;
	createCard(name, link);
});

const popupContainer = document.querySelector('.popup_pic');
const popupPic = document.querySelector('.popup__image');
const popupPicName = document.querySelector('.popup__name');
const popupPicCloseButton = document.querySelector('.popup__close_image');


//--------------------ДОБАВЛЕНИЕ КАРТОЧЕК--------------------------------

const userFormAdd = document.querySelector('.popup__content_add_card');

function submitUserCardHandler(evt) { // функция-обработчик submit
	const titleInput = document.querySelector('.popup__input_add_name'); // обьявили константу для имени
	const picInput = document.querySelector('.popup__input_add_place'); // обьявили константу для ссылки
	const name = titleInput.value; // присвоили аргументу имени значение
	const link = picInput.value; // присвоили аргументу ссылки значение
	evt.preventDefault();
	titleInput.value = '';
	picInput.value = '';
	togglePopup(popupAdd); // при нажатии submit функция обработчик выполнит функцию закрыть меню модального окна
	createCard(name, link); // при нажатии submit функция выполнит функцию создания карточки
}

// Слушатели для редактирования карточки
userFormAdd.addEventListener('submit', submitUserCardHandler); // слушатель для создания новой карточки


//Константы для всплывающего окна EDIT

const popup = document.querySelector('.popup_profile'); // забрали значения для добавления модификатора к popup
const profileEditButton = document.querySelector('.profile__edit-button'); // забрали значения для открытия попап

//Константа для закрытия окна EDIT

const editButtonClose = document.querySelector('.popup__close_profile'); // забрали значения для закрытия попап

//Константы для всплывающего окна ADD

const popupAdd = document.querySelector('.popup_card'); // забрали значения для добавления модификатора к popup-add
const cardButtonOpen = document.querySelector('.profile__add-button'); // забрали значения для открытия окна добавления карточки

//Константа для закрытия окна ADD

const cardButtonClose = document.querySelector('.popup__close_add_card'); // забрали значения для закрытия окна добавления карточки

// Функция открытия и закрытия окна добавления карточки


function togglePopup(somePopup) {
	somePopup.classList.toggle('popup_opened');
	document.addEventListener('keydown', closeByEsc);
}



//Переменные для редактирования всплывающего окна

const formElement = document.querySelector('.popup__content_profile'); // забрали значения для добавления данных в форму
const profileName = document.querySelector('.profile__title-text'); // забрали значения для изменения данных в имени пользователя
const profileOccupation = document.querySelector('.profile__subtitle-text'); // забрали значения для изменения данных в occupation пользователя
const nameInput = document.querySelector('.popup__input_edit-name'); // забрали значения для новых данных имени пользователя
const jobInput = document.querySelector('.popup__input_edit-about'); // забрали значения для новой occupation пользователя

//Функция появления и убирания всплывающего меню 

function openClosePopupMenu() {
	togglePopup(popup); // добавляем либо убираем модификатор класса popup, чтобы открылось всплываюбщее меню
	if (popup.classList.contains('popup_opened')) { // условие - если класс содержит модификатор - то подставить в форму значения имени пользователя и рода занятий в форму при загрузке формы
		nameInput.value = profileName.textContent;
		jobInput.value = profileOccupation.textContent;
		document.addEventListener('keydown', closeByEsc);

	}

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

cardButtonOpen.addEventListener('click', function () {
	togglePopup(popupAdd);
}); // запускаем функцию открыть меню добавления карточек

cardButtonClose.addEventListener('click', function () {
	togglePopup(popupAdd);
}); // запускаем функцию закрыть меню добавления карточек

popupPicCloseButton.addEventListener('click', function () {
	togglePopup(popupContainer);
});


function closeByEsc(evt) {
	if (evt.key === 'Escape') {
		document.querySelector('.popup_opened').classList.remove('popup_opened');
		document.removeEventListener('keydown', closeByEsc);
	}
};

document.addEventListener('mousedown', function (evt) {
	evt.target.classList.remove('popup_opened');
	evt.stopPropagation();
});








