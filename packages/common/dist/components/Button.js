"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Button = function (_a) {
    var _b = _a.onPress, onPress = _b === void 0 ? function () { } : _b, _c = _a.children, children = _c === void 0 ? '' : _c, _d = _a.outline, outline = _d === void 0 ? false : _d, _e = _a.isBig, isBig = _e === void 0 ? false : _e;
    var containerStyles = [styles.container, outline && styles.containerOutlined, isBig && styles.bigContainer];
    var textStyles = [styles.text, outline && styles.textOutlined, isBig && styles.bigText];
    return (react_1.default.createElement(react_native_1.TouchableHighlight, { onPress: onPress, style: containerStyles },
        react_1.default.createElement(react_native_1.Text, { style: textStyles }, children)));
};
exports.Button = Button;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: '#f00',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50
    },
    containerOutlined: {
        borderWidth: 2,
        borderColor: '#000',
    },
    bigContainer: {
        width: 150,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    textOutlined: {
        fontWeight: 'bold',
    },
    bigText: {
        fontSize: 25,
    },
});
