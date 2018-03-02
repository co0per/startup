import event_emitter from "./EventEmitter"

export default class Movie extends event_emitter{
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
