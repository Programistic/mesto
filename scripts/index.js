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

/* cards */
const cards = document.querySelector('.cards');

/* card-template */
const cardTemplate = document.querySelector('.template-card').content;

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

function render(el) {
  el.forEach((item) => {
    createNewCard(item);
  });
}

function createNewCard(card) {
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

function addListeners(el) {
  el.querySelector('.card__button-delete').addEventListener('click', handlerDelete);
}

function handlerDelete(event) {
  event.target.closest('.card').remove();
}

/* Функции открытия и закрытия popup */
function popupEditOpen() {
  popupEdit.classList.add('popup_opened');
  popupEditUserName.value = profileUserName.textContent;
  popupEditUserInfo.value = profileUserInfo.textContent;
}

function popupCreateOpen() {
  popupCreate.classList.add('popup_opened');
}

function popupEditClose() {
  popupEdit.classList.remove('popup_opened');
}

function popupCreateClose() {
  popupCreate.classList.remove('popup_opened');
}

/* Функции перехватывают отправку формы и сохраняют данные из полей ввода */
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

/* Отслеживаем нажатие на соотв. кнопки */
profileButtonEdit.addEventListener('click', popupEditOpen);
profileButtonAdd.addEventListener('click', popupCreateOpen);
popupEditButtonClose.addEventListener('click', popupEditClose);
popupCreateButtonClose.addEventListener('click', popupCreateClose);

/* Отслеживаем события */
popupEditForm.addEventListener('submit', formEditSubmitHandler);
popupCreateForm.addEventListener('submit', formCreateSubmitHandler);
popupCreateButtonCreate.addEventListener('click', handlerCreate);

