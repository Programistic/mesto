// constants.js хранит константы проекта

const cohortID = 'cohort-39';
export const cardURL = `https://mesto.nomoreparties.co/v1/${cohortID}/cards`;
export const userURL = `https://mesto.nomoreparties.co/v1/${cohortID}/users/me`;
export const token = 'fed91f6d-1f71-4682-bc63-ccd602fc60c4';

/* profile */
const profile = document.querySelector('.profile');
export const userNameSelector = profile.querySelector('.profile__user-name');
export const userInfoSelector = profile.querySelector('.profile__user-info');
export const userAvatarSelector = profile.querySelector('.profile__avatar');
export const profileButtonEdit = profile.querySelector('.profile__button-edit');
export const profileButtonAdd = profile.querySelector('.profile__button-add');
export const profileAvatarUpdate = profile.querySelector('.profile__edit-icon');

/* popup-edit */
const popupEdit = document.querySelector('.popup_role_edit');
export const popupEditForm = popupEdit.querySelector('.form');
export const popupEditUserName = popupEdit.querySelector('.form__input_role_user-name');
export const popupEditUserInfo = popupEdit.querySelector('.form__input_role_user-info');

/* popup-create */
const popupCreate = document.querySelector('.popup_role_create');
export const popupCreateForm = popupCreate.querySelector('.form');

/* popup-avatar-update */
const popupAvatarUpdate = document.querySelector('.popup_role_avatar-update');
export const popupAvatarUpdateForm = popupAvatarUpdate.querySelector('.form');

/* popup-confirm */
const popupConfirm = document.querySelector('.popup_role_confirm');

export const cardsContainer = document.querySelector('.cards');

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};


/*import algalroboImage from '../images/Алгаллробо.jpg';
import veronaImage from '../images/Верона.jpg';
import amsterdamImage from '../images/Амстердам.jpg';
import badpirmontImage from '../images/Бад-Пирмонт.jpg';
import matterhornImage from '../images/Маттерхорн.jpg';
import dombayImage from '../images/Домбай.png';*/

/* массив карточек для вставки на страницу при первой загрузке */
/*export const initialCards = [
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
];*/