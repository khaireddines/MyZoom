(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/assets/images/placeholder.jpg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/placeholder.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/placeholder.jpg?33ca66de5a05c818315561055a7d1524";

/***/ }),

/***/ "./resources/js/src/components/AppModuleHeader/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/AppModuleHeader/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AppModuleHeader = function AppModuleHeader(props) {
  var placeholder = props.placeholder,
      onChange = props.onChange,
      value = props.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-module-box-header-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "ant-input gx-border-0",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-search-icon gx-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon icon-search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-module-box-header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-fs-xl"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon icon-apps gx-icon-btn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-fs-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon icon-notification gx-icon-btn"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppModuleHeader);
AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};

/***/ }),

/***/ "./resources/js/src/components/contact/AddContact/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/contact/AddContact/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./resources/js/src/util/IntlMessages.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var AddContact = /*#__PURE__*/function (_React$Component) {
  _inherits(AddContact, _React$Component);

  var _super = _createSuper(AddContact);

  function AddContact(props) {
    var _this;

    _classCallCheck(this, AddContact);

    _this = _super.call(this, props);
    var _props$contact = props.contact,
        id = _props$contact.id,
        thumb = _props$contact.thumb,
        name = _props$contact.name,
        email = _props$contact.email,
        phone = _props$contact.phone,
        designation = _props$contact.designation,
        selected = _props$contact.selected,
        starred = _props$contact.starred,
        frequently = _props$contact.frequently;
    _this.state = {
      id: id,
      thumb: thumb,
      name: name,
      email: email,
      phone: phone,
      designation: designation,
      selected: selected,
      starred: starred,
      frequently: frequently
    };
    return _this;
  }

  _createClass(AddContact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onSaveContact = _this$props.onSaveContact,
          onContactClose = _this$props.onContactClose,
          open = _this$props.open,
          contact = _this$props.contact;
      var _this$state = this.state,
          id = _this$state.id,
          name = _this$state.name,
          email = _this$state.email,
          phone = _this$state.phone,
          designation = _this$state.designation,
          selected = _this$state.selected,
          starred = _this$state.starred,
          frequently = _this$state.frequently;
      var thumb = this.state.thumb;

      if (!thumb) {
        thumb = __webpack_require__(/*! ../../../assets/images/placeholder.jpg */ "./resources/js/src/assets/images/placeholder.jpg");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        title: contact.name === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: "contact.addContact"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: "contact.saveContact"
        }),
        toggle: onContactClose,
        visible: open,
        closable: false,
        onOk: function onOk() {
          if (name === '') return;
          onContactClose();
          onSaveContact({
            'id': id,
            'name': name,
            'thumb': thumb,
            'email': email,
            'phone': phone,
            'designation': designation,
            'selected': selected,
            'starred': starred,
            'frequently': frequently
          });

          _this2.setState({
            'id': id + 1,
            'name': '',
            'thumb': '',
            'email': '',
            'phone': '',
            'designation': ''
          });
        },
        onCancel: onContactClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-modal-box-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-modal-box-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        size: "large",
        src: thumb
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-modal-box-form-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        required: true,
        placeholder: "Name",
        onChange: function onChange(event) {
          return _this2.setState({
            name: event.target.value
          });
        },
        defaultValue: name,
        margin: "none"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "Email",
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        },
        value: email,
        margin: "normal"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "Phone",
        onChange: function onChange(event) {
          return _this2.setState({
            phone: event.target.value
          });
        },
        value: phone,
        margin: "normal"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "Designation",
        onChange: function onChange(event) {
          return _this2.setState({
            designation: event.target.value
          });
        },
        value: designation,
        autosize: {
          minRows: 2,
          maxRows: 6
        },
        margin: "normal"
      })))));
    }
  }]);

  return AddContact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddContact);

/***/ }),

/***/ "./resources/js/src/components/contact/ContactList/ContactCell/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/contact/ContactList/ContactCell/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _AddContact_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AddContact/index */ "./resources/js/src/components/contact/AddContact/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var options = ['Edit', 'Delete'];

var ContactCell = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactCell, _React$Component);

  var _super = _createSuper(ContactCell);

  function ContactCell() {
    var _this;

    _classCallCheck(this, ContactCell);

    _this = _super.call(this);

    _this.onContactClose = function () {
      _this.setState({
        addContactState: false
      });
    };

    _this.onDeleteContact = function (contact) {
      _this.setState({
        addContactState: false
      });

      _this.props.onDeleteContact(contact);
    };

    _this.onEditContact = function () {
      _this.setState({
        addContactState: true
      });
    };

    _this.menus = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        onClick: function onClick(e) {
          if (e.key === 'Edit') {
            _this.onEditContact();
          } else {
            _this.onDeleteContact(_this.props.contact);
          }
        }
      }, options.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          key: option
        }, option);
      }));
    };

    _this.state = {
      addContactState: false
    };
    return _this;
  }

  _createClass(ContactCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          contact = _this$props.contact,
          addFavourite = _this$props.addFavourite,
          onContactSelect = _this$props.onContactSelect,
          onSaveContact = _this$props.onSaveContact;
      var addContactState = this.state.addContactState;
      var name = contact.name,
          thumb = contact.thumb,
          email = contact.email,
          phone = contact.phone,
          designation = contact.designation,
          starred = contact.starred;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-contact-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-list-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        className: "gx-icon-btn",
        checked: contact.selected,
        value: "checkedF",
        onClick: function onClick() {
          onContactSelect(contact);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-d-none gx-d-sm-flex",
        onClick: function onClick() {
          addFavourite(contact);
        }
      }, starred ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-star"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-star-o"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-ml-2 gx-d-none gx-d-sm-flex"
      }, thumb === null || thumb === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        size: "large"
      }, name.charAt(0).toUpperCase()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        size: "large",
        alt: name,
        src: thumb
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-list-info gx-contact-list-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-contact-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "gx-mb-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-text-truncate gx-contact-name"
      }, " ", name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-toolbar-separator"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-text-truncate gx-job-title"
      }, designation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-text-muted"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-email gx-d-inline-block gx-mr-2"
      }, email, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-phone gx-d-inline-block"
      }, phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-contact-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        overlay: this.menus(),
        placement: "bottomRight",
        trigger: ['click']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-ellipse-v"
      })), addContactState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddContact_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: addContactState,
        contact: contact,
        onSaveContact: onSaveContact,
        onContactClose: this.onContactClose,
        onDeleteContact: this.onDeleteContact
      }))));
    }
  }]);

  return ContactCell;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactCell);

/***/ }),

/***/ "./resources/js/src/components/contact/ContactList/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/contact/ContactList/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactCell/index */ "./resources/js/src/components/contact/ContactList/ContactCell/index.js");



var ContactList = function ContactList(_ref) {
  var contactList = _ref.contactList,
      addFavourite = _ref.addFavourite,
      onContactSelect = _ref.onContactSelect,
      onSaveContact = _ref.onSaveContact,
      onDeleteContact = _ref.onDeleteContact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-contact-main-content"
  }, contactList.map(function (contact, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      contact: contact,
      onDeleteContact: onDeleteContact,
      onSaveContact: onSaveContact,
      addFavourite: addFavourite,
      onContactSelect: onContactSelect
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Contact/data/contactList.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Contact/data/contactList.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 1457690400,
  'name': 'Stella Johnson',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'stella.johnson@example.com',
  'phone': '+1-215-659-7529',
  'designation': 'CEO',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690401,
  'name': 'Garry Sobars',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'garry.sobars@example.com',
  'phone': '+1-215-745-7529',
  'designation': 'CFO',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690402,
  'name': 'Alex Dolgove',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'alex.dolgove@example.com',
  'phone': '+1-215-748-7855',
  'designation': 'Designer',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690403,
  'name': 'Domnic Brown',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'domnic.brown@example.com',
  'phone': '+1-215-756-4579',
  'designation': 'PHP Developer',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690404,
  'name': 'Kadir M',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'kadir.m@example.com',
  'phone': '+1-215-659-7586',
  'designation': 'HR Manager',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690405,
  'name': 'John Smith',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'john.smith@example.com',
  'phone': '+1-215-876-8596',
  'designation': 'Marketing Head',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690406,
  'name': 'Domnic Harris',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'domnic.harris@example.com',
  'phone': '+1-215-785-3841',
  'designation': 'BDO',
  'selected': false,
  'starred': true,
  'frequently': false
}, {
  'id': 1457690407,
  'name': 'Jimmy Jo',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jimmy.jo@example.com',
  'phone': '+1-215-456-5863',
  'designation': 'CCO',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690408,
  'name': 'Jimmy Jon',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jimmy.jon@example.com',
  'phone': '+1-215-278-4558',
  'designation': 'Developer',
  'selected': false,
  'starred': true,
  'frequently': false
}, {
  'id': 1457690409,
  'name': 'Jeson Born',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jeson.born@example.com',
  'phone': '+1-215-286-7551',
  'designation': 'UI-UX Designer',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690410,
  'name': 'Steve Smith',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'steve.smith@example.com',
  'phone': '+1-215-586-5862',
  'designation': 'CEO',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690500,
  'name': 'Stella Johnson',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'stella.johnson@example.com',
  'phone': '+1-215-659-7529',
  'designation': 'CEO',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690501,
  'name': 'Garry Sobars',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'garry.sobars@example.com',
  'phone': '+1-215-745-7529',
  'designation': 'CFO',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690502,
  'name': 'Alex Dolgove',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'alex.dolgove@example.com',
  'phone': '+1-215-748-7855',
  'designation': 'Designer',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690503,
  'name': 'Domnic Brown',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'domnic.brown@example.com',
  'phone': '+1-215-756-4579',
  'designation': 'PHP Developer',
  'selected': false,
  'starred': false,
  'frequently': true
}, {
  'id': 1457690404,
  'name': 'Kadir M',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'kadir.m@example.com',
  'phone': '+1-215-659-7586',
  'designation': 'HR Manager',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690505,
  'name': 'John Smith',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'john.smith@example.com',
  'phone': '+1-215-876-8596',
  'designation': 'Marketing Head',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690506,
  'name': 'Domnic Harris',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'domnic.harris@example.com',
  'phone': '+1-215-785-3841',
  'designation': 'BDO',
  'selected': false,
  'starred': true,
  'frequently': false
}, {
  'id': 1457690507,
  'name': 'Jimmy Jo',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jimmy.jo@example.com',
  'phone': '+1-215-456-5863',
  'designation': 'CCO',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690508,
  'name': 'Jimmy Jon',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jimmy.jon@example.com',
  'phone': '+1-215-278-4558',
  'designation': 'Developer',
  'selected': false,
  'starred': true,
  'frequently': false
}, {
  'id': 1457690509,
  'name': 'Jeson Born',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'jeson.born@example.com',
  'phone': '+1-215-286-7551',
  'designation': 'UI-UX Designer',
  'selected': false,
  'starred': false,
  'frequently': false
}, {
  'id': 1457690510,
  'name': 'Steve Smith',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'steve.smith@example.com',
  'phone': '+1-215-586-5862',
  'designation': 'CEO',
  'selected': false,
  'starred': false,
  'frequently': false
}]);

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Contact/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Contact/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./resources/js/src/util/CustomScrollbars.js");
/* harmony import */ var _data_contactList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/contactList */ "./resources/js/src/routes/inBuiltApps/Contact/data/contactList.js");
/* harmony import */ var _components_contact_ContactList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/contact/ContactList */ "./resources/js/src/components/contact/ContactList/index.js");
/* harmony import */ var _components_AppModuleHeader_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AppModuleHeader/index */ "./resources/js/src/components/AppModuleHeader/index.js");
/* harmony import */ var _components_contact_AddContact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/contact/AddContact */ "./resources/js/src/components/contact/AddContact/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./resources/js/src/util/IntlMessages.js");
/* harmony import */ var _util_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/Api */ "./resources/js/src/util/Api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var contactId = 723812738;
var filterOptions = [{
  id: 1,
  name: 'All contacts',
  icon: 'all-contacts'
}, {
  id: 2,
  name: 'Frequently contacted',
  icon: 'frequent'
}, {
  id: 3,
  name: 'Starred contacts',
  icon: 'star'
}];

var Contact = /*#__PURE__*/function (_Component) {
  _inherits(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact() {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this);

    _this.ContactSideBar = function (user) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-side"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-side-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon icon-contacts gx-mr-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "chat.contacts"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-side-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-module-side-scroll"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-add-task"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "gx-btn-block ant-btn",
        type: "primary",
        "aria-label": "add",
        onClick: _this.onAddContact
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon icon-add gx-mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Add New Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-side-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "gx-module-nav"
      }, filterOptions.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: option.id,
          className: "gx-nav-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "gx-link ".concat(option.id === _this.state.selectedSectionId ? 'active' : ''),
          onClick: _this.onFilterOptionSelect.bind(_assertThisInitialized(_this), option)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon icon-".concat(option.icon)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, option.name)));
      }))))));
    };

    _this.addFavourite = function (data) {
      _this.setState({
        alertMessage: data.starred ? 'Contact removed as star' : 'Contact marked as star',
        showMessage: true,
        contactList: _this.state.contactList.map(function (contact) {
          return contact.id === data.id ? _objectSpread(_objectSpread({}, contact), {}, {
            starred: !data.starred
          }) : contact;
        }),
        allContact: _this.state.allContact.map(function (contact) {
          return contact.id === data.id ? _objectSpread(_objectSpread({}, contact), {}, {
            starred: !data.starred
          }) : contact;
        })
      });
    };

    _this.onContactSelect = function (data) {
      data.selected = !data.selected;
      var selectedContacts = 0;

      var contactList = _this.state.contactList.map(function (contact) {
        if (contact.selected) {
          selectedContacts++;
        }

        if (contact.id === data.id) {
          if (contact.selected) {
            selectedContacts++;
          }

          return data;
        } else {
          return contact;
        }
      });

      _this.setState({
        selectedContacts: selectedContacts,
        contactList: contactList
      });
    };

    _this.onAddContact = function () {
      _this.setState({
        addContactState: true
      });
    };

    _this.onContactClose = function () {
      _this.setState({
        addContactState: false
      });
    };

    _this.onFilterOptionSelect = function (option) {
      switch (option.name) {
        case 'All contacts':
          {
            _this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              contactList: _this.state.allContact
            });

            break;
          }

        case 'Frequently contacted':
          {
            _this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              contactList: _this.state.allContact.filter(function (contact) {
                return contact.frequently;
              })
            });

            break;
          }

        case 'Starred contacts':
          {
            _this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              contactList: _this.state.allContact.filter(function (contact) {
                return contact.starred;
              })
            });

            break;
          }

        default:
          break;
      }
    };

    _this.onSaveContact = function (data) {
      _util_Api__WEBPACK_IMPORTED_MODULE_8__["default"].post('/api/addfriend', data).then(function (res) {
        _this.setState({
          alertMessage: res.data,
          showMessage: true
        });
      }); // this.onFilterOptionSelect(this.state.filterOption);
    };

    _this.onDeleteContact = function (data) {
      _this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: _this.state.allContact.filter(function (contact) {
          return contact.id !== data.id;
        }),
        contactList: _this.state.allContact.filter(function (contact) {
          return contact.id !== data.id;
        })
      });
    };

    _this.onDeleteSelectedContact = function () {
      var contacts = _this.state.allContact.filter(function (contact) {
        return !contact.selected;
      });

      _this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: contacts,
        contactList: contacts,
        selectedContacts: 0
      });
    };

    _this.filterContact = function (userName) {
      var filterOption = _this.state.filterOption;

      if (userName === '') {
        _this.setState({
          contactList: _this.state.allContact
        });
      } else {
        var filterContact = _this.state.allContact.filter(function (contact) {
          return contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1;
        });

        if (filterOption === 'All contacts') {
          _this.setState({
            contactList: filterContact
          });
        } else if (filterOption === 'Frequently contacted') {
          _this.setState({
            contactList: filterContact.filter(function (contact) {
              return contact.frequently;
            })
          });
        } else if (filterOption === 'Starred contacts') {
          _this.setState({
            contactList: filterContact.filter(function (contact) {
              return contact.starred;
            })
          });
        }
      }
    };

    _this.handleRequestClose = function () {
      _this.setState({
        showMessage: false
      });
    };

    _this.getAllContact = function () {
      var contactList = _this.state.allContact.map(function (contact) {
        return contact ? _objectSpread(_objectSpread({}, contact), {}, {
          selected: true
        }) : contact;
      });

      _this.setState({
        selectedContacts: contactList.length,
        allContact: contactList,
        contactList: contactList
      });
    };

    _this.getUnselectedAllContact = function () {
      var contactList = _this.state.allContact.map(function (contact) {
        return contact ? _objectSpread(_objectSpread({}, contact), {}, {
          selected: false
        }) : contact;
      });

      _this.setState({
        selectedContacts: 0,
        allContact: contactList,
        contactList: contactList
      });
    };

    _this.state = {
      noContentFoundMessage: 'No Contact found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      // FIXME : you need to get the current user from the redux store
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: "https://via.placeholder.com/150x150"
      },
      searchUser: '',
      filterOption: 'All contacts',
      allContact: _data_contactList__WEBPACK_IMPORTED_MODULE_3__["default"],
      contactList: _data_contactList__WEBPACK_IMPORTED_MODULE_3__["default"],
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "onAllContactSelect",
    value: function onAllContactSelect() {
      var selectAll = this.state.selectedContacts < this.state.contactList.length;

      if (selectAll) {
        this.getAllContact();
      } else {
        this.getUnselectedAllContact();
      }
    }
  }, {
    key: "updateContactUser",
    value: function updateContactUser(evt) {
      this.setState({
        searchUser: evt.target.value
      });
      this.filterContact(evt.target.value);
    }
  }, {
    key: "onToggleDrawer",
    value: function onToggleDrawer() {
      this.setState({
        drawerState: !this.state.drawerState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          user = _this$state.user,
          contactList = _this$state.contactList,
          addContactState = _this$state.addContactState,
          drawerState = _this$state.drawerState,
          selectedContacts = _this$state.selectedContacts,
          alertMessage = _this$state.alertMessage,
          showMessage = _this$state.showMessage,
          noContentFoundMessage = _this$state.noContentFoundMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-main-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-app-module"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-d-block gx-d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
        placement: "left",
        closable: false,
        visible: drawerState,
        onClose: this.onToggleDrawer.bind(this)
      }, this.ContactSideBar())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
      }, this.ContactSideBar(user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-box-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon icon-menu gx-icon-btn",
        "aria-label": "Menu",
        onClick: this.onToggleDrawer.bind(this)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppModuleHeader_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        placeholder: "Search contact",
        notification: false,
        apps: false,
        user: this.state.user,
        onChange: this.updateContactUser.bind(this),
        value: this.state.searchUser
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-box-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-box-topbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        color: "primary",
        className: "gx-icon-btn",
        indeterminate: selectedContacts > 0 && selectedContacts < contactList.length,
        checked: selectedContacts > 0,
        onChange: this.onAllContactSelect.bind(this),
        value: "SelectMail"
      }), selectedContacts > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-trash",
        onClick: this.onDeleteSelectedContact.bind(this)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-module-content-scroll"
      }, contactList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center"
      }, noContentFoundMessage) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact_ContactList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        contactList: contactList,
        addFavourite: this.addFavourite.bind(this),
        onContactSelect: this.onContactSelect.bind(this),
        onDeleteContact: this.onDeleteContact.bind(this),
        onSaveContact: this.onSaveContact.bind(this)
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact_AddContact__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: addContactState,
        contact: {
          // TODO Change the id of the user dynamicly
          'id': '',
          'name': '',
          'thumb': '',
          'email': '',
          'phone': '',
          'designation': '',
          'selected': false,
          'starred': false,
          'frequently': false
        },
        onSaveContact: this.onSaveContact,
        onContactClose: this.onContactClose,
        onDeleteContact: this.onDeleteContact
      }), showMessage && antd__WEBPACK_IMPORTED_MODULE_1__["message"].info( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id"
      }, alertMessage), 3, this.handleRequestClose));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

}]);