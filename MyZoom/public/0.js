(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/routes/inBuiltApps/Chat/chat.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/src/routes/inBuiltApps/Chat/chat.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gx-chat-sidenav-scroll-tab-1 div:first-child,\n.gx-chat-list-scroll div:first-child,\n.gx-chat-sidenav-scroll-tab-2 div:first-child {\n    overflow-x: hidden !important;\n}\n.gx-chat-contact-name {\n    font-size: 15px !important;\n    font-weight: 400 !important;\n}\n.gx-chat-item {\n    padding-top: 0px;\n    padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/appRedux/actions/CommonQuery.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/appRedux/actions/CommonQuery.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/src/appRedux/actions/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/appRedux/actions/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting */ "./resources/js/src/appRedux/actions/Setting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsedSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["updateWindowWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeColorSelection", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeColorSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onNavStyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLayoutTypeChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onLayoutTypeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["switchLanguage"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./resources/js/src/appRedux/actions/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInitUrl", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["setInitUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignUp", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignOut", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFriendsList", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["getFriendsList"]; });

/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ "./resources/js/src/appRedux/actions/Common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["fetchError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_2__["hideMessage"]; });

/* harmony import */ var _CommonQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonQuery */ "./resources/js/src/appRedux/actions/CommonQuery.js");
/* harmony import */ var _CommonQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CommonQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CommonQuery__WEBPACK_IMPORTED_MODULE_3__) if(["toggleCollapsedSideNav","updateWindowWidth","setThemeType","setThemeColorSelection","onNavStyleChange","onLayoutTypeChange","switchLanguage","setInitUrl","userSignUp","userSignIn","getUser","userSignOut","getFriendsList","fetchStart","fetchSuccess","fetchError","showMessage","hideMessage","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CommonQuery__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ "./resources/js/src/components/chat/ChatUserList/UserCell/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/chat/ChatUserList/UserCell/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var UserCell = function UserCell(_ref) {
  var chat = _ref.chat,
      selectedSectionId = _ref.selectedSectionId,
      onSelectUser = _ref.onSelectUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user-item ".concat(selectedSectionId === chat.id ? 'active' : ''),
    onClick: function onClick() {
      onSelectUser(chat);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-status-pos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/assets/images/".concat(chat.thumb),
    className: "gx-size-40",
    alt: chat.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-status gx-small gx-".concat(chat.status)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-name h4"
  }, chat.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-info-des gx-text-truncate"
  }, chat.lastMessage.substring(0, 25) + "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-last-message-time"
  }, chat.lastMessageTime)), chat.unreadMessage > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-bg-primary gx-rounded-circle gx-badge gx-text-white"
  }, chat.unreadMessage)) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCell);

/***/ }),

/***/ "./resources/js/src/components/chat/ChatUserList/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/chat/ChatUserList/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./resources/js/src/components/chat/ChatUserList/UserCell/index.js");



var ChatUserList = function ChatUserList(_ref) {
  var chatUsers = _ref.chatUsers,
      selectedSectionId = _ref.selectedSectionId,
      onSelectUser = _ref.onSelectUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user"
  }, chatUsers.map(function (chat, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      chat: chat,
      selectedSectionId: selectedSectionId,
      onSelectUser: onSelectUser
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatUserList);

/***/ }),

/***/ "./resources/js/src/components/chat/ContactList/UserCell/index.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/chat/ContactList/UserCell/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var UserCell = function UserCell(_ref) {
  var onSelectUser = _ref.onSelectUser,
      selectedSectionId = _ref.selectedSectionId,
      user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user-item ".concat(selectedSectionId === user.id ? 'active' : ''),
    onClick: function onClick() {
      onSelectUser(user);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-status-pos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "/assets/images/".concat(user.Profile_picture),
    className: "gx-size-40",
    alt: "Abbott"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gx-status gx-".concat(user.status)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-contact-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h4 gx-name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-info-des gx-text-truncate"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCell);

/***/ }),

/***/ "./resources/js/src/components/chat/ContactList/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/chat/ContactList/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./resources/js/src/components/chat/ContactList/UserCell/index.js");



var ContactList = function ContactList(_ref) {
  var onSelectUser = _ref.onSelectUser,
      selectedSectionId = _ref.selectedSectionId,
      contactList = _ref.contactList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-user"
  }, contactList.map(function (user, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      user: user,
      selectedSectionId: selectedSectionId,
      onSelectUser: onSelectUser
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./resources/js/src/components/chat/Conversation/ReceivedMessageCell/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/chat/Conversation/ReceivedMessageCell/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var ReceivedMessageCell = function ReceivedMessageCell(_ref) {
  var conversation = _ref.conversation,
      user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-align-self-end",
    src: "/assets/images/".concat(user.Profile_picture),
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-bubble-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-bubble"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-message"
  }, conversation.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-time gx-text-muted gx-text-right gx-mt-2"
  }, conversation.sentAt))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReceivedMessageCell);

/***/ }),

/***/ "./resources/js/src/components/chat/Conversation/SentMessageCell/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/chat/Conversation/SentMessageCell/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var SentMessageCell = function SentMessageCell(_ref) {
  var conversation = _ref.conversation;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-item gx-flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-align-self-end",
    src: "https://via.placeholder.com/150x150",
    alt: conversation.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-bubble-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-bubble"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-message"
  }, conversation.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-time gx-text-muted gx-text-right gx-mt-2"
  }, conversation.sentAt))));
};

/* harmony default export */ __webpack_exports__["default"] = (SentMessageCell);

/***/ }),

/***/ "./resources/js/src/components/chat/Conversation/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/chat/Conversation/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReceivedMessageCell/index */ "./resources/js/src/components/chat/Conversation/ReceivedMessageCell/index.js");
/* harmony import */ var _SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SentMessageCell/index */ "./resources/js/src/components/chat/Conversation/SentMessageCell/index.js");




var Conversation = function Conversation(_ref) {
  var conversationData = _ref.conversationData,
      selectedUser = _ref.selectedUser;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.Echo.join("Chat_".concat(selectedUser.id)).here(function (users) {
      console.log(users);
    }).listen('MessageSent', function (e) {
      console.log(e.message);
    });
  }, [selectedUser]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gx-chat-main-content"
  }, conversationData.map(function (conversation, index) {
    return conversation.type === 'sent' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      conversation: conversation
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      conversation: conversation,
      user: selectedUser
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Conversation);

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Chat/chat.css":
/*!***********************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Chat/chat.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./chat.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/routes/inBuiltApps/Chat/chat.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Chat/data/chatUsers.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Chat/data/chatUsers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: 'Alex Dolgove',
  thumb: "DefaultUser.png",
  status: 'away',
  mood: '',
  lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  unreadMessage: '',
  lastMessageTime: '20 min ago',
  recent: false
}]);

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Chat/data/conversationList.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Chat/data/conversationList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 1,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 2,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }]
}, {
  'id': 3,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }]
}, {
  'id': 4,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 5,
  'conversationData': [{
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 6,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 7,
  'conversationData': [{
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }]
}, {
  'id': 8,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 9,
  'conversationData': [{
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 10,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 11,
  'conversationData': [{
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/routes/inBuiltApps/Chat/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/routes/inBuiltApps/Chat/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./resources/js/src/util/CustomScrollbars.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/chat/ChatUserList */ "./resources/js/src/components/chat/ChatUserList/index.js");
/* harmony import */ var _data_conversationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/conversationList */ "./resources/js/src/routes/inBuiltApps/Chat/data/conversationList.js");
/* harmony import */ var _components_chat_Conversation_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/chat/Conversation/index */ "./resources/js/src/components/chat/Conversation/index.js");
/* harmony import */ var _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/chatUsers */ "./resources/js/src/routes/inBuiltApps/Chat/data/chatUsers.js");
/* harmony import */ var _components_chat_ContactList_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/chat/ContactList/index */ "./resources/js/src/components/chat/ContactList/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./resources/js/src/util/IntlMessages.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/SearchBox */ "./resources/js/src/components/SearchBox/index.js");
/* harmony import */ var _components_CircularProgress_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/CircularProgress/index */ "./resources/js/src/components/CircularProgress/index.js");
/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat.css */ "./resources/js/src/routes/inBuiltApps/Chat/chat.css");
/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _appRedux_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../appRedux/actions */ "./resources/js/src/appRedux/actions/index.js");
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
















var TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;

var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var user = JSON.parse(localStorage.getItem('user'));
      localStorage.getItem('tokens') && this.props.getFriends(user).then(function () {
        _this2.setState({
          contactList: _this2.props.friendList,
          user: _this2.props.authUser
        });
      });
    } //FIXME:: fix the filters of contact and users

  }]);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _super.call(this, props);

    _this.filterContact = function (userName) {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (user) {
          return !user.recent;
        });
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (user) {
        return !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1;
      });
    };

    _this.filterUsers = function (userName) {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (user) {
          return user.recent;
        });
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (user) {
        return user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1;
      });
    };

    _this.Communication = function () {
      var _this$state = _this.state,
          message = _this$state.message,
          selectedUser = _this$state.selectedUser,
          conversation = _this$state.conversation;
      var conversationData = conversation.conversationData;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-main-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-d-block gx-d-lg-none gx-chat-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-chat",
        onClick: _this.onToggleDrawer.bind(_assertThisInitialized(_this))
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-main-header-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-avatar gx-mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-status-pos"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: "/assets/images/".concat(selectedUser.Profile_picture),
        className: "gx-rounded-circle gx-size-60",
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-status gx-".concat(selectedUser.status)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-contact-name"
      }, selectedUser.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-list-scroll"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_chat_Conversation_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        conversationData: conversationData,
        selectedUser: selectedUser
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-main-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-flex-row gx-align-items-center",
        style: {
          maxHeight: 51
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "required",
        className: "gx-border-0 ant-input gx-chat-textarea",
        onKeyUp: _this._handleKeyPress.bind(_assertThisInitialized(_this)),
        onChange: _this.updateMessageValue.bind(_assertThisInitialized(_this)),
        value: message,
        placeholder: "Type and hit enter to send message"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-sent",
        onClick: _this.submitComment.bind(_assertThisInitialized(_this))
      }))));
    };

    _this.AppUsersInfo = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-bg-grey-light gx-chat-sidenav-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-user-hd gx-mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "gx-icon-btn icon icon-arrow-left",
        onClick: function onClick() {
          _this.setState({
            userState: 1
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-user gx-chat-user-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-avatar gx-mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: "/assets/images/".concat(_this.state.user.Profile_picture),
        className: "gx-size-60",
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-user-name h4 gx-my-2"
      }, _this.state.user.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-p-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-form-group gx-mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Mood"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        fullWidth: true,
        id: "exampleTextarea",
        multiline: true,
        rows: 3,
        onKeyUp: _this._handleKeyPress.bind(_assertThisInitialized(_this)),
        onChange: _this.updateMessageValue.bind(_assertThisInitialized(_this)),
        defaultValue: "it's a status....not your diary...",
        placeholder: "Status",
        margin: "none"
      })))))));
    };

    _this.ChatUsers = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-user-hd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-avatar gx-mr-3",
        onClick: function onClick() {
          _this.setState({
            userState: 2
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-status-pos"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        id: "avatar-button",
        src: "/assets/images/".concat(_this.props.authUser.Profile_picture),
        className: "gx-size-50",
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-status gx-online"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-user-info gx-flex-column gx-justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "gx-mb-0"
      }, _this.props.authUser.name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-module-user-detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gx-text-grey gx-link"
      }, " ", _this.props.authUser.email, " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-search-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        styleName: "gx-chat-search-bar gx-lt-icon-search-bar-lg",
        placeholder: "Search or start new chat",
        onChange: _this.updateSearchChatUser.bind(_assertThisInitialized(_this)),
        value: _this.state.searchChatUser
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
        className: "gx-tabs-half",
        defaultActiveKey: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.chatUser"
        }),
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.chatUser"
        }),
        key: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll-tab-1"
      }, _this.state.chatUsers.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-p-5"
      }, _this.state.userNotFound) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        chatUsers: _this.state.chatUsers,
        selectedSectionId: _this.state.selectedSectionId,
        onSelectUser: _this.onSelectUser.bind(_assertThisInitialized(_this))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.contacts"
        }),
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.contacts"
        }),
        key: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll-tab-2"
      }, _this.state.contactList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-p-5"
      }, _this.state.userNotFound) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_chat_ContactList_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contactList: _this.state.contactList,
        selectedSectionId: _this.state.selectedSectionId,
        onSelectUser: _this.onSelectUser.bind(_assertThisInitialized(_this))
      }))))));
    };

    _this._handleKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this.submitComment();
      }
    };

    _this.handleChange = function (event, value) {
      _this.setState({
        selectedTabIndex: value
      });
    };

    _this.handleChangeIndex = function (index) {
      _this.setState({
        selectedTabIndex: index
      });
    };

    _this.onSelectUser = function (user) {
      _this.setState({
        loader: true,
        selectedSectionId: user.id,
        drawerState: _this.props.drawerState,
        selectedUser: user,
        conversation: _this.state.conversationList.find(function (data) {
          return data.id === user.id;
        })
      });

      setTimeout(function () {
        _this.setState({
          loader: false
        });
      }, 1500);
    };

    _this.showCommunication = function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-box"
      }, _this.state.selectedUser === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-comment-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-fs-80"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon icon-chat gx-text-muted"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "gx-text-muted"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "chat.selectUserChat"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "gx-d-block gx-d-lg-none",
        type: "primary",
        onClick: _this.onToggleDrawer.bind(_assertThisInitialized(_this))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "chat.selectContactChat"
      }))) : _this.Communication());
    };

    _this.state = {
      user: {},
      loader: false,
      userNotFound: 'No user found',
      drawerState: false,
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      contactList: props.friendList,
      //users.filter((user) => !user.recent),
      selectedUser: null,
      message: '',
      chatUsers: _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (user) {
        return user.recent;
      }),
      conversationList: _data_conversationList__WEBPACK_IMPORTED_MODULE_5__["default"],
      conversation: null
    };
    return _this;
  }

  _createClass(Chat, [{
    key: "submitComment",
    value: function submitComment() {
      var _this3 = this;

      if (this.state.message !== '') {
        var updatedConversation = this.state.conversation.conversationData.concat({
          'type': 'sent',
          'message': this.state.message,
          'sentAt': moment__WEBPACK_IMPORTED_MODULE_3___default()().format('hh:mm A')
        });
        this.setState({
          conversation: _objectSpread(_objectSpread({}, this.state.conversation), {}, {
            conversationData: updatedConversation
          }),
          message: '',
          conversationList: this.state.conversationList.map(function (conversationData) {
            if (conversationData.id === _this3.state.conversation.id) {
              return _objectSpread(_objectSpread({}, _this3.state.conversation), {}, {
                conversationData: updatedConversation
              });
            } else {
              return conversationData;
            }
          })
        });
      }
    }
  }, {
    key: "updateMessageValue",
    value: function updateMessageValue(evt) {
      this.setState({
        message: evt.target.value
      });
    }
  }, {
    key: "updateSearchChatUser",
    value: function updateSearchChatUser(evt) {
      this.setState({
        searchChatUser: evt.target.value,
        contactList: this.filterContact(evt.target.value),
        chatUsers: this.filterUsers(evt.target.value)
      });
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
      var _this$state2 = this.state,
          loader = _this$state2.loader,
          userState = _this$state2.userState,
          drawerState = _this$state2.drawerState;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-main-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-app-module gx-chat-module"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-module-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-d-block gx-d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
        placement: "left",
        closable: false,
        visible: drawerState,
        onClose: this.onToggleDrawer.bind(this)
      }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-chat-sidenav gx-d-none gx-d-lg-flex"
      }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo()), loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gx-loader-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CircularProgress_index__WEBPACK_IMPORTED_MODULE_11__["default"], null)) : this.showCommunication())));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    friendList: state.commonQuery.friendList,
    loading: state.commonData.loading,
    authUser: state.auth.authUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getFriends: function getFriends(id) {
      return dispatch(Object(_appRedux_actions__WEBPACK_IMPORTED_MODULE_14__["getFriendsList"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(Chat));

/***/ })

}]);