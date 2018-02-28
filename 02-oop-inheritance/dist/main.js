"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function () {
  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {}
  }, {
    key: "pause",
    value: function pause() {}
  }, {
    key: "resume",
    value: function resume() {}
  }]);

  return Movie;
}();

var taxid = new Movie("Taxi Driver", 1976, "1h 54m");