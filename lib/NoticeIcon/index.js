'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NoticeList = require('./NoticeList');

var _NoticeList2 = _interopRequireDefault(_NoticeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'popover': 'antd-pro-notice-icon-popover',
  'noticeButton': 'antd-pro-notice-icon-noticeButton',
  'icon': 'antd-pro-notice-icon-icon',
  'tabs': 'antd-pro-notice-icon-tabs',
  'ant-tabs-nav-scroll': 'antd-pro-notice-icon-ant-tabs-nav-scroll',
  'ant-tabs-bar': 'antd-pro-notice-icon-ant-tabs-bar'
};
var TabPane = _tabs2.default.TabPane;
var NoticeIcon = (_temp2 = _class = function (_PureComponent) {
  _inherits(NoticeIcon, _PureComponent);

  function NoticeIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NoticeIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoticeIcon.__proto__ || Object.getPrototypeOf(NoticeIcon)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (item, tabProps) {
      var onItemClick = _this.props.onItemClick;
      var clickClose = item.clickClose;

      onItemClick(item, tabProps);
      if (clickClose) {
        _this.popover.click();
      }
    }, _this.onClear = function (name) {
      var _this$props = _this.props,
          onClear = _this$props.onClear,
          clearClose = _this$props.clearClose;

      onClear(name);
      if (clearClose) {
        _this.popover.click();
      }
    }, _this.onTabChange = function (tabType) {
      var onTabChange = _this.props.onTabChange;

      onTabChange(tabType);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NoticeIcon, [{
    key: 'getNotificationBox',
    value: function getNotificationBox() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          loading = _props.loading,
          locale = _props.locale;

      if (!children) {
        return null;
      }
      var panes = _react2.default.Children.map(children, function (child) {
        var title = child.props.list && child.props.list.length > 0 ? child.props.title + ' (' + child.props.list.length + ')' : child.props.title;
        return _react2.default.createElement(
          TabPane,
          { tab: title, key: child.props.name },
          _react2.default.createElement(_NoticeList2.default, _extends({}, child.props, {
            data: child.props.list,
            onClick: function onClick(item) {
              return _this2.onItemClick(item, child.props);
            },
            onClear: function onClear() {
              return _this2.onClear(child.props.name);
            },
            title: child.props.title,
            locale: locale
          }))
        );
      });
      return _react2.default.createElement(
        _spin2.default,
        { spinning: loading, delay: 0 },
        _react2.default.createElement(
          _tabs2.default,
          { className: styles.tabs, onChange: this.onTabChange },
          panes
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          className = _props2.className,
          count = _props2.count,
          popupAlign = _props2.popupAlign,
          popupVisible = _props2.popupVisible,
          onPopupVisibleChange = _props2.onPopupVisibleChange,
          bell = _props2.bell;

      var noticeButtonClass = (0, _classnames2.default)(className, styles.noticeButton);
      var notificationBox = this.getNotificationBox();
      var NoticeBellIcon = bell || _react2.default.createElement(_icon2.default, { type: 'bell', className: styles.icon });
      var trigger = _react2.default.createElement(
        'span',
        { className: noticeButtonClass },
        _react2.default.createElement(
          _badge2.default,
          { count: count, style: { boxShadow: 'none' }, className: styles.badge },
          NoticeBellIcon
        )
      );
      if (!notificationBox) {
        return trigger;
      }
      var popoverProps = {};
      if ('popupVisible' in this.props) {
        popoverProps.visible = popupVisible;
      }
      return _react2.default.createElement(
        _popover2.default,
        _extends({
          placement: 'bottomRight',
          content: notificationBox,
          popupClassName: styles.popover,
          trigger: 'click',
          arrowPointAtCenter: true,
          popupAlign: popupAlign,
          onVisibleChange: onPopupVisibleChange
        }, popoverProps, {
          ref: function ref(node) {
            _this3.popover = _reactDom2.default.findDOMNode(node);
          } // eslint-disable-line
        }),
        trigger
      );
    }
  }]);

  return NoticeIcon;
}(_react.PureComponent), _class.Tab = TabPane, _class.defaultProps = {
  onItemClick: function onItemClick() {},
  onPopupVisibleChange: function onPopupVisibleChange() {},
  onTabChange: function onTabChange() {},
  onClear: function onClear() {},
  loading: false,
  clearClose: false,
  locale: {
    emptyText: 'No notifications',
    clear: 'Clear'
  },
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
}, _temp2);
exports.default = NoticeIcon;
module.exports = exports['default'];