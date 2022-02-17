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
const popupEditButtonClose = popupEdit.querySelector('.popup__button-close');

/* popup-create */
const popupCreate = document.querySelector('.popup_role_create');
const popupCreateForm = popupCreate.querySelector('.form');
const popupCreatePlaceName = popupCreate.querySelector('.form__input_role_place-name');
const popupCreatePlaceImage = popupCreate.querySelector('.form__input_role_place-image');
const popupCreateButtonCreate = popupCreate.querySelector('.form__button-create');
const popupCreateButtonClose = popupCreate.querySelector('.popup__button-close');

/* popup-image-display */
const popupDisplay = document.querySelector('.popup_role_image-display');
const popupDisplayImage = popupDisplay.querySelector('.popup__image');
const popupDisplayImageCaption = popupDisplay.querySelector('.popup__image-caption');
const popupDisplayButtonClose = popupDisplay.querySelector('.popup__button-close');

/* cards */
const cards = document.querySelector('.cards');

/* card-template */
const cardTemplate = document.querySelector('.template-card').content;

/* добавление элемента в DOM в начало списка cards */
function renderCard(element) {
  cards.prepend(element);
}

/* создание новой карточки по шаблону */
function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const newCardTitle = newCard.querySelector('.card__title');
  const newCardImage = newCard.querySelector('.card__image');
  newCardTitle.textContent = card.name;
  newCardImage.src = card.link;
  newCardImage.alt = card.alt;
  addListeners(newCard, newCardImage, card);
  return newCard;
}

/* создание карточки на основе имеющегося массива данных и добавление её в DOM  */
function addCardFromArray(array) {
  array.forEach((item) => {
    renderCard(createCard(item));
  });
}

/* создание карточки на основе данных из полей ввода и добавление её в DOM  */
function addNewCard() {
  const card = {
    name: popupCreatePlaceName.value,
    link: popupCreatePlaceImage.value,
    alt: popupCreatePlaceName.value
  };
  renderCard(createCard(card));
}

function deleteCard(event) {
  event.target.closest('.card').remove();
}

function likeCard(event) {
  event.target.classList.toggle('card__button-like_liked');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function resetFormAddCard() {
  popupCreatePlaceName.value = '';
  popupCreatePlaceImage.value = '';
}

/* инициализация полей формы редактирования профиля данными из профайла */
function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
}

/* инициализация профайла данными из полей формы редактирования профиля*/
function initialiseProfile() {
  profileUserName.textContent = popupEditUserName.value;
  profileUserInfo.textContent = popupEditUserInfo.value;
}

/* инициализация попап показа фотографии данными из карточки */
function initialisePopupDisplay(name, link) {
  popupDisplayImage.src = link;
  popupDisplayImageCaption.textContent = name;
  popupDisplayImage.alt = name;
}

/* обработка события submit для формы редактирования профиля */
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  initialiseProfile();
  closePopup(popupEdit);
}

/* обработка события submit для формы создания новой карточки */
function handleCreateFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  resetFormAddCard();
  closePopup(popupCreate);
}

function addListeners(newCard, newCardImage, card) {
  newCard.querySelector('.card__button-delete').addEventListener('click', deleteCard);
  newCard.querySelector('.card__button-like').addEventListener('click', likeCard);
  newCardImage.addEventListener('click', () => {initialisePopupDisplay(card.name, card.link); openPopup(popupDisplay)});
}

addCardFromArray(initialCards);

profileButtonEdit.addEventListener('click', () => {initialisePopupEdit(); openPopup(popupEdit)});
profileButtonAdd.addEventListener('click', () => {openPopup(popupCreate)});
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit));
popupCreateButtonClose.addEventListener('click', () => closePopup(popupCreate));
popupDisplayButtonClose.addEventListener('click', () => closePopup(popupDisplay));
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupCreateForm.addEventListener('submit', handleCreateFormSubmit);

/* ======================================= */

/* включение валидации страницы */
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form')); // выбираем все элементы .form на странице
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement); // устанавливаем слушатель событий на каждое поле ввода на выбранной форме
  });
};

/* проверка валидности полей ввода и изменение статуса кнопки отправки формы */
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input')); // выбираем все поля ввода на переданной в функцию форме
  const buttonElement = formElement.querySelector('.form__submit'); // выбираем элемент отправки формы на переданной в функцию форме
  toggleButtonState(inputList, buttonElement); // если изначально не валидно - меняем статус кнопки отправки формы на неактивную
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {  // вешаем слушатель событий на каждое поле ввода на форме
      checkInputValidity(formElement, inputElement);  // проверяем валидность после ввода каждого символа
      toggleButtonState(inputList, buttonElement);  // если не валидно - меняем статус кнопки отправки формы на неактивную
    });
  });
};

/* проверка валидности вводимых данных */
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

/* вывод сообщения об ошибке ввода плюс красная линия под полем ввода */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error') // подчёркиваем красным поле ввода
  errorElement.textContent = errorMessage; // текст сообщения об ошибке ввода
  errorElement.classList.add('form__input-error_active'); // показываем сообщение об ошибке ввода
};

/* скрываем сообщение об ошибке и убираем красную линию под полем ввода */
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error'); // убираем красное подчёркивание поля ввода
  errorElement.classList.remove('form__input-error_active'); // убираем сообщение об ошибке ввода
  errorElement.textContent = ''; // очищаем текст сообщения об ошибке ввода
};

/* меняем статус кнопки отправки формы (активная - неактивная) */
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
};

/* возвращает значение свойства valid первого невалидного элемента */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation();