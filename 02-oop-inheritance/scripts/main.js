import Actor from "./Actor"
import Logger from "./Logger"
import event_emitter from "./EventEmitter"
import Movie from "./Movie"

let taxid = new Movie("Taxi Driver", 1976, "1h 54m");

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

/* MIXIN */

let social = {
    share(friend_name){
        console.log(friend_name + " shares " + this.title);
    },
    like(friend_name){
        console.log(friend_name + " likes " + this.title);
    }
}

const spun = new Movie("Spun", 2002, "1h 41m");

Object.assign (spun, social);

spun.like("Daniel Schaerer");