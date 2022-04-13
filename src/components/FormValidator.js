export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector)); // массив полей ввода
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }

  /* возврат значения свойства valid первого невалидного элемента */
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  /* проверка валидности вводимых данных */
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage); // показываем сообщения об ошибках
    } else {
      this._hideInputError(inputElement); // скрываем сообщения об ошибках
    }
  };

  /* вывод сообщения об ошибке ввода плюс красная линия под полем ввода */
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass) // подчёркиваем красным поле ввода
    errorElement.textContent = errorMessage; // текст сообщения об ошибке ввода
    errorElement.classList.add(this._settings.errorClass); // показываем сообщение об ошибке ввода
  };
  
  /* удаление сообщения об ошибке и красной линии под полем ввода */
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass); // убираем красное подчёркивание поля ввода
    errorElement.classList.remove(this._settings.errorClass); // убираем сообщение об ошибке ввода
    errorElement.textContent = ''; // очищаем текст сообщения об ошибке ввода
  };

  /* изменение статуса кнопки отправки формы (активная - неактивная) */
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  /* удаление сообщений об ошибке при открытии попап */
  resetInputError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    }); 
  };

  /* включение валидации */
  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  };

  /* установка слушателей на каждое поле ввода формы и вызов методов проверки валидности и изменения статуса кнопки */
  _setEventListeners() {
    this._inputList.forEach((inputElement) => { // здесь создаём inputElement - выбираем одно поле ввода из массива полей ввода
      inputElement.addEventListener('input', () => { // вешаем слушатель событий на каждое поле ввода на форме
        this._checkInputValidity(inputElement); // проверяем валидность после ввода каждого символа
        this.toggleButtonState(); // если не валидно - меняем статус кнопки отправки формы на неактивную
      });
    });
  };

}
