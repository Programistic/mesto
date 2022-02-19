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
};

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
};

/* создание карточки на основе имеющегося массива данных и добавление её в DOM  */
function addCardFromArray(array) {
  array.forEach((item) => {
    renderCard(createCard(item));
  });
};

/* создание карточки на основе данных из полей ввода и добавление её в DOM  */
function addNewCard() {
  const card = {
    name: popupCreatePlaceName.value,
    link: popupCreatePlaceImage.value,
    alt: popupCreatePlaceName.value
  };
  renderCard(createCard(card));
};

function deleteCard(event) {
  event.target.closest('.card').remove();
};

function likeCard(event) {
  event.target.classList.toggle('card__button-like_liked');
};

function openPopup(popup) {
  document.addEventListener('keydown', function (event) {
    closeByPressEsc(event);
  });
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  document.removeEventListener('keydown', function (event) {
    closeByPressEsc(event);
  });
  popup.classList.remove('popup_opened');
};

function closeByClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function closeByPressEsc(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.key === 'Escape') {
    closePopup(popupEdit);
    closePopup(popupCreate);
    closePopup(popupDisplay);
  }
};

function resetFormAddCard() {
  popupCreatePlaceName.value = '';
  popupCreatePlaceImage.value = '';
};

/* инициализация полей формы редактирования профиля данными из профайла */
function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
};

/* инициализация профайла данными из полей формы редактирования профиля*/
function initialiseProfile() {
  profileUserName.textContent = popupEditUserName.value;
  profileUserInfo.textContent = popupEditUserInfo.value;
};

/* инициализация попап показа фотографии данными из карточки */
function initialisePopupDisplay(name, link) {
  popupDisplayImage.src = link;
  popupDisplayImageCaption.textContent = name;
  popupDisplayImage.alt = name;
};

/* обработка события submit для формы редактирования профиля */
function handleEditFormSubmit(event) {
  event.preventDefault();
  initialiseProfile();
  closePopup(popupEdit);
};

/* обработка события submit для формы создания новой карточки */
function handleCreateFormSubmit(event) {
  event.preventDefault();
  addNewCard();
  resetFormAddCard();
  closePopup(popupCreate);
};

function addListeners(newCard, newCardImage, card) {
  newCard.querySelector('.card__button-delete').addEventListener('click', deleteCard);
  newCard.querySelector('.card__button-like').addEventListener('click', likeCard);
  newCardImage.addEventListener('click', () => {initialisePopupDisplay(card.name, card.link); openPopup(popupDisplay)});
};

addCardFromArray(initialCards);

profileButtonEdit.addEventListener('click', () => {initialisePopupEdit(); openPopup(popupEdit); enableValidation(popupEdit)});
profileButtonAdd.addEventListener('click', () => {resetFormAddCard(); openPopup(popupCreate); enableValidation(popupCreate)});
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit));
popupCreateButtonClose.addEventListener('click', () => closePopup(popupCreate));
popupDisplayButtonClose.addEventListener('click', () => closePopup(popupDisplay));
popupEdit.addEventListener('mousedown', closeByClickOverlay);
popupCreate.addEventListener('mousedown', closeByClickOverlay);
popupDisplay.addEventListener('mousedown', closeByClickOverlay);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupCreateForm.addEventListener('submit', handleCreateFormSubmit);
