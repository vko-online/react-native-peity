"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
function Line(_a) {
    var data = _a.data, _b = _a.fill, fill = _b === void 0 ? '#c6d9fd' : _b, _c = _a.height, height = _c === void 0 ? 16 : _c, _d = _a.min, min = _d === void 0 ? 0 : _d, max = _a.max, _e = _a.stroke, stroke = _e === void 0 ? '#4d89f9' : _e, _f = _a.strokeWidth, strokeWidth = _f === void 0 ? 1 : _f, _g = _a.width, width = _g === void 0 ? 32 : _g;
    var content = [];
    var values = data.map(function (d) { return Math.max(d, 0); });
    if (values.length === 1)
        values.push(values[0]);
    var _max = Math.max.apply(Math, typeof max === 'undefined' ? values : values.concat(max));
    var _min = Math.min.apply(Math, typeof min === 'undefined' ? values : values.concat(min));
    var _diff = _max - _min;
    var _height = height - strokeWidth;
    function xScale(input) {
        return input * (width / (values.length - 1));
    }
    function yScale(input) {
        var y = _height;
        if (_diff) {
            y -= ((input - min) / _diff) * _height;
        }
        return y + strokeWidth / 2;
    }
    var zero = yScale(Math.max(min, 0));
    var coords = [0, zero];
    for (var i = 0; i < values.length; i++) {
        coords.push(xScale(i), yScale(values[i]));
    }
    coords.push(width, zero);
    if (fill) {
        content.push((react_1.default.createElement(react_native_svg_1.Polygon, { fill: fill, key: 'polygon', points: coords.join(' ') })));
    }
    if (strokeWidth) {
        content.push((react_1.default.createElement(react_native_svg_1.Polyline, { fill: 'none', key: 'polyline', points: coords.slice(2, coords.length - 2).join(' '), stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: 'square' })));
    }
    return (react_1.default.createElement(react_native_svg_1.default, { width: width, height: height }, content));
}
exports.Line = Line;
function Pie(_a) {
    var data = _a.data, _b = _a.fill, fill = _b === void 0 ? ['#ff9900', '#fff4dd', '#ffc66e'] : _b, _c = _a.radius, radius = _c === void 0 ? 8 : _c, _d = _a.max, max = _d === void 0 ? 8 : _d, _e = _a.min, min = _e === void 0 ? 0 : _e, _f = _a.width, width = _f === void 0 ? 30 : _f, _g = _a.height, height = _g === void 0 ? 30 : _g, innerRadius = _a.innerRadius;
    var content = [];
    var _current = typeof data === 'number' ? Math.max(data, min) : Math.max.apply(Math, data);
    var values = typeof data === 'number' ? [_current, Math.max(0, max - _current)] : data;
    var length = values.length;
    var sum = values.reduce(function (a, b) { return a + b; });
    if (!sum) {
        length = 2;
        sum = 1;
        values = [0, 1];
    }
    var diameter = radius * 2;
    var cx = width / 2;
    var cy = height / 2;
    var _radius = Math.min(cx, cy);
    var pi = Math.PI;
    function scale(value, radius) {
        var radians = value / sum * pi * 2 - pi / 2;
        return [
            radius * Math.cos(radians) + cx,
            radius * Math.sin(radians) + cy
        ];
    }
    var cumulative = 0;
    for (var i = 0; i < length; i++) {
        var value = values[i];
        var portion = value / sum;
        if (portion === 0)
            continue;
        if (portion === 1) {
            if (innerRadius) {
                var x2 = cx - 0.01;
                var y1 = cy - _radius;
                var y2 = cy - innerRadius;
                content.push(react_1.default.createElement(react_native_svg_1.Path, { fill: fillFn(fill)(value, i), key: "path-" + i, d: [
                        'M', cx, y1,
                        'A', _radius, _radius, 0, 1, 1, x2, y1,
                        'L', x2, y2,
                        'A', innerRadius, innerRadius, 0, 1, 0, cx, y2
                    ].join(' ') }));
            }
            else {
                content.push(react_1.default.createElement(react_native_svg_1.Circle, { fill: fillFn(fill)(value, i), key: "circle-" + i, cx: cx, cy: cy, r: _radius }));
            }
        }
        else {
            var cumulativePlusValue = cumulative + value;
            var d = ['M'].concat(scale(cumulative, radius), 'A', radius, radius, 0, portion > 0.5 ? 1 : 0, 1, scale(cumulativePlusValue, radius), 'L');
            if (innerRadius) {
                d = d.concat(scale(cumulativePlusValue, innerRadius), 'A', innerRadius, innerRadius, 0, portion > 0.5 ? 1 : 0, 0, scale(cumulative, innerRadius));
            }
            else {
                d.push(cx, cy);
            }
            cumulative += value;
            content.push(react_1.default.createElement(react_native_svg_1.Path, { fill: fillFn(fill)(value, i), key: "path-2-" + i, d: d.join(' ') }));
        }
    }
    return (react_1.default.createElement(react_native_svg_1.default, { width: width || diameter, height: height || diameter }, content));
}
exports.Pie = Pie;
function Bar(_a) {
    var data = _a.data, _b = _a.fill, fill = _b === void 0 ? ['#4D89F9'] : _b, _c = _a.height, height = _c === void 0 ? 16 : _c, _d = _a.min, min = _d === void 0 ? 0 : _d, max = _a.max, _e = _a.padding, padding = _e === void 0 ? 0.1 : _e, _f = _a.width, width = _f === void 0 ? 32 : _f;
    var content = [];
    var values = data.map(function (d) { return Math.max(d, 0); });
    if (values.length === 1)
        values.push(values[0]);
    var _max = Math.max.apply(Math, typeof max === 'undefined' ? values : values.concat(max));
    var _min = Math.min.apply(Math, typeof min === 'undefined' ? values : values.concat(min));
    var _diff = _max - _min;
    function xScale(input) {
        return input * width / values.length;
    }
    function yScale(input) {
        return height - (_diff ? ((input - min) / _diff) * height : 1);
    }
    for (var i = 0; i < values.length; i++) {
        var x = xScale(i + padding);
        var w = xScale(i + 1 - padding) - x;
        var value = values[i];
        var valueY = yScale(value);
        var y1 = valueY;
        var y2 = valueY;
        var h = void 0;
        if (!_diff) {
            h = 1;
        }
        else if (value < 0) {
            y1 = yScale(Math.min(_max, 0));
        }
        else {
            y2 = yScale(Math.max(_min, 0));
        }
        h = y2 - y1;
        if (h === 0) {
            h = 1;
            if (_max > 0 && _diff)
                y1--;
        }
        content.push(react_1.default.createElement(react_native_svg_1.Rect, { fill: fillFn(fill)(value, i), x: x, key: "rect-" + i, y: y1, width: w, height: h }));
    }
    return (react_1.default.createElement(react_native_svg_1.default, { width: width, height: height }, content));
}
exports.Bar = Bar;
function fillFn(fill) {
    if (typeof fill === 'function') {
        return fill;
    }
    return function (_, i) { return fill[i % fill.length]; };
}
