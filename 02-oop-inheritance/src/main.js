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
            let index = this.events[event].indexOf(givenCallback);
            if (index !== -1) {
                this.events[event].splice(index,1);
            }
        }
    };
}

class Movie extends EventEmitter{
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        this.emit("play");
    };
    pause() {
        this.emit("pause");
    };
    resume() {
        this.emit("resume");
    };

    addCast(new_cast){
        if (new_cast instanceof Array) {
            for (let i = 0; i < new_cast.length ; i++) {
                this.cast.push(new_cast[i]);
            }
        } else {
            this.cast.push(new_cast);
        }
    };
}

let taxid = new Movie("Taxi Driver", 1976, "1h 54m");

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
}

class Logger { 

    constructor() {}

    log(info) {
        console.log("The '" +info+ "' has been emitted");
    }
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
const logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);
terminator.on("play", logger.log);
terminator.play();
terminator.off("play", "logger.log");
