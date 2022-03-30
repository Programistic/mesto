// UserInfo.js создаётся класс, отвечающий за управление отображением информации о пользователе на странице.

export class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }
  
  getUserInfo() {
    return {
      editUserName: this._userName.textContent,
      editUserInfo: this._userInfo.textContent
    };
  }

  setUserInfo(userNameValue, userInfoValue) {
    this._userName.textContent = userNameValue;
    this._userInfo.textContent = userInfoValue;
  }
}