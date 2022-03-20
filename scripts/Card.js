import { popupDisplay, popupDisplayImage, popupDisplayImageCaption, openPopup } from './index.js';

export class Card {
  constructor(data, cardTemplateSelector) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card');
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
  }

  _handleDeleteCard() {
    this._newCard.remove();
  };
  
  _handleLikeButton() {
    this._likeButton.classList.toggle('card__button-like_liked');
  };

  /* инициализация попапа показа фотографии данными из карточки */
  _initialisePopupDisplay = () => {
    popupDisplayImage.src = this._link;
    popupDisplayImageCaption.textContent = this._name;
    popupDisplayImage.alt = this._alt;
  };

  /* создание новой карточки по шаблону */
  createCard() {
    this._newCard = this._cardTemplate.cloneNode(true);
    this._newCardTitle = this._newCard.querySelector('.card__title');
    this._newCardImage = this._newCard.querySelector('.card__image');
    this._newCardTitle.textContent = this._name;
    this._newCardImage.src = this._link;
    this._newCardImage.alt = this._alt;

    this._likeButton = this._newCard.querySelector('.card__button-like');

    this._setEventListeners();

    return this._newCard;
  };

  _setEventListeners() {
    this._newCard.querySelector('.card__button-delete').addEventListener('click', () => {this._handleDeleteCard()});
    this._newCardImage.addEventListener('click', () => {this._initialisePopupDisplay(); openPopup(popupDisplay)});
    this._likeButton.addEventListener('click', () => {this._handleLikeButton()});
  };
}