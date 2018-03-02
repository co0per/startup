"use strict";

var _Actor = require("./Actor");

var _Actor2 = _interopRequireDefault(_Actor);

var _Logger = require("./Logger");

var _Logger2 = _interopRequireDefault(_Logger);

var _EventEmitter = require("./EventEmitter");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Movie = require("./Movie");

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taxid = new _Movie2.default("Taxi Driver", 1976, "1h 54m");

var terminator = new _Movie2.default('Terminator I', 1985, 60);
var arnold = new _Actor2.default('Arnold Schwarzenegger', 50);
var actors = [new _Actor2.default('Paul Winfield', 50), new _Actor2.default('Michael Biehn', 50), new _Actor2.default('Linda Hamilton', 50)];
var logger = new _Logger2.default();

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

var spun = new _Movie2.default("Spun", 2002, "1h 41m");

Object.assign(spun, social);

spun.like("Daniel Schaerer");