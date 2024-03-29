/* 
DEFINITION
Strategy is a behavioral design pattern that lets you define a family of 
algorithms, put each of them into a separate class, and make their objects 
interchangeable.

+-----------+    +Strategy       +--------------+
|  Context  | <----------------+ |   Strategy   |
+-----------+                    +--------------+
                +--------------> |  algorithm   | <--------------+
                |                |  blueprint   |                |
                |                +--------------+                |
                |                                                |
                |                        ^                       |
                |                        |                       |
                +                        +                       +

       +-----------------+      +-----------------+      +-----------------+
       |ConcreteStrategy1|      |ConcreteStrategy2|      |ConcreteStrategy3|
       +-----------------+      +-----------------+      +-----------------+
       |    algorithm    |      |    algorithm    |      |    algorithm    |
       | implementation  |      | implementation  |      | implementation  |
       +-----------------+      +-----------------+      +-----------------+
*/

//this class is deciding what type of strategy (concrete strategy) we should
//execute
class Context {
    constructor(type) {
        switch (type) {
            case "A":
                this.strategy = new ConcreteStrategyA();
                break;
            case "B":
                this.strategy = new ConcreteStrategyB();
                break;
            default:
                this.strategy = new ConcreteStrategyA();
        }
    }

    ContextInterface() {
        this.strategy.AlgorithmInterface();
    }
}

//blueprint for concrete strategies
class Strategy {
    constructor() {}

    AlgorithmInterface() {}
}

//concrete strategies inheriting from strategy blueprint
class ConcreteStrategyA extends Strategy {
    constructor() {
        super();
        console.log("ConcreteStrategyA created");
    }

    //some algorithm that will be run if we would run ContextInterface()
    //function
    AlgorithmInterface() {
        console.log("ConcreteStrategyA algorithm");
    }
}
class ConcreteStrategyB extends Strategy {
    constructor() {
        super();
        console.log("ConcreteStrategyB created");
    }

    AlgorithmInterface() {
        console.log("ConcreteStrategyB algorithm");
    }
}

//context where we are creating contexts and deciding what type of strategies
//associate to which context
function init_Strategy() {
    //context creation
    let contextA = new Context("A");
    let contextB = new Context("B");
    //runninng choosen strategy algorithms
    contextA.ContextInterface();
    contextB.ContextInterface();
}

init_Strategy();
