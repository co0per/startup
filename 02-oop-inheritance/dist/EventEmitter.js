"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = [];
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(eventName, callback) {
            if (this.events[eventName]) {
                this.events[eventName].push(callback);
            } else {
                this.events[eventName] = [callback];
            }
        }
    }, {
        key: "emit",
        value: function emit(eventName) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (callback) {
                    callback(eventName);
                });
            }
        }
    }, {
        key: "off",
        value: function off(event, givenCallback) {
            if (this.events[event]) {
                var index = this.events[event].indexOf(givenCallback);
                if (index !== -1) {
                    this.events[event].splice(index, 1);
                }
            }
        }
    }]);

    return EventEmitter;
}();