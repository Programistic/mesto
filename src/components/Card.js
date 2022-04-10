// Card.js, создаётся класс карточки с названием, изображением, кнопками лайка и удаления

export class Card {
  constructor(data, cardTemplateSelector, handleImageClick, handleDeleteButton) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._id = data._id;
  }

  /* создание новой карточки по шаблону */
  createCard(isMyCard) {
    this._card = this._cardTemplate.cloneNode(true);
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardImage = this._card.querySelector('.card__image');

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._likeButton = this._card.querySelector('.card__like');
    this._deleteButton = this._card.querySelector('.card__button-delete');

    if (!isMyCard) {
      this._deleteButton.classList.add('card__button-delete_inactive');
    }

    this._setEventListeners();

    return this._card;
  };
  
  _handleLikeButton() {
    this._likeButton.classList.toggle('card__like_liked');
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleImageClick());
    this._likeButton.addEventListener('click', () => this._handleLikeButton());
    this._deleteButton.addEventListener('click', () => this._handleDeleteButton(this._id));
  };
}