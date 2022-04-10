// PopupWithEmptyForm.js, создаётся класс, который дополняет родительский класс обработчиком сабмита формы и возращает id удаляемой карточки.

import { Popup } from './Popup.js';

export class PopupWithEmptyForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
  }

  setID(cardID) {
    this._cardID = cardID;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => { event.preventDefault(), this._handleFormSubmit(this._cardID) });
  }
}