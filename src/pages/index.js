// index.js

import './index.css';

import { initialCards } from '../components/Constants.js';

import { profileButtonEdit } from '../components/Constants.js';
import { profileButtonAdd } from '../components/Constants.js';

import { popupEditForm } from '../components/Constants.js';
import { popupEditUserName } from '../components/Constants.js';
import { popupEditUserInfo } from '../components/Constants.js';

import { popupCreateForm } from '../components/Constants.js';

import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import { validationConfig } from '../components/Constants.js';
import { FormValidator } from '../components/FormValidator.js';

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
