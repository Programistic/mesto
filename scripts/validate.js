/* В файле validate.js осуществляется проверка валидности полей ввода во всплывающих окнах - popup */

/* включение валидации попапа */
const enableValidation = (popup) => {
  const formElement = popup.querySelector('.form');
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement); // устанавливаем слушатель событий на каждое поле ввода на выбранной форме
};

/* проверка валидности полей ввода и изменение статуса кнопки отправки формы */
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input')); // выбираем все поля ввода на переданной в функцию форме
  const buttonElement = formElement.querySelector('.form__submit'); // выбираем элемент отправки формы на переданной в функцию форме
  inputList.forEach((inputElement) => { // здесь создаём inputElement - поле ввода
    hideInputError(formElement, inputElement); // скрываем сообщения об ошиках (красноту)
    toggleButtonState(inputList, buttonElement); // если не валидно - меняем статус кнопки отправки формы на неактивную
    inputElement.addEventListener('input', () => { // вешаем слушатель событий на каждое поле ввода на форме
      checkInputValidity(formElement, inputElement); // проверяем валидность после ввода каждого символа
      toggleButtonState(inputList, buttonElement); // если не валидно - меняем статус кнопки отправки формы на неактивную
    });
  });
};

/* проверка валидности вводимых данных */
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage); // показываем сообщения об ошибках
  } else {
    hideInputError(formElement, inputElement); // скрываем сообщения об ошибках
  }
};

/* вывод сообщения об ошибке ввода плюс красная линия под полем ввода */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error') // подчёркиваем красным поле ввода
  errorElement.textContent = errorMessage; // текст сообщения об ошибке ввода
  errorElement.classList.add('form__input-error_active'); // показываем сообщение об ошибке ввода
};

/* скрываем сообщение об ошибке и убираем красную линию под полем ввода */
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error'); // убираем красное подчёркивание поля ввода
  errorElement.classList.remove('form__input-error_active'); // убираем сообщение об ошибке ввода
  errorElement.textContent = ''; // очищаем текст сообщения об ошибке ввода
};

/* меняем статус кнопки отправки формы (активная - неактивная) */
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
};

/* возвращает значение свойства valid первого невалидного элемента */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};