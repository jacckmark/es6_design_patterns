/*
DEFINITION
State is a behavioral design pattern that lets an object alter its behavior when 
its internal state changes. It appears as if the object changed its class.

+-----------+    +State          +--------------+
|  Context  | <----------------+ |    State     |
+-----------+                    +--------------+
                +--------------> |    state     | <--------------+
                |                |  blueprint   |                |
                |                +--------------+                |
                |                                                |
                |                        ^                       |
                |                        |                       |
                +                        +                       +

       +-----------------+      +-----------------+      +-----------------+
       |  ConcreteStateA |      |  ConcreteStateB |      |  ConcreteStateC |
       +-----------------+      +-----------------+      +-----------------+
       |      state      |      |      state      |      |      state      |
       | implementation  |      | implementation  |      | implementation  |
       +-----------------+      +-----------------+      +-----------------+
*/

//context class which delegate all state processes to concrete states
class Context {
    constructor(state) {
        //assigning a current state
        switch (state) {
            case "A":
                this.state = new ConcreteStateA();
                break;
            case "B":
                this.state = new ConcreteStateB();
                break;
            case "C":
                this.state = new ConcreteStateC();
                break;
            default:
                this.state = new ConcreteStateA();
        }
    }

    //running one of the concrete state method (all concrete methods have
    //the handle methods but the implementation will differ across concrete
    //states classes)
    Request1() {
        this.state.Handle1(this);
    }
    Request2() {
        this.state.Handle2(this);
    }
}

//state blueprint (we can if there are some methods that are the same across all
//states put the implementation here to not repeat code)
class State {
    constructor() {}

    Handle1() {}
    Handle2() {}
}

//concrete states implementation
class ConcreteStateA extends State {
    constructor() {
        super();
        console.log("ConcreteStateA created");
    }
    //method handle present in all concrete states
    Handle1(context) {
        console.log("ConcreteStateA handle1");
    }
    Handle2(context) {
        console.log("ConcreteStateA handle2");
    }
}

class ConcreteStateB extends State {
    constructor() {
        super();
        console.log("ConcreteStateB created");
    }

    Handle1(context) {
        console.log("ConcreteStateB handle1");
    }
    Handle2(context) {
        console.log("ConcreteStateB handle2");
    }
}

class ConcreteStateC extends State {
    constructor() {
        super();
        console.log("ConcreteStateC created");
    }

    Handle1(context) {
        console.log("ConcreteStateC handle1");
    }
    Handle2(context) {
        console.log("ConcreteStateC handle2");
    }
}

function init_State() {
    //context creation (we are passing the decision when we are creating it thus
    //choosing concrete state)
    let context = new Context("C");
    //running method request which in turn will run handle method on current
    //state (in our case it is right now state C)
    context.Request1();
    context = new Context("A");
    context.Request1();
    context.Request2();
}

init_State();
