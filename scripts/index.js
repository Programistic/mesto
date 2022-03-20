import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

/* массив карточек для вставки на страницу при первой загрузке */
const initialCards = [
  {
    name: 'Альгарробо',
    link: './images/Алгаллробо.jpg',
    alt: 'Деревянный мост в городе Альгарробо в Чили'
  },
  {
    name: 'Верона',
    link: './images/Верона.jpg',
    alt: 'Лес в провинции Верона в Италии'
  },
  {
    name: 'Амстердам',
    link: './images/Амстердам.jpg',
    alt: 'Один из каналов в Амстердаме'
  },
  {
    name: 'Бад-Пирмонт',
    link: './images/Бад-Пирмонт.jpg',
    alt: 'Лес в окрестностях города Бад-Пирмонт в Германии'
  },
  {
    name: 'Маттерхорн',
    link: './images/Маттерхорн.jpg',
    alt: 'Вид на гору Маттерхорн в Швейцарии'
  },
  {
    name: 'Домбай',
    link: './images/Домбай.png',
    alt: 'Домбай'
  }
];

/* profile */
const profile = document.querySelector('.profile');
const profileUserName = profile.querySelector('.profile__user-name');
const profileUserInfo = profile.querySelector('.profile__user-info');
const profileButtonEdit = profile.querySelector('.profile__button-edit');
const profileButtonAdd = profile.querySelector('.profile__button-add');

/* popup-edit */
const popupEdit = document.querySelector('.popup_role_edit');
const popupEditForm = popupEdit.querySelector('.form');
const popupEditUserName = popupEdit.querySelector('.form__input_role_user-name');
const popupEditUserInfo = popupEdit.querySelector('.form__input_role_user-info');
const popupEditButtonSave = popupEdit.querySelector('.form__button-save');

/* popup-create */
const popupCreate = document.querySelector('.popup_role_create');
const popupCreateForm = popupCreate.querySelector('.form');
const popupCreatePlaceName = popupCreate.querySelector('.form__input_role_place-name');
const popupCreatePlaceImage = popupCreate.querySelector('.form__input_role_place-image');
const popupCreateButtonCreate = popupCreate.querySelector('.form__button-create');

/* popup-image-display */
export const popupDisplay = document.querySelector('.popup_role_image-display');
export const popupDisplayImage = popupDisplay.querySelector('.popup__image');
export const popupDisplayImageCaption = popupDisplay.querySelector('.popup__image-caption');

/* cards */
const cards = document.querySelector('.cards');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

/* создание экземпляров класса FormValidator для двух модальных окон */
const popupEditValidator = new FormValidator(validationConfig, popupEditForm);
const popupCreateValidator = new FormValidator(validationConfig, popupCreateForm);

/* добавление элемента в DOM в начало списка cards */
function renderCard(data) {
  const card = new Card(data, '.template-card');
  const newCard = card.createCard();
  cards.prepend(newCard);
};

/* создание карточки на основе имеющегося массива данных и добавление её в DOM  */
function addCardFromArray(array) {
  array.forEach((item) => {
    renderCard(item);
  });
};

/* создание карточки на основе данных из полей ввода и добавление её в DOM  */
function addNewCard() {
  const card = {
    name: popupCreatePlaceName.value,
    link: popupCreatePlaceImage.value,
    alt: popupCreatePlaceName.value
  };
  renderCard(card);
};

export function openPopup(popup) {
  document.addEventListener('keydown', closeByPressEsc);
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  document.removeEventListener('keydown', closeByPressEsc);
  popup.classList.remove('popup_opened');
};

/* закрытие popup по клику на крестик или оверлэй */
function closeByClick(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__button-close')) {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function closeByPressEsc(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

/* очищение полей ввода и дезактивация кнопки при открытии попапа создания новой карточки */
function resetFormAddCard() {
  popupCreatePlaceName.value = '';
  popupCreatePlaceImage.value = '';
  popupCreateButtonCreate.classList.add('button_inactive');
};

/* инициализация полей формы редактирования профиля данными из профайла */
function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
  popupEditButtonSave.classList.remove('button_inactive');
};

/* инициализация профайла данными из полей формы редактирования профиля*/
function initialiseProfile() {
  profileUserName.textContent = popupEditUserName.value;
  profileUserInfo.textContent = popupEditUserInfo.value;
};

/* обработка события submit для формы редактирования профиля */
function handleEditFormSubmit(event) {
  event.preventDefault();
  initialiseProfile();
  closePopup(popupEdit);
};

/* обработка события submit для формы создания новой карточки */
function handleCreateFormSubmit(event) {
  event.preventDefault();
  addNewCard();
  resetFormAddCard();
  closePopup(popupCreate);
};

addCardFromArray(initialCards);

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();

profileButtonEdit.addEventListener('click', () => {initialisePopupEdit(); popupEditValidator.resetInputError(); openPopup(popupEdit)});
profileButtonAdd.addEventListener('click', () => {resetFormAddCard(); popupCreateValidator.resetInputError(); openPopup(popupCreate)});
popupEdit.addEventListener('mousedown', closeByClick);
popupCreate.addEventListener('mousedown', closeByClick);
popupDisplay.addEventListener('mousedown', closeByClick);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupCreateForm.addEventListener('submit', handleCreateFormSubmit);
