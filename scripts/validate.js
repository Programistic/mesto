/* В файле validate.js осуществляется проверка валидности полей ввода во всплывающих окнах - popup */

/* включение валидации попапа */
const enableValidation = (valueObject) => {
  const formInput = valueObject.inputSelector;
  const formSubmit = valueObject.submitButtonSelector;
  const formInputError = valueObject.inputErrorClass;
  const formInputErrorActive = valueObject.errorClass;
  const buttonInactive = valueObject.inactiveButtonClass;
  const formList = Array.from(document.querySelectorAll(valueObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement, formInput, formSubmit, formInputError, formInputErrorActive, buttonInactive); // устанавливаем слушатель событий на каждое поле ввода на выбранной форме
  });
};

/* установка слушателей на поля ввода */
const setEventListeners = (formElement, formInput, formSubmit, formInputError, formInputErrorActive, buttonInactive) => {
  const inputList = Array.from(formElement.querySelectorAll(formInput)); // выбираем все поля ввода на переданной в функцию форме
  const buttonElement = formElement.querySelector(formSubmit); // выбираем элемент отправки формы на переданной в функцию форме
  inputList.forEach((inputElement) => { // здесь создаём inputElement - поле ввода
    //hideInputError(formElement, inputElement, formInputError, formInputErrorActive); // скрываем сообщения об ошиках (красноту)
    //toggleButtonState(inputList, buttonElement, buttonInactive); // если не валидно - меняем статус кнопки отправки формы на неактивную
    inputElement.addEventListener('input', () => { // вешаем слушатель событий на каждое поле ввода на форме
      checkInputValidity(formElement, inputElement, formInputError, formInputErrorActive); // проверяем валидность после ввода каждого символа
      toggleButtonState(inputList, buttonElement, buttonInactive); // если не валидно - меняем статус кнопки отправки формы на неактивную
    });
  });
};

/* проверка валидности вводимых данных */
const checkInputValidity = (formElement, inputElement, formInputError, formInputErrorActive) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formInputError, formInputErrorActive); // показываем сообщения об ошибках
  } else {
    hideInputError(formElement, inputElement, formInputError, formInputErrorActive); // скрываем сообщения об ошибках
  }
};

/* вывод сообщения об ошибке ввода плюс красная линия под полем ввода */
const showInputError = (formElement, inputElement, errorMessage, formInputError, formInputErrorActive) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formInputError) // подчёркиваем красным поле ввода
  errorElement.textContent = errorMessage; // текст сообщения об ошибке ввода
  errorElement.classList.add(formInputErrorActive); // показываем сообщение об ошибке ввода
};

/* скрываем сообщение об ошибке и убираем красную линию под полем ввода */
const hideInputError = (formElement, inputElement, formInputError, formInputErrorActive) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formInputError); // убираем красное подчёркивание поля ввода
  errorElement.classList.remove(formInputErrorActive); // убираем сообщение об ошибке ввода
  errorElement.textContent = ''; // очищаем текст сообщения об ошибке ввода
};

/* меняем статус кнопки отправки формы (активная - неактивная) */
const toggleButtonState = (inputList, buttonElement, buttonInactive) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(buttonInactive);
  } else {
    buttonElement.classList.remove(buttonInactive);
  }
};

/* возвращает значение свойства valid первого невалидного элемента */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});