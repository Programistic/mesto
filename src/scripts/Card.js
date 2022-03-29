// Card.js, создаётся класс карточки с названием, изображением, кнопками лайка и удаления

export class Card {
  constructor(data, cardTemplateSelector, handleImageClick) {
    this._cardTemplate = cardTemplateSelector.content.querySelector('.card');
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._handleImageClick = handleImageClick;
  }

  /* создание новой карточки по шаблону */
  createCard() {
    this._card = this._cardTemplate.cloneNode(true);
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardImage = this._card.querySelector('.card__image');

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._likeButton = this._card.querySelector('.card__button-like');
    this._deleteButton = this._card.querySelector('.card__button-delete');

    this._setEventListeners();

    return this._card;
  };
  
  _handleLikeButton() {
    this._likeButton.classList.toggle('card__button-like_liked');
  };

  _handleDeleteButton() {
    this._card.remove();
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleImageClick());
    this._likeButton.addEventListener('click', () => this._handleLikeButton());
    this._deleteButton.addEventListener('click', () => this._handleDeleteButton());
  };
}