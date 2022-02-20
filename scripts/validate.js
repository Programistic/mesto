/* В файле validate.js осуществляется проверка валидности полей ввода во всплывающих окнах - popup */

/* включение валидации попапа */
const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement, rest); // устанавливаем слушатель событий на каждое поле ввода на выбранной форме
  });
};

/* установка слушателей на поля ввода */
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)); // выбираем все поля ввода на переданной в функцию форме
  const buttonElement = formElement.querySelector(submitButtonSelector); // выбираем элемент отправки формы на переданной в функцию форме
  inputList.forEach((inputElement) => { // здесь создаём inputElement - поле ввода
    inputElement.addEventListener('input', () => { // вешаем слушатель событий на каждое поле ввода на форме
      checkInputValidity(formElement, inputElement, rest); // проверяем валидность после ввода каждого символа
      toggleButtonState(inputList, buttonElement, rest); // если не валидно - меняем статус кнопки отправки формы на неактивную
    });
  });
};

/* проверка валидности вводимых данных */
const checkInputValidity = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest); // показываем сообщения об ошибках
  } else {
    hideInputError(formElement, inputElement, rest); // скрываем сообщения об ошибках
  }
};

/* вывод сообщения об ошибке ввода плюс красная линия под полем ввода */
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass) // подчёркиваем красным поле ввода
  errorElement.textContent = errorMessage; // текст сообщения об ошибке ввода
  errorElement.classList.add(errorClass); // показываем сообщение об ошибке ввода
};

/* скрываем сообщение об ошибке и убираем красную линию под полем ввода */
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass); // убираем красное подчёркивание поля ввода
  errorElement.classList.remove(errorClass); // убираем сообщение об ошибке ввода
  errorElement.textContent = ''; // очищаем текст сообщения об ошибке ввода
};

/* меняем статус кнопки отправки формы (активная - неактивная) */
const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
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
