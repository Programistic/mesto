// index.js

import './index.css';

import { userURL, cardURL, token } from '../utils/constants.js';
import { validationConfig } from '../utils/constants.js';
import { userNameSelector, userInfoSelector, userAvatarSelector, cardsContainer, profileButtonEdit, profileButtonAdd } from '../utils/constants.js';
import { popupEditForm, popupCreateForm, popupEditUserName, popupEditUserInfo } from '../utils/constants.js';

import { Api } from '../components/Api.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from '../components/FormValidator.js';

/* создание экземпляров класса FormValidator для двух модальных окон */
const popupEditValidator = new FormValidator(validationConfig, popupEditForm);
const popupCreateValidator = new FormValidator(validationConfig, popupCreateForm);

/* изменение формата данных */
const getInputValues = (data) => {
  return {
    name: data['place-name'],
    link: data['place-image']
  };
}

/* инициализация полей формы редактирования профиля данными из профайла */
const initPopupEdit = () => {
  const data = userInfo.getUserInfo();
  popupEditUserName.value = data.editUserName;
  popupEditUserInfo.value = data.editUserInfo; 
}

/* создание экземпляра новой карточки */
const createCard = (data) => {
  const card = new Card(data, '.template-card', () => imagePopup.open(data.name, data.link));
  const newCard = card.createCard();
  return newCard;
}

/* создание карточки по данным из полей ввода */
const handleCreateFormSubmit = (data) => {
  api.setCard(data)
    .then(data => {
      const newCard = createCard(data);
      cardsContainer.prepend(newCard);
    }); 
  createPopup.close();
}

/* обновление профиля пользователя данными с сервера */
const updateProfile = () => {
  api.getUserInfo()
  .then(data => {
    userInfo.setUserInfo(data['name'], data['about']);
    userInfo.setUserAvatar(data['avatar']);
  });
}

/* обновление карточной галереи данными с сервера */
const updateCardGallery = () => {
  api.getInitialCards()
  .then(initCards => {
    const section = new Section({
      items: initCards,
      renderer: (item) => {
        const newCard = createCard(item);
        section.addItem(newCard);
      }
      },
      cardsContainer);
      section.renderItems();
  });
}

/* установка в профайл новых даннных пользователя из полей ввода */
const handleEditFormSubmit = (data) => {
  api.setUserInfo(data)
    .then(userData => {
      userInfo.setUserInfo(userData['name'], userData['about']);
    });
  editPopup.close();
}

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
const userInfo = new UserInfo({ userNameSelector, userInfoSelector, userAvatarSelector });
const api = new Api(userURL, cardURL, token);

updateProfile();
updateCardGallery();

imagePopup.setEventListeners();
editPopup.setEventListeners();
createPopup.setEventListeners();

profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
