class Movie {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  };

  play(){};
  pause(){};
  resume(){};
}

let taxid = new Movie("Taxi Driver", 1976, "1h 54m");

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
}

class EventEmitter{
	constructor(){
		this.events = [];
	};

	on(eventName, callback){
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
	};

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(callback){
                callback(eventName);
            });
        }
    };
	
    off(event, givenCallback) {
        if (this.events[event]) {
            delete this.events[event];
        }
    };
}