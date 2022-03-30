// index.js

import { initialCards } from './Constants.js';

import { profileButtonEdit } from './Constants.js';
import { profileButtonAdd } from './Constants.js';

import { popupEditForm } from './Constants.js';
import { popupEditUserName } from './Constants.js';
import { popupEditUserInfo } from './Constants.js';

import { popupCreateForm } from './Constants.js';

import { Section } from './Section.js';
import { Card } from './Card.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

import { validationConfig } from './Constants.js';
import { FormValidator } from './FormValidator.js';

/* создание экземпляров класса FormValidator для двух модальных окон */
const popupEditValidator = new FormValidator(validationConfig, popupEditForm);
const popupCreateValidator = new FormValidator(validationConfig, popupCreateForm);

/* создание экземпляра новой карточки */
const createCard = (data) => {
  const card = new Card(data, '.template-card', () => imagePopup.open(data.name, data.link));
  const newCard = card.createCard();
  return newCard;
};

/* изменение формата данных */
const getInputValues = (data) => {
  return {
    name: data['place-name'],
    link: data['place-image']
  };
};

/* создание карточки по данным из полей ввода */
const handleCreateFormSubmit = (data) => {
  const inputValues = getInputValues(data);
  const newCard = createCard(inputValues);
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

const handleEditFormSubmit = (data) => {
  userInfo.setUserInfo(data['user-name'], data['user-info']);
  editPopup.close();
};

const handleButtonEdit = () => {
  popupEditValidator.resetInputError();
  initPopupEdit();
  popupEditValidator.toggleButtonState();
  editPopup.open();
}

const handleButtonAdd = () => {
  popupCreateValidator.resetInputError();
  popupCreateValidator.toggleButtonState();
  createPopup.open();
}

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();

const imagePopup = new PopupWithImage('.popup_role_image-display');
const editPopup = new PopupWithForm('.popup_role_edit', handleEditFormSubmit);
const createPopup = new PopupWithForm('.popup_role_create', handleCreateFormSubmit);
const userInfo = new UserInfo({userNameSelector: '.profile__user-name', userInfoSelector: '.profile__user-info'});

imagePopup.setEventListeners();
editPopup.setEventListeners();
createPopup.setEventListeners();

profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
