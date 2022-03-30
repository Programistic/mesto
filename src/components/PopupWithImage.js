// PopupWithImage.js

import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  open(text, link) {
    const image = this._popup.querySelector('.popup__image');
    const imageCaption = this._popup.querySelector('.popup__image-caption');

    image.src = link;
    imageCaption.textContent = text;
 
    super.open();
  }

}