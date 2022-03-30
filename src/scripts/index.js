// index.js

import { Section } from './Section.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

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
const profileButtonEdit = profile.querySelector('.profile__button-edit');
const profileButtonAdd = profile.querySelector('.profile__button-add');

/* popup-edit */
const popupEdit = document.querySelector('.popup_role_edit');
const popupEditForm = popupEdit.querySelector('.form');
const popupEditUserName = popupEdit.querySelector('.form__input_role_user-name');
const popupEditUserInfo = popupEdit.querySelector('.form__input_role_user-info');

/* popup-create */
const popupCreate = document.querySelector('.popup_role_create');
const popupCreateForm = popupCreate.querySelector('.form');

/* popup-image-display */
export const popupDisplay = document.querySelector('.popup_role_image-display');
export const popupDisplayImage = popupDisplay.querySelector('.popup__image');
export const popupDisplayImageCaption = popupDisplay.querySelector('.popup__image-caption');

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

/* создание экземпляра новой карточки */
const createCard = (data) => {
  const card = new Card(data, '.template-card', () => imagePopup.open(data.name, data.link));
  const newCard = card.createCard();
  return newCard;
};

/* получение данных из полей ввода popupCreate */
const initCard = (data) => {
  const card = {
    name: data['place-name'],
    link: data['place-image']
  };
  return card;
};

/*  */
const handleCreateFormSubmit = (data) => {
  const card = initCard(data);
  const newCard = createCard(card);
  section.addItem(newCard);
  createPopup.close();
};

/* инициализация полей формы редактирования профиля данными из профайла */
const initPopupEdit = () => {
  popupEditUserName.value = userInfo.getUserInfo().editUserName;
  popupEditUserInfo.value = userInfo.getUserInfo().editUserInfo;
  
};

/* экземпляр класса для отрисовки карточек на странице */
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    section.addItem(newCard);
  }
  },
  '.cards');
  section.renderItems();

/*  */
const handleEditFormSubmit = (data) => {
  userInfo.setUserInfo(data['user-name'], data['user-info']);
  editPopup.close();
};

/* обработчик события для кнопки редактирования профиля */
const handleButtonEdit = () => {
  popupEditValidator.resetInputError();
  initPopupEdit();
  popupEditValidator.toggleButtonState();
  editPopup.open();
}

/* обработчик события для кнопки добавления карточки */
const handleButtonAdd = () => {
  popupCreateValidator.resetInputError();
  popupCreateValidator.toggleButtonState();
  createPopup.open();
}

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();

/*  */
const imagePopup = new PopupWithImage('.popup_role_image-display');
const editPopup = new PopupWithForm('.popup_role_edit', handleEditFormSubmit);
const createPopup = new PopupWithForm('.popup_role_create', handleCreateFormSubmit);

imagePopup.setEventListeners();
editPopup.setEventListeners();
createPopup.setEventListeners();

const userInfo = new UserInfo({userNameSelector: '.profile__user-name', userInfoSelector: '.profile__user-info'});

/*  */
profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
