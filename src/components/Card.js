// Card.js, создаётся класс карточки с названием, изображением, кнопками лайка и удаления

export class Card {
  constructor(data, cardTemplateSelector, handleImageClick, { handleDeleteButtonClick, handleLikeClick }) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._id = data._id;
    this.likes = data.likes;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLikeClick = handleLikeClick; 
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

  deleteCard() {
    this._card.remove();
    this._card = null;
  };

  setLike() {

  };
  
  _handleLikeButton() {
    this._likeButton.classList.toggle('card__like_liked');
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleImageClick());
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._deleteButton.addEventListener('click', () => this._handleDeleteButtonClick(this._id));
  };
}