// Literally Building a Simple version of the Event Emitter Class 
// Which is similar to the Event Emitter Core Module

class EventEmit {
    
    constructor() {
        this.events = [];
    }
    
    emit(name, ...arg) {
        this.events.forEach(element => {
            if (name === element.name) {
                element.callback(...arg);
            }
        })
    }

    on(name, callback) {
        this.events.push({ name, callback })
    }

}

export { EventEmit }