"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
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

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log("The '" + info + "' has been emitted");
        }
    }]);

    return Logger;
}();

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: "play",
        value: function play() {
            this.emit("play");
        }
    }, {
        key: "pause",
        value: function pause() {
            this.emit("pause");
        }
    }, {
        key: "resume",
        value: function resume() {
            this.emit("resume");
        }
    }, {
        key: "addCast",
        value: function addCast(new_cast) {
            if (new_cast instanceof Array) {
                for (var i = 0; i < new_cast.length; i++) {
                    this.cast.push(new_cast[i]);
                }
            } else {
                this.cast.push(new_cast);
            }
        }
    }]);

    return Movie;
}(EventEmitter);

var taxid = new Movie("Taxi Driver", 1976, "1h 54m");

var terminator = new Movie('Terminator I', 1985, 60);
var arnold = new Actor('Arnold Schwarzenegger', 50);
var actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
var logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);
terminator.on("play", logger.log);
terminator.play();

/* MIXIN */

var social = {
    share: function share(friend_name) {
        console.log(friend_name + " shares " + this.title);
    },
    like: function like(friend_name) {
        console.log(friend_name + " likes " + this.title);
    }
};

var spun = new Movie("Spun", 2002, "1h 41m");

Object.assign(spun, social);

spun.like("Daniel Schaerer");