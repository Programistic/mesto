(()=>{"use strict";var e="cohort-39",t="https://mesto.nomoreparties.co/v1/".concat(e,"/cards"),r="https://mesto.nomoreparties.co/v1/".concat(e,"/users/me"),n=document.querySelector(".profile"),o=n.querySelector(".profile__user-name"),i=n.querySelector(".profile__user-info"),u=n.querySelector(".profile__avatar"),a=n.querySelector(".profile__button-edit"),c=n.querySelector(".profile__button-add"),s=document.querySelector(".popup_role_edit"),l=s.querySelector(".form"),f=s.querySelector(".form__input_role_user-name"),p=s.querySelector(".form__input_role_user-info"),y=document.querySelector(".popup_role_create").querySelector(".form"),h={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userURL=t,this._cardURL=r,this._token=n}var t,r;return t=e,r=[{key:"getUserInfo",value:function(){return fetch(this._userURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch(this._cardURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getCard",value:function(){}}],r&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){var r=t.userNameSelector,n=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=r,this._userInfo=n,this._userAvatar=o}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{editUserName:this._userName.textContent,editUserInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var k=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplate=document.querySelector(r).content.querySelector(".card"),this._name=t.name,this._link=t.link,this._alt=t.name,this._handleImageClick=n}var t,r;return t=e,(r=[{key:"createCard",value:function(){return this._card=this._cardTemplate.cloneNode(!0),this._cardTitle=this._card.querySelector(".card__title"),this._cardImage=this._card.querySelector(".card__image"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._likeButton=this._card.querySelector(".card__button-like"),this._deleteButton=this._card.querySelector(".card__button-delete"),this._setEventListeners(),this._card}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("card__button-like_liked")}},{key:"_handleDeleteButton",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){return e._handleLikeButton()})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteButton()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=C(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function q(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(o){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return q(this,e)});function u(){return O(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"open",value:function(e,t){var r=this._popup.querySelector(".popup__image"),n=this._popup.querySelector(".popup__image-caption");r.src=t,n.textContent=e,L(B(u.prototype),"open",this).call(this)}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=D(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function V(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(".form"),r._inputs=function(e){if(Array.isArray(e))return U(e)}(n=r._form.querySelectorAll(".form__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){x(z(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;x(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&A(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var $=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var r=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),r.textContent=t,r.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add(this._settings.inactiveButtonClass):this._buttonElement.classList.remove(this._settings.inactiveButtonClass)}},{key:"resetInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),G=new $(h,l),H=new $(h,y),J=function(e){return new k(e,".template-card",(function(){return K.open(e.name,e.link)})).createCard()};G.enableValidation(),H.enableValidation();var K=new R(".popup_role_image-display"),Q=new F(".popup_role_edit",(function(e){X.setUserInfo(e["user-name"],e["user-info"]),Q.close()})),W=new F(".popup_role_create",(function(e){var t=function(e){return{name:e["place-name"],link:e["place-image"]}}(e),r=J(t);section.addItem(r),W.close()})),X=new m({userNameSelector:o,userInfoSelector:i,userAvatarSelector:u}),Y=new _(r,t,"fed91f6d-1f71-4682-bc63-ccd602fc60c4");Y.getInitialCards().then((function(e){var t=new g({items:e,renderer:function(e){var r=J(e);t.addItem(r)}},".cards");t.renderItems()})),Y.getUserInfo().then((function(e){X.setUserInfo(e.name,e.about),X.setUserAvatar(e.avatar)})),K.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),a.addEventListener("click",(function(){var e;G.resetInputError(),e=X.getUserInfo(),f.value=e.editUserName,p.value=e.editUserInfo,G.toggleButtonState(),Q.open()})),c.addEventListener("click",(function(){H.resetInputError(),H.toggleButtonState(),W.open()}))})();