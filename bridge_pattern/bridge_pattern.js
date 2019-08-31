/* 
    +---------------+                      +----------------+
    |  Abstraction  | +------------------> |  Implementor   |
    +---------------+                      +----------------+
    |  Operation()  |                 +--> | OperationImp() +<--+
    +---------------+                 |    +----------------+   |
                                      |                         |
            ^                         |                         |
            |                         |                         |
            +                         +                         +

+----------------------+  +----------------------+   +----------------------+
|  RefinedAbstraction  |  | ConcreteImplementorB |   | ConcreteImplementorB |
+----------------------+  +----------------------+   +----------------------+
                          |   OperationImp()     |   |    OperationImp()    |
                          +----------------------+   +----------------------+
*/

//abstract classes hierarchy
class Abstraction {
    constructor() {}
    //all hierachy classes methods are implemented inside implementation
    //part of a bridge pattern (ConcreteImplementationA etc.)
    Operation() {
        this.imp.OperationImp();
    }
}

//all subclasses of abstraction work like abstraction but are more refined
//versions (sometime there is a change added or removed method, but still the
//implementation part is just delegating a work to a Implementor classes)
class RefinedAbstraction extends Abstraction {
    constructor() {
        super();
        console.log("RefinedAbstraction created");
    }
    setImp(imp) {
        this.imp = imp;
    }
}

//defines common methods for all concrete implementators, abstraction can talk
//with implementor class only with methods that are defined here
class Implementor {
    constructor() {}

    OperationImp() {}
}

//concrete implementors classes with method OperationImp() implementation
class ConcreteImplementorA extends Implementor {
    constructor() {
        super();
        console.log("ConcreteImplementorA created");
    }
    OperationImp() {
        console.log("ConcreteImplementorA OperationImp");
    }
}
class ConcreteImplementorB extends Implementor {
    constructor() {
        super();
        console.log("ConcreteImplementorB created");
    }
    OperationImp() {
        console.log("ConcreteImplementorB OperationImp");
    }
}

function init_Bridge() {
    let abstraction = new RefinedAbstraction();
    //randomization of reults by Math.random
    let state = Math.floor(Math.random() * 2);
    //linking a bridge to an implementation object (it is usually client job),
    //also client talks with abstraction only
    if (state) {
        abstraction.setImp(new ConcreteImplementorA());
    } else {
        abstraction.setImp(new ConcreteImplementorB());
    }
    abstraction.Operation();
}

init_Bridge();
