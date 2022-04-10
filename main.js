(()=>{"use strict";var e="cohort-39",t="https://mesto.nomoreparties.co/v1/".concat(e,"/cards"),n="https://mesto.nomoreparties.co/v1/".concat(e,"/users/me"),r="https://mesto.nomoreparties.co/v1/".concat(e,"/users/me/avatar"),o=document.querySelector(".profile"),i=o.querySelector(".profile__user-name"),a=o.querySelector(".profile__user-info"),u=o.querySelector(".profile__avatar"),c=o.querySelector(".profile__button-edit"),s=o.querySelector(".profile__button-add"),l=o.querySelector(".profile__edit-icon"),f=document.querySelector(".popup_role_edit"),p=f.querySelector(".form"),h=f.querySelector(".form__input_role_user-name"),y=f.querySelector(".form__input_role_user-info"),d=document.querySelector(".popup_role_create").querySelector(".form"),_=document.querySelector(".popup_role_avatar-update").querySelector(".form"),v=(document.querySelector(".popup_role_confirm"),document.querySelector(".cards")),m={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userURL=t,this._cardURL=n,this._avatarURL=r,this._token=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch(this._userURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch(this._cardURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch(this._userURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e["user-name"],about:e["user-info"]})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setAvatar",value:function(e){return fetch(this._avatarURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e["avatar-image"]})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setCard",value:function(e){return fetch(this._cardURL,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e["place-name"],link:e["place-image"]})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userInfo=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{editUserName:this._userName.textContent,editUserInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplate=document.querySelector(n).content.querySelector(".card"),this._name=t.name,this._link=t.link,this._alt=t.name,this._handleImageClick=r}var t,n;return t=e,(n=[{key:"createCard",value:function(){return this._card=this._cardTemplate.cloneNode(!0),this._cardTitle=this._card.querySelector(".card__title"),this._cardImage=this._card.querySelector(".card__image"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._likeButton=this._card.querySelector(".card__like"),this._deleteButton=this._card.querySelector(".card__button-delete"),this._setEventListeners(),this._card}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("card__like_liked")}},{key:"_handleDeleteButton",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){return e._handleLikeButton()})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteButton()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(){return P(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image"),r=this._popup.querySelector(".popup__image-caption");n.src=t,r.textContent=e,R(A(a.prototype),"open",this).call(this)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function H(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".form"),n._inputs=function(e){if(Array.isArray(e))return D(e)}(r=n._form.querySelectorAll(".form__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){z(M(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;z(M(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add(this._settings.inactiveButtonClass):this._buttonElement.classList.remove(this._settings.inactiveButtonClass)}},{key:"resetInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Q=new K(m,p),W=new K(m,d),X=new K(m,_),Y=new g(n,t,r,"fed91f6d-1f71-4682-bc63-ccd602fc60c4"),Z=function(e){return new O(e,".template-card",(function(){return ee.open(e.name,e.link)})).createCard()};Q.enableValidation(),W.enableValidation(),X.enableValidation();var ee=new x(".popup_role_image-display"),te=new $(".popup_role_edit",(function(e){Y.setUserInfo(e).then((function(e){oe.setUserInfo(e.name,e.about)})),te.close()})),ne=new $(".popup_role_create",(function(e){Y.setCard(e).then((function(e){var t=Z(e);v.prepend(t)})),ne.close()})),re=new $(".popup_role_avatar-update",(function(e){Y.setAvatar(e).then((function(e){oe.setUserAvatar(e.avatar)})),re.close()})),oe=new w({userNameSelector:i,userInfoSelector:a,userAvatarSelector:u});Y.getUserInfo().then((function(e){oe.setUserInfo(e.name,e.about),oe.setUserAvatar(e.avatar)})),Y.getInitialCards().then((function(e){var t=new E({items:e,renderer:function(e){var n=Z(e);t.addItem(n)}},v);t.renderItems()})),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),c.addEventListener("click",(function(){var e;Q.resetInputError(),e=oe.getUserInfo(),h.value=e.editUserName,y.value=e.editUserInfo,Q.toggleButtonState(),te.open()})),s.addEventListener("click",(function(){W.resetInputError(),W.toggleButtonState(),ne.open()})),l.addEventListener("click",(function(){X.resetInputError(),X.toggleButtonState(),re.open()}))})();