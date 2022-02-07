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

function render(el) {
  el.forEach((item) => {
    renderCard(item);
  });
}

function renderCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.card__title').textContent = card.name;
  newCard.querySelector('.card__image').src = card.link;
  newCard.querySelector('.card__image').alt = card.alt;
  addListeners(newCard);
  cards.prepend(newCard);
}

render(initialCards);

function handlerCreate() {
  const newCard = [
    {
      name: popupCreatePlaceName.value,
      link: popupCreatePlaceImage.value,
      alt: ''
    }
  ]; 
  render(newCard);
}

function handlerDelete(event) {
  event.target.closest('.card').remove();
}

function handlerLike(event) {
  const card = event.target.closest('.card');
  const buttonLike = card.querySelector('.card__button-like');
  buttonLike.classList.toggle('card__button-like_liked');
}

function popupDisplayOpen(event) {
  const card = event.target.closest('.card');
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  popupDisplayImage.src = cardImage.src;
  popupDisplayImageCaption.textContent = cardTitle.textContent;
  popupDisplay.classList.add('popup_opened');
}

function popupDisplayClose() {
  popupDisplay.classList.remove('popup_opened');
}

function popupEditOpen() {
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
  popupEdit.classList.add('popup_opened');
}

function popupEditClose() {
  popupEdit.classList.remove('popup_opened');
}

function popupCreateOpen() {
  popupCreatePlaceName.value = '';
  popupCreatePlaceImage.value = '';
  popupCreate.classList.add('popup_opened');
}

function popupCreateClose() {
  popupCreate.classList.remove('popup_opened');
}

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileUserName.textContent = popupEditUserName.value;
  profileUserInfo.textContent = popupEditUserInfo.value;
  popupEditClose();
}

function formCreateSubmitHandler(evt) {
  evt.preventDefault();
  popupCreateClose();
}

function addListeners(el) {
  el.querySelector('.card__button-delete').addEventListener('click', handlerDelete);
  el.querySelector('.card__button-like').addEventListener('click', handlerLike);
  el.querySelector('.card__image').addEventListener('click', popupDisplayOpen);
}

profileButtonEdit.addEventListener('click', popupEditOpen);
profileButtonAdd.addEventListener('click', popupCreateOpen);
popupEditButtonClose.addEventListener('click', popupEditClose);
popupCreateButtonClose.addEventListener('click', popupCreateClose);
popupDisplayButtonClose.addEventListener('click', popupDisplayClose);
popupEditForm.addEventListener('submit', formEditSubmitHandler);
popupCreateForm.addEventListener('submit', formCreateSubmitHandler);
popupCreateButtonCreate.addEventListener('click', handlerCreate);
