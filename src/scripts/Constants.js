// Constants.js хранит константы проекта

/* массив карточек для вставки на страницу при первой загрузке */
export const initialCards = [
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