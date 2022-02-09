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

function renderCard(element) {
  element.forEach((item) => { 
    cards.prepend(createCard(item));
  });
}

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardImage = newCard.querySelector('.card__image');
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  addListeners(newCard, cardTitle, cardImage);
  return newCard;
}

renderCard(initialCards);

function addNewCard() {
  const newCard = [
    {
      name: popupCreatePlaceName.value,
      link: popupCreatePlaceImage.value,
      alt: popupCreatePlaceName.value
    }
  ]; 
  renderCard(newCard);
}

function deleteCard(event) {
  event.target.closest('.card').remove();
}

function likeCard(event) {
  const card = event.target.closest('.card');
  const buttonLike = card.querySelector('.card__button-like');
  event.target.classList.toggle('card__button-like_liked');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function initialisePopupEdit() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
}

function initialisePopupCreate() {
  popupCreatePlaceName.value = '';
  popupCreatePlaceImage.value = '';
}

function initialisePopupDisplay(cardTitle, cardImage) {
  popupDisplayImage.src = cardImage.src;
  popupDisplayImageCaption.textContent = cardTitle.textContent;
  popupDisplayImage.alt = cardImage.alt;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileUserName.textContent = popupEditUserName.value;
  profileUserInfo.textContent = popupEditUserInfo.value;
  closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupCreate);
}

function addListeners(element, cardTitle, cardImage) {
  element.querySelector('.card__button-delete').addEventListener('click', deleteCard);
  element.querySelector('.card__button-like').addEventListener('click', likeCard);
  element.querySelector('.card__image').addEventListener('click', () => {initialisePopupDisplay(cardTitle, cardImage); openPopup(popupDisplay)});
}

profileButtonEdit.addEventListener('click', () => {initialisePopupEdit(); openPopup(popupEdit)});
profileButtonAdd.addEventListener('click', () => {initialisePopupCreate(); openPopup(popupCreate)});
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit));
popupCreateButtonClose.addEventListener('click', () => closePopup(popupCreate));
popupDisplayButtonClose.addEventListener('click', () => closePopup(popupDisplay));
popupEditForm.addEventListener('submit', handleProfileFormSubmit);
popupCreateForm.addEventListener('submit', handleCardFormSubmit);
popupCreateButtonCreate.addEventListener('click', addNewCard);
