/* Переменные для секции profile */
let profile = document.querySelector('.profile');
let profileUserName = profile.querySelector('.profile__user-name');
let profileUserInfo = profile.querySelector('.profile__user-info');
let profileButtonEdit = profile.querySelector('.profile__button-edit');

/* Переменные для элемента popup */
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.form');
let popupUserName = popupForm.querySelector('.form__input_role_user-name');
let popupUserInfo = popupForm.querySelector('.form__input_role_user-info');
let popupButtonClose = popup.querySelector('.popup__button-close');

/* Функции открытия и закрытия popup */
function popupOpen() {
  popup.classList.add('popup_opened');
  popupUserName.value = profileUserName.textContent;
  popupUserInfo.value = profileUserInfo.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

/* Отслеживаем нажатие на соотв. кнопки */
profileButtonEdit.addEventListener('click', popupOpen);
popupButtonClose.addEventListener('click', popupClose);

/* Функция перехватывает отправку формы и сохраняет данные из полей ввода */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileUserName.textContent = popupUserName.value;
  profileUserInfo.textContent = popupUserInfo.value;
  popupClose();
}

/* Отслеживаем событие отправки формы */
popupForm.addEventListener('submit', formSubmitHandler);
