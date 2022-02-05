/* Переменные для секции profile */
let profile = document.querySelector('.profile');
let profileUserName = profile.querySelector('.profile__user-name');
let profileUserInfo = profile.querySelector('.profile__user-info');
let profileButtonEdit = profile.querySelector('.profile__button-edit');
let profileButtonAdd = profile.querySelector('.profile__button-add');

/* Переменные для элемента popup */
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_role_edit');
let popupCreate = document.querySelector('.popup_role_create');
let popupForm = popup.querySelector('.form');
let popupUserName = popupForm.querySelector('.form__input_role_user-name');
let popupUserInfo = popupForm.querySelector('.form__input_role_user-info');
let popupButtonSave = popupForm.querySelector('.form__button-save');
let popupButtonCreate = popupForm.querySelector('.form__button-create');
let popupEditButtonClose = popupEdit.querySelector('.popup__button-close');
let popupCreateButtonClose = popupCreate.querySelector('.popup__button-close');

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');
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

function render() {
  initialCards.forEach(createNewCard);
}

render();

/* Функции открытия и закрытия popup */
function popupEditOpen() {
  popupEdit.classList.add('popup_opened');
  popupUserName.value = profileUserName.textContent;
  popupUserInfo.value = profileUserInfo.textContent;
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

/* Функция перехватывает отправку формы и сохраняет данные из полей ввода */
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileUserName.textContent = popupUserName.value;
  profileUserInfo.textContent = popupUserInfo.value;
  popupEditClose();
  popupCreateClose();
}

/* Отслеживаем нажатие на соотв. кнопки */
profileButtonEdit.addEventListener('click', popupEditOpen);
profileButtonAdd.addEventListener('click', popupCreateOpen);
popupEditButtonClose.addEventListener('click', popupEditClose);
popupCreateButtonClose.addEventListener('click', popupCreateClose);

/* Отслеживаем событие отправки формы */
popupForm.addEventListener('submit', formSubmitHandler);

function createNewCard(initialCards) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.card__title').textContent = initialCards.name;
  newCard.querySelector('.card__image').src = initialCards.link;
  newCard.querySelector('.card__image').alt = initialCards.alt;
  cards.append(newCard);
}

function handlerAdd() {
  
}

function handlerEdit() {
  
}

function addListeners(el) {
  //el.querySelector('.delete').addEventListener('click', handlerDelete);
}

