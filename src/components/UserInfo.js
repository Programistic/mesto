// UserInfo.js создаётся класс, отвечающий за управление отображением информации о пользователе на странице.

export class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userName = userNameSelector;
    this._userInfo = userInfoSelector;
    this._userAvatar = userAvatarSelector;
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

  setUserAvatar(userAvatarURL) {
    this._userAvatar.src = userAvatarURL;
  }

  setUserID(userID) {
    this._userID = userID;
  }

  getUserID() {
    return this._userID;
  }
}