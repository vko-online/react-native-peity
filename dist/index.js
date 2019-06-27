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
    var style = clean(props);
    var view = (react_1.default.createElement(react_native_1.View, { style: style }, children));
    if (safe) {
        return (react_1.default.createElement(react_native_1.SafeAreaView, { style: { flex: 1 } }, view));
    }
    return view;
};
exports.ScrollPane = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var style = clean(props);
    return (react_1.default.createElement(react_native_1.ScrollView, { contentContainerStyle: style }, children));
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
