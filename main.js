(()=>{"use strict";var e="cohort-39",t="https://mesto.nomoreparties.co/v1/".concat(e,"/cards"),n="https://mesto.nomoreparties.co/v1/".concat(e,"/users/me"),r=document.querySelector(".profile"),o=r.querySelector(".profile__user-name"),i=r.querySelector(".profile__user-info"),u=r.querySelector(".profile__avatar"),a=r.querySelector(".profile__button-edit"),c=r.querySelector(".profile__button-add"),s=document.querySelector(".popup_role_edit"),l=s.querySelector(".form"),f=s.querySelector(".form__input_role_user-name"),p=s.querySelector(".form__input_role_user-info"),h=document.querySelector(".popup_role_create").querySelector(".form"),y=document.querySelector(".cards"),d={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userURL=t,this._cardURL=n,this._token=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return fetch(this._userURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch(this._cardURL,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e){fetch(this._userURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e["user-name"],about:e["user-info"]})})}}],n&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userInfo=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{editUserName:this._userName.textContent,editUserInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardTemplate=document.querySelector(n).content.querySelector(".card"),this._name=t.name,this._link=t.link,this._alt=t.name,this._handleImageClick=r}var t,n;return t=e,(n=[{key:"createCard",value:function(){return this._card=this._cardTemplate.cloneNode(!0),this._cardTitle=this._card.querySelector(".card__title"),this._cardImage=this._card.querySelector(".card__image"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._likeButton=this._card.querySelector(".card__button-like"),this._deleteButton=this._card.querySelector(".card__button-delete"),this._setEventListeners(),this._card}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("card__button-like_liked")}},{key:"_handleDeleteButton",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){return e._handleLikeButton()})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteButton()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(){return j(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image"),r=this._popup.querySelector(".popup__image-caption");n.src=t,r.textContent=e,C(B(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(O);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function z(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".form"),n._inputs=function(e){if(Array.isArray(e))return A(e)}(r=n._form.querySelectorAll(".form__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){N(F(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;N(F(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(O);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add(this._settings.inactiveButtonClass):this._buttonElement.classList.remove(this._settings.inactiveButtonClass)}},{key:"resetInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),$=new J(d,l),G=new J(d,h),K=function(e){return new S(e,".template-card",(function(){return W.open(e.name,e.link)})).createCard()},Q=function(){ee.getUserInfo().then((function(e){Z.setUserInfo(e.name,e.about),Z.setUserAvatar(e.avatar)}))};$.enableValidation(),G.enableValidation();var W=new T(".popup_role_image-display"),X=new M(".popup_role_edit",(function(e){ee.setUserInfo(e),Q(),X.close()})),Y=new M(".popup_role_create",(function(e){var t=function(e){return{name:e["place-name"],link:e["place-image"]}}(e),n=K(t);y.prepend(n),Y.close()})),Z=new b({userNameSelector:o,userInfoSelector:i,userAvatarSelector:u}),ee=new v(n,t,"fed91f6d-1f71-4682-bc63-ccd602fc60c4");Q(),ee.getInitialCards().then((function(e){var t=new w({items:e,renderer:function(e){var n=K(e);t.addItem(n)}},y);t.renderItems()})),W.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),a.addEventListener("click",(function(){var e;$.resetInputError(),e=Z.getUserInfo(),f.value=e.editUserName,p.value=e.editUserInfo,$.toggleButtonState(),X.open()})),c.addEventListener("click",(function(){G.resetInputError(),G.toggleButtonState(),Y.open()}))})();