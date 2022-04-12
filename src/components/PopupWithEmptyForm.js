// PopupWithEmptyForm.js, создаётся класс, который наследует методы родительского и вызывает колбэк удаления карточки прн наступлении события submit

import { Popup } from './Popup.js';

export class PopupWithEmptyForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
  }

  changeHandlerFormSubmit(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => { event.preventDefault(), this._handleFormSubmit() });
  }
}