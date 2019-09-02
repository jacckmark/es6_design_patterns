/*
DEFINITION
Observer is a behavioral design pattern that lets you define a subscription 
mechanism to notify multiple objects about any events that happen to the object 
they’re observing.
 
+------------------+                   +--------------+
|     Subject      |                   |   Observer   |
+------------------+ +---------------> +--------------+
| addObserver()    |                   |    update()  |
| deleteObserver() |                   +--------------+
| notifyObserver() |
+------------------+                           ^
                                               |
         ^                                     |
         |                                     |
         |                                     |
         +                                     +

+------------------+                   +----------------+
|  ConcreteSubject |                   |ConcreteObserver|
+------------------+ <---------------+ +----------------+
|    getState()    |                   |    update()    |
|    setState()    |                   | observer state |
| subject current  |                   +----------------+
| state            |
+------------------+
*/

//subject class (works like subject class in java)
class Subject {
    constructor() {
        //list of observers as object parameter
        this.observers = [];
    }
    //add observer to observer list
    subscribeObserver(observer) {
        this.observers.push(observer);
    }
    //remove observer from observer list
    unsubscribeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    //notify one concrete observer about changes to subject object
    notifyObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index].notify(index);
        }
    }
    //notify all observers (about changes to subject) from observer list
    notifyAllObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].notify(i);
        }
    }
}

//observer class (works like observer interface in java)
class Observer {
    constructor(number) {
        this.number = number;
    }
    notify() {
        console.log("Observer " + this.number + " is notified!");
    }
}

//create subject object
let subject = new Subject();

//create observers
let observer1 = new Observer(1);
let observer2 = new Observer(2);
let observer3 = new Observer(3);
let observer4 = new Observer(4);

//add all observers to subject (object subject type Subject) observer list
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

//notify one observer
subject.notifyObserver(observer2);

//remove one observer from observer list
subject.unsubscribeObserver(observer2);

//notify all observers about changes in "connected" subject object
subject.notifyAllObservers();
