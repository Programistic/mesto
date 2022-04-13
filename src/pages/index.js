// index.js

import './index.css';

import { userURL, cardURL, avatarURL, token } from '../utils/constants.js';
import { validationConfig } from '../utils/constants.js';
import { userNameSelector, userInfoSelector, userAvatarSelector, cardsContainer } from '../utils/constants.js';
import { profileButtonEdit, profileButtonAdd, profileAvatarUpdate } from '../utils/constants.js';
import { popupEditForm, popupCreateForm, popupAvatarUpdateForm, popupEditUserName, popupEditUserInfo } from '../utils/constants.js';

import { Api } from '../components/Api.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithEmptyForm } from '../components/PopupWithEmptyForm.js';
import { FormValidator } from '../components/FormValidator.js';

/* создание экземпляров класса FormValidator для двух модальных окон */
const popupEditValidator = new FormValidator(validationConfig, popupEditForm);
const popupCreateValidator = new FormValidator(validationConfig, popupCreateForm);
const popupAvatarUpdateValidator = new FormValidator(validationConfig, popupAvatarUpdateForm);

const api = new Api(userURL, cardURL, avatarURL, token);

let userID;

Promise.all([api.getProfile(), api.getCards()])
  .then(([userData, cards]) => {
    userID = userData['_id'];
    updateProfile(userData);
    renderCards(cards);
  })

/* обновление профиля пользователя данными с сервера */
const updateProfile = (data) => { 
  userInfo.setUserInfo(data['name'], data['about']);
  userInfo.setUserAvatar(data['avatar']);
}

/* отрисовка карточной галереи данными с сервера */
const renderCards = (cards) => {
  const section = new Section({
    items: cards,
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    }
    },
    cardsContainer);
    section.renderItems();
}

/* создание экземпляра новой карточки */
const createCard = (data) => {
  const card = new Card(data, userID, '.template-card', () => imagePopup.open(data.name, data.link), {
    handleDeleteButtonClick: (cardID) => {
      confirmDeletePopup.open();
      confirmDeletePopup.handleCardDelete(() => {
        api.deleteCard(cardID)
          .then(() => {
            card.deleteCard();
            confirmDeletePopup.close();
          })
      });
    },
    handleLikeClick: (cardID, isLiked) => {
      if (!isLiked) {
        api.addLike(cardID)
          .then((data) => {
            card.displayNumberLikes(data.likes);
            card.toggleLike();
          })
      } else {
        api.deleteLike(cardID)
          .then((data) => {
            card.displayNumberLikes(data.likes);
            card.toggleLike();
          })
      } 
    }
  });
  const newCard = card.createCard();
  card.displayNumberLikes(data.likes);
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

/* установка в профайл новых даннных пользователя из полей ввода */
const handleEditFormSubmit = (data) => {
  api.setUserInfo(data)
    .then(userData => {
      userInfo.setUserInfo(userData['name'], userData['about']);
    });
  editPopup.close();
}

/* обновление аватара пользователя */
const handleAvatarUpdateFormSubmit = (data) => {
  api.setAvatar(data)
    .then(avatarData => {
      userInfo.setUserAvatar(avatarData['avatar']);
    });
  avatarUpdatePopup.close();
}

/* инициализация полей формы редактирования профиля данными из профайла */
const initPopupEdit = () => {
  const data = userInfo.getUserInfo();
  popupEditUserName.value = data.editUserName;
  popupEditUserInfo.value = data.editUserInfo; 
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

const handleAvatarUpdate = () => {
  popupAvatarUpdateValidator.resetInputError();
  popupAvatarUpdateValidator.toggleButtonState();
  avatarUpdatePopup.open();
}

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();
popupAvatarUpdateValidator.enableValidation();

const imagePopup = new PopupWithImage('.popup_role_image-display');
const editPopup = new PopupWithForm('.popup_role_edit', handleEditFormSubmit);
const createPopup = new PopupWithForm('.popup_role_create', handleCreateFormSubmit);
const avatarUpdatePopup = new PopupWithForm('.popup_role_avatar-update', handleAvatarUpdateFormSubmit);
const confirmDeletePopup = new PopupWithEmptyForm('.popup_role_confirm');
const userInfo = new UserInfo({ userNameSelector, userInfoSelector, userAvatarSelector });

imagePopup.setEventListeners();
editPopup.setEventListeners();
createPopup.setEventListeners();
avatarUpdatePopup.setEventListeners();
confirmDeletePopup.setEventListeners();

profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
profileAvatarUpdate.addEventListener('click', handleAvatarUpdate);
