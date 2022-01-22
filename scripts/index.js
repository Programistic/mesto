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

/* Переменные и константы для карточек */
const card1 = document.getElementById('1');
const card2 = document.getElementById('2');
const card3 = document.getElementById('3');
const card4 = document.getElementById('4');
const card5 = document.getElementById('5');
const card6 = document.getElementById('6');

let buttonHeartCard1 = card1.querySelector('.card__button-heart');
let buttonHeartCard2 = card2.querySelector('.card__button-heart');
let buttonHeartCard3 = card3.querySelector('.card__button-heart');
let buttonHeartCard4 = card4.querySelector('.card__button-heart');
let buttonHeartCard5 = card5.querySelector('.card__button-heart');
let buttonHeartCard6 = card6.querySelector('.card__button-heart');

/* Функции ставят like на понравившуюся карточку */
function buttonHeartCard1Click() {
  buttonHeartCard1.classList.toggle('card__button-heart_liked');
}

function buttonHeartCard2Click() {
  buttonHeartCard2.classList.toggle('card__button-heart_liked');
}

function buttonHeartCard3Click() {
  buttonHeartCard3.classList.toggle('card__button-heart_liked');
}

function buttonHeartCard4Click() {
  buttonHeartCard4.classList.toggle('card__button-heart_liked');
}

function buttonHeartCard5Click() {
  buttonHeartCard5.classList.toggle('card__button-heart_liked');
}

function buttonHeartCard6Click() {
  buttonHeartCard6.classList.toggle('card__button-heart_liked');
}

/* Отслеживаем нажатие на соотв. кнопки */
buttonHeartCard1.addEventListener('click', buttonHeartCard1Click);
buttonHeartCard2.addEventListener('click', buttonHeartCard2Click);
buttonHeartCard3.addEventListener('click', buttonHeartCard3Click);
buttonHeartCard4.addEventListener('click', buttonHeartCard4Click);
buttonHeartCard5.addEventListener('click', buttonHeartCard5Click);
buttonHeartCard6.addEventListener('click', buttonHeartCard6Click);

