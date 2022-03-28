import { Section } from './Section.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
//import { fromCodePoint } from 'core-js/core/string';
//import './styles/index.css'; // добавьте импорт главного файла стилей 

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

/* containerSelector */
const containerSelector = document.querySelector('.cards');

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

/* экземпляр класса для отрисовки карточек на странице */
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    section.addItem(newCard);
  }
  },
  containerSelector);

  section.renderItems();

/* создание экземпляра новой карточки */
function createCard(data) {
  const card = new Card(data, '.template-card');
  const newCard = card.createCard();
  return newCard;
};

/* получение данных из полей ввода popupCreate и создание по ним новой карточки */
function addNewCard() {
  const card = {
    name: popupCreatePlaceName.value,
    link: popupCreatePlaceImage.value,
    alt: popupCreatePlaceName.value
  };
  const newCard = createCard(card);
  section.addItem(newCard);
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
};

/* инициализация полей формы редактирования профиля данными из профайла */
function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
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

/* обработчик события для кнопки редактирования профиля */
function handleButtonEdit() {
  popupEditValidator.resetInputError();
  initialisePopupEdit();
  popupEditValidator.toggleButtonState();
  openPopup(popupEdit);
}

/* обработчик события для кнопки добавления карточки */
function handleButtonAdd() {
  popupCreateValidator.resetInputError();
  resetFormAddCard();
  popupCreateValidator.toggleButtonState();
  openPopup(popupCreate)
}

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();

profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
popupEdit.addEventListener('mousedown', closeByClick);
popupCreate.addEventListener('mousedown', closeByClick);
popupDisplay.addEventListener('mousedown', closeByClick);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupCreateForm.addEventListener('submit', handleCreateFormSubmit);
