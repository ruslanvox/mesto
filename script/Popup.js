function togglePopup(somePopup) {
  somePopup.classList.toggle("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//Переменные для редактирования всплывающего окна

const formElement = document.querySelector(".popup__content_profile"); // забрали значения для добавления данных в форму
const profileName = document.querySelector(".profile__title-text"); // забрали значения для изменения данных в имени пользователя
const profileOccupation = document.querySelector(".profile__subtitle-text"); // забрали значения для изменения данных в occupation пользователя
const nameInput = document.querySelector(".popup__input_edit-name"); // забрали значения для новых данных имени пользователя
const jobInput = document.querySelector(".popup__input_edit-about"); // забрали значения для новой occupation пользователя

//Функция появления и убирания всплывающего меню

function openClosePopupMenu() {
  togglePopup(popup); // добавляем либо убираем модификатор класса popup, чтобы открылось всплываюбщее меню
  if (popup.classList.contains("popup_opened")) {
    // условие - если класс содержит модификатор - то подставить в форму значения имени пользователя и рода занятий в форму при загрузке формы
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    document.addEventListener("keydown", closeByEsc);
  }
}

//Обработчик отправки формы - при нажатии submit поставить введенные значения имени пользователя и рода занятий в данные пользователя.

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  openClosePopupMenu();
}
