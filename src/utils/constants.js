// constants.js хранит константы проекта

import algalroboImage from '../images/Алгаллробо.jpg';
import veronaImage from '../images/Верона.jpg';
import amsterdamImage from '../images/Амстердам.jpg';
import badpirmontImage from '../images/Бад-Пирмонт.jpg';
import matterhornImage from '../images/Маттерхорн.jpg';
import dombayImage from '../images/Домбай.png';

/* массив карточек для вставки на страницу при первой загрузке */
export const initialCards = [
  {
    name: 'Альгарробо',
    link: algalroboImage,
    alt: 'Деревянный мост в городе Альгарробо в Чили'
  },
  {
    name: 'Верона',
    link: veronaImage,
    alt: 'Лес в провинции Верона в Италии'
  },
  {
    name: 'Амстердам',
    link: amsterdamImage,
    alt: 'Один из каналов в Амстердаме'
  },
  {
    name: 'Бад-Пирмонт',
    link: badpirmontImage,
    alt: 'Лес в окрестностях города Бад-Пирмонт в Германии'
  },
  {
    name: 'Маттерхорн',
    link: matterhornImage,
    alt: 'Вид на гору Маттерхорн в Швейцарии'
  },
  {
    name: 'Домбай',
    link: dombayImage,
    alt: 'Домбай'
  }
];

/* profile */
export const profile = document.querySelector('.profile');
export const profileButtonEdit = profile.querySelector('.profile__button-edit');
export const profileButtonAdd = profile.querySelector('.profile__button-add');

/* popup-edit */
export const popupEdit = document.querySelector('.popup_role_edit');
export const popupEditForm = popupEdit.querySelector('.form');
export const popupEditUserName = popupEdit.querySelector('.form__input_role_user-name');
export const popupEditUserInfo = popupEdit.querySelector('.form__input_role_user-info');

/* popup-create */
export const popupCreate = document.querySelector('.popup_role_create');
export const popupCreateForm = popupCreate.querySelector('.form');

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};