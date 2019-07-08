"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
function clean(obj) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    return obj;
}
var Pane = function (_a) {
    var children = _a.children, safe = _a.safe, props = __rest(_a, ["children", "safe"]);
    var accessible = props.accessible, accessibilityLabel = props.accessibilityLabel, accessibilityRole = props.accessibilityRole, accessibilityStates = props.accessibilityStates, accessibilityHint = props.accessibilityHint, collapsable = props.collapsable, needsOffscreenAlphaCompositing = props.needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid = props.renderToHardwareTextureAndroid, accessibilityViewIsModal = props.accessibilityViewIsModal, accessibilityActions = props.accessibilityActions, onAccessibilityAction = props.onAccessibilityAction, shouldRasterizeIOS = props.shouldRasterizeIOS, onStartShouldSetResponder = props.onStartShouldSetResponder, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderReject = props.onResponderReject, onResponderMove = props.onResponderMove, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminationRequest = props.onResponderTerminationRequest, onResponderTerminate = props.onResponderTerminate, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onTouchStart = props.onTouchStart, onTouchMove = props.onTouchMove, onTouchEnd = props.onTouchEnd, onTouchCancel = props.onTouchCancel, onTouchEndCapture = props.onTouchEndCapture, otherProps = __rest(props, ["accessible", "accessibilityLabel", "accessibilityRole", "accessibilityStates", "accessibilityHint", "collapsable", "needsOffscreenAlphaCompositing", "renderToHardwareTextureAndroid", "accessibilityViewIsModal", "accessibilityActions", "onAccessibilityAction", "shouldRasterizeIOS", "onStartShouldSetResponder", "onMoveShouldSetResponder", "onResponderEnd", "onResponderGrant", "onResponderReject", "onResponderMove", "onResponderRelease", "onResponderStart", "onResponderTerminationRequest", "onResponderTerminate", "onStartShouldSetResponderCapture", "onMoveShouldSetResponderCapture", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTouchEndCapture"]);
    var viewProps = {
        accessible: accessible,
        accessibilityLabel: accessibilityLabel,
        accessibilityRole: accessibilityRole,
        accessibilityStates: accessibilityStates,
        accessibilityHint: accessibilityHint,
        collapsable: collapsable,
        needsOffscreenAlphaCompositing: needsOffscreenAlphaCompositing,
        renderToHardwareTextureAndroid: renderToHardwareTextureAndroid,
        accessibilityViewIsModal: accessibilityViewIsModal,
        accessibilityActions: accessibilityActions,
        onAccessibilityAction: onAccessibilityAction,
        shouldRasterizeIOS: shouldRasterizeIOS,
        onStartShouldSetResponder: onStartShouldSetResponder,
        onMoveShouldSetResponder: onMoveShouldSetResponder,
        onResponderEnd: onResponderEnd,
        onResponderGrant: onResponderGrant,
        onResponderReject: onResponderReject,
        onResponderMove: onResponderMove,
        onResponderRelease: onResponderRelease,
        onResponderStart: onResponderStart,
        onResponderTerminationRequest: onResponderTerminationRequest,
        onResponderTerminate: onResponderTerminate,
        onStartShouldSetResponderCapture: onStartShouldSetResponderCapture,
        onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchCancel,
        onTouchEndCapture: onTouchEndCapture
    };
    var style = clean(otherProps);
    var paneProps = clean(viewProps);
    var view = (react_1.default.createElement(react_native_1.View, __assign({ style: style }, paneProps), children));
    if (safe) {
        return (react_1.default.createElement(react_native_1.SafeAreaView, { style: { flex: 1 } }, view));
    }
    return view;
};
exports.Hpane = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Pane, __assign({ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }, props), children));
};
exports.Vpane = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Pane, __assign({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }, props), children));
};
exports.Scene = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Pane, __assign({ flex: 1, position: 'relative', paddingTop: react_native_1.Platform.select({ ios: 0, android: 0 }) }, props), children));
};
exports.Footer = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(Pane, __assign({ flex: 1, paddingBottom: 10, justifyContent: 'flex-end' }, props), children));
};
exports.default = Pane;
