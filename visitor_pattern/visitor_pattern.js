/* 
+---------------+                  +----------------+
|    Client     | +--------------> |   Visitor      |
+---------------+                  +----------------+
                              +--> | visit concrete | <--+
        +                     |    |     element    |    |
        |                     |    +----------------+    |
        |                     |                          |
        |                     +                          +
        |         +---------------------+      +---------------------+
        |         |  ConcreteVisitor1   |      |  ConcreteVisitor2   |
        |         +---------------------+      +---------------------+
        |         |    visit concrete   |      |    visit concrete   |
        |         |        element      |      |        element      |
        v         +---------------------+      +---------------------+

+-------------------+            +-----------------+
|  ObjectStructure  | +--------> |    Element      |
+-------------------+      +---> +-----------------+ <----+
                           |     | accept(visitor) |      |
                           |     +-----------------+      |
                           +                              +
                +------------------+             +------------------+
                | ConcreteElementA |             | ConcreteElementB |
                +------------------+             +------------------+
                | accept(visitor)  |             | accept(visitor)  |
                |   operationA()   |             |   operationB()   |
                +------------------+             +------------------+
*/

//visitor blueprint
class Visitor {
    constructor() {}

    VisitConcreteElementA(ConcreteElementA) {}

    VisitConcreteElementB(ConcreteElementB) {}
}

//concrete visitors, each visitor implements several versions of the same behaviors
//tailored for different element classes
class ConcreteVisitor1 extends Visitor {
    constructor() {
        super();
        console.log("ConcreteVisitor1 created");
    }
    VisitConcreteElementA(ConcreteElementA) {
        console.log("ConcreteVisitor1 visited ConcreteElementA");
    }
    VisitConcreteElementB(ConcreteElementB) {
        console.log("ConcreteVisitor1 visited ConcreteElementB");
    }
}
class ConcreteVisitor2 extends Visitor {
    constructor() {
        super();
        console.log("ConcreteVisitor2 created");
    }
    VisitConcreteElementA(ConcreteElementA) {
        console.log("ConcreteVisitor2 visited ConcreteElementA");
    }
    VisitConcreteElementB(ConcreteElementB) {
        console.log("ConcreteVisitor2 visited ConcreteElementB");
    }
}

class ObjectStructure {
    constructor() {
        console.log("ObjectStructure created");
    }
}

//element blueprint
class Element {
    constructor() {}

    Accept(visitor) {}
}

//each element defines a method  for accepting a visitor
class ConcreteElementA extends Element {
    constructor() {
        super();
        console.log("ConcreteElementA created");
    }
    Accept(visitor) {
        visitor.VisitConcreteElementA(this);
    }
    //each concrete element also implements some characteristic methods (here
    //OperationA())
    OperationA() {
        console.log("ConcreteElementA OperationA");
    }
}
class ConcreteElementB extends Element {
    constructor() {
        super();
        console.log("ConcreteElementB created");
    }
    Accept(visitor) {
        visitor.VisitConcreteElementB(this);
    }
    OperationB() {
        console.log("ConcreteElementB OperationB");
    }
}

function init_Visitor() {
    let visitor1 = new ConcreteVisitor1();
    let visitor2 = new ConcreteVisitor2();
    let elementA = new ConcreteElementA();
    let elementB = new ConcreteElementB();
    elementA.Accept(visitor1);
    elementB.Accept(visitor2);
}

init_Visitor();
