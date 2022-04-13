// Card.js, создаётся класс карточки с названием, изображением, кнопками лайка и удаления

export class Card {
  constructor(data, userID, cardTemplateSelector, handleImageClick, { handleDeleteButtonClick, handleLikeClick }) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._userID = userID;
    this._ownerID = data.owner._id;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLikeClick = handleLikeClick;
  }

  /* создание новой карточки по шаблону */
  createCard() {
    this._card = this._cardTemplate.cloneNode(true);
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardImage = this._card.querySelector('.card__image');

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._likeButton = this._card.querySelector('.card__like');
    this._deleteButton = this._card.querySelector('.card__button-delete');

    this._counterContainer = this._card.querySelector('.card__like-counter');

    if (this._userID !== this._ownerID) {
      this._deleteButton.classList.add('card__button-delete_inactive');
    }

    this._isLiked = this._isMyLike()

    if (this._isLiked) {
      this._likeButton.classList.add('card__like_liked');
    }

    this.displayNumberLikes(this._likes);

    this._setEventListeners();

    return this._card;
  };

  _isMyLike() {
    const isLiked = (this._likes).some((item) => {
      return item._id === this._userID
    })
    return isLiked; 
  }

  displayNumberLikes(likes) {
    const numberLikes = likes.length;
    if (numberLikes > 0) {
      this._counterContainer.textContent = numberLikes;
    } else {
      this._counterContainer.textContent = '';
    }
  };

  toggleLike() {
    this._likeButton.classList.toggle('card__like_liked');
    this._isLiked = !this._isLiked;
  };

  deleteCard() {
    this._card.remove();
    this._card = null;
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleImageClick());
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id, this._isLiked));
    this._deleteButton.addEventListener('click', () => this._handleDeleteButtonClick(this._id));
  };
}