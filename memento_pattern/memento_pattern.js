/*
DEFINITION
Memento is a behavioral design pattern that lets you save and restore the 
previous state of an object without revealing the details of its implementation.

+-------------------+              +-----------+             +-------------+
|    Originator     |              |  Memento  |             |  Caretaker  |
+-------------------+ +----------> +-----------+ +---------> +-------------+
|  state            |              | state     |
|  setMemento()     |              | getState()|
|  createMemento()  |              | setState()|
+-------------------+              +-----------+
*/

//produces snapshots of it's own state, can also restore it's state from these
//snapshots when necessary
class Originator {
    constructor() {
        console.log("Originator created");
        this.state = "a";
        console.log("State= " + this.state);
    }
    //method creating a snapshot
    SetMemento(Memento) {
        this.state = Memento.GetState();
        console.log("State= " + this.state);
    }
    //method creating a memento when needed
    CreateMemento(state) {
        return new Memento(state);
    }
}

//memento acts as a snapshot of a originator state
class Memento {
    constructor(state) {
        this.state = state;
        console.log("Memento created. State= " + this.state);
    }
    GetState() {
        return this.state;
    }
    SetState(state) {
        this.state = state;
    }
}

//caretaker knows only when and why to capture the originator state, here caretaker
//keeps track o a originator using mementos array where all information is beeing
//stored
class Caretaker {
    constructor() {
        console.log("Caretaker created");
        this.mementos = [];
    }
    AddMemento(memento) {
        console.log("Caretaker AddMemento");
        this.mementos.push(memento);
    }
    SetMemento() {
        return this.mementos[this.mementos.length - 1];
    }
}

function init_Memento() {
    let caretaker = new Caretaker();
    let originator = new Originator();
    caretaker.AddMemento(originator.CreateMemento("b"));
    originator.SetMemento(caretaker.SetMemento());
    console.log(originator.state);
}

init_Memento();
