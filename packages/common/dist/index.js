"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var App = function () {
    var _a = (0, react_1.useState)(0), counter = _a[0], setCounter = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.centeredText }, "Welcome to RN"),
        react_1.default.createElement(react_native_1.Button, { title: "decrement", onPress: function () { return setCounter(function (prev) { return --prev; }); } }, "-"),
        react_1.default.createElement(react_native_1.Text, { style: styles.centeredText }, counter),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCounter(function (prev) { return ++prev; }); } }, "+")));
};
exports.App = App;
var styles = react_native_1.StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15,
    },
    centeredText: {
        textAlign: 'center',
    }
});
