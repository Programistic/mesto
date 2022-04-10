// Api.js, создание класса для работы с API

import { avatarURL } from "../utils/constants";

export class Api {
  constructor(userURL, cardURL, avatarURL, token) {
    this._userURL = userURL;
    this._cardURL = cardURL;
    this._avatarURL = avatarURL;
    this._token = token;
  }

  getUserInfo() {
    return fetch(this._userURL, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(this._cardURL, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      })
      .then((initialCards) => {
        return initialCards;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserInfo(userData) {
    return fetch(this._userURL, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userData['user-name'],
        about: userData['user-info']
      })
      })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      })
      .then(userData => {
        return userData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setAvatar(avatarData) {
    return fetch(this._avatarURL, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarData['avatar-image']
      })
      })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      })
      .then(avatarData => {
        return avatarData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setCard(cardData) {
    return fetch(this._cardURL, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardData['place-name'],
        link: cardData['place-image']
      })
      })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      })
      .then((cardData) => {
        return cardData;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
