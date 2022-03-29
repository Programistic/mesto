// PopupWithForm.js, создаётся класс, который дополняет родительский класс обработчиком сабмита формы, собирает данные всех полей формы в массив и сбрасывает поля формы при закрытии.

import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
  }

  // возвращает массив значений из всех полей ввода формы
  _getInputValues() {
    const inputs = [...this._form.querySelectorAll('.form__input')];
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => { event.preventDefault(), this._handleFormSubmit(this._getInputValues()) });
  }
}