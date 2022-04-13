// PopupWithForm.js, создаётся класс, который дополняет родительский класс обработчиком сабмита формы, собирает данные всех полей формы в массив и сбрасывает поля формы при закрытии.

import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, submitLabel) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._inputs = [...this._form.querySelectorAll('.form__input')];
    this._formSubmit = this._form.querySelector('.form__submit');
    this._submitLabel = submitLabel;
  }

  // возвращает массив значений из всех полей ввода формы
  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  open() {
    super.open();
    this._formSubmit.textContent = this._submitLabel;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _changeFormSubmitLabel() {
    this._formSubmit.textContent = 'Сохранение ...';
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => { event.preventDefault(), this._changeFormSubmitLabel(), this._handleFormSubmit(this._getInputValues()) });
  }
}