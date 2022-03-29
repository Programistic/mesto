import { Section } from './Section.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
//import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';

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

export const cardTemplateSelector = document.querySelector('.template-card');

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
  const card = new Card(data, cardTemplateSelector, () => imagePopup.open(data.name, data.link));
  return card.createCard();
};

/* получение данных из полей ввода popupCreate и создание по ним новой карточки */
function addNewCard(data) {
  const card = {
    name: data.placename,
    link: data.placeimage,
  };
  const newCard = createCard(card);
  section.addItem(newCard);
};

/* инициализация профайла данными из полей формы редактирования профиля*/
function initialiseProfile(data) {
  profileUserName.textContent = data.username;
  profileUserInfo.textContent = data.userinfo;
};

/* инициализация полей формы редактирования профиля данными из профайла */
function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
};

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

/*  */
const handleEditFormSubmit = (data) => {
  initialiseProfile(data);
  editPopup.close();
};

/*  */
const handleCreateFormSubmit = (data) => {
  addNewCard(data);
  createPopup.close();
};

/*  */
const imagePopup = new PopupWithImage('.popup_role_image-display');
const editPopup = new PopupWithForm('.popup_role_edit', handleEditFormSubmit);
const createPopup = new PopupWithForm('.popup_role_create', handleCreateFormSubmit);

imagePopup.setEventListeners();
editPopup.setEventListeners();
createPopup.setEventListeners();

/* обработчик события для кнопки редактирования профиля */
function handleButtonEdit() {
  popupEditValidator.resetInputError();
  initialisePopupEdit();
  popupEditValidator.toggleButtonState();
  editPopup.open();
}

/* обработчик события для кнопки добавления карточки */
function handleButtonAdd() {
  popupCreateValidator.resetInputError();
  popupCreateValidator.toggleButtonState();
  createPopup.open();
}

/* включение валидации модальных окон */
popupEditValidator.enableValidation();
popupCreateValidator.enableValidation();

profileButtonEdit.addEventListener('click', handleButtonEdit);
profileButtonAdd.addEventListener('click', handleButtonAdd);
