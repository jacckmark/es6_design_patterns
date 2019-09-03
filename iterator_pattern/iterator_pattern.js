/*
DEFINITION
Iterator is a behavioral design pattern that lets you traverse elements of a 
collection without exposing its underlying representation (list, stack, tree, 
etc.).
 
+----------------+              +----------+             +---------------+
|   Aggregate    | <----------+ |  Client  | +---------> |   Iterator    |
+----------------+              +----------+             +---------------+
|createIterator()|                                       |    First()    |
+----------------+                                       |     Next()    |
                                                         |    IsDone()   |
         ^                                               | CurrentItem() |
         |                                               +---------------+
         |
         |                                                       ^
         |                                                       |
         +                                                       +

+-----------------+                                     +------------------+
|ConcreteAggregate| +---------------------------------> | ConcreteIterator |
+-----------------+                                     +------------------+
|createIterator() |                                     |     First()      |
+-----------------+                                     |      Next()      |
                                                        |     IsDone()     |
                                                        |  CurrentItem()   |
                                                        +------------------+
*/

//defines a list of methods that need to be implemented when creating a
//concrete iterator class
class Iterator {
    constructor() {}

    First() {}

    Next() {}

    IsDone() {}

    CurrentItem() {}
}

//concrete iterator is responsible for managing current position when
//iterating over some collection (map, array etc.)
class ConcreteIterator extends Iterator {
    //in constructor we are passing our aggregate thus we are later capable of
    //iterating over a collection
    constructor(aggregate) {
        super();
        console.log("ConcreteIterator created");
        this.index = 0;
        this.aggregate = aggregate;
    }

    //concrete implementation of methods from our iterator blueprint
    First() {
        return this.aggregate.list[0];
    }
    Next() {
        this.index += 2;
        return this.aggregate.list[this.index];
    }
    CurrentItem() {
        return this.aggregate.list[this.index];
    }
    IsDone() {
        if (this.index >= this.aggregate.list.length) {
            return true;
        } else {
            return false;
        }
    }
}

//aggregate blueprint
class Aggregate {
    constructor() {}

    CreateIterator() {}
}

//concrete aggregates are responsible for creating concrete iterator thus
//allowing collection iteration
class ConcreteAggregate extends Aggregate {
    constructor(list) {
        super();
        this.list = list;
        console.log("ConcreteAggregate created");
    }
    //concrete iterator bound to this concrete aggregate
    CreateIterator() {
        this.iterator = new ConcreteIterator(this);
    }
}

function init_Iterator() {
    //aggregate creation (here simple list of numbers in the table)
    let aggregate = new ConcreteAggregate([0, 1, 2, 3, 4, 5, 6, 7]);
    //creation of iterator and running concrete iterator methods like next() etc.
    aggregate.CreateIterator();
    console.log(aggregate.iterator.First());
    console.log(aggregate.iterator.Next());
    console.log(aggregate.iterator.CurrentItem());
    console.log(aggregate.iterator.IsDone());
}

init_Iterator();
