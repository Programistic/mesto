// Section.js, создаётся класс отвечающий за отрисовку элементов на странице

export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items; // массив данных добавляется при инициализации класса
    this._renderer = renderer; // через этот метод функция-колбэк передаёт разметку
    this._container = document.querySelector(containerSelector); // созданные элементы добавятся в этот контейнер
  }

  // отрисовывает все элементы
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}