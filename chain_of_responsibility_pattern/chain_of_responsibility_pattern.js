/* 
+---------+           +----------------+
| Client  |  +------> |     Handler    |
+---------+           +----------------+
                 +--> | handle request | <----+
                 |    +----------------+      |
                 |                            |
                 |                            |
                 |                            |
                 +                            +

       +--------------------+      +--------------------+
       |  ConcreteHandler1  |      |  Concretehandler2  |
       +--------------------+      +--------------------+
       |   handle request   |      |   handle request   |
       +--------------------+      +--------------------+
*/

//blueprint for all handlers
class Handler {
    constructor() {}
    HandleRequest() {}
}

//concrete handlers are classes that are deciding whether to process a request
//or to pass it to next handler (chain)
class ConcreteHandler1 extends Handler {
    constructor() {
        super();
        console.log("ConcreteHandler1 created");
    }

    setSuccessor(successor) {
        this.successor = successor;
    }
    HandleRequest(request) {
        //decision if the request should be processed by this handler is made
        //here
        if (request === "run")
            console.log("ConcreteHandler1 has handled the request");
        else {
            console.log("ConcreteHandler1 calls his successor");
            this.successor.HandleRequest(request);
        }
    }
}
class ConcreteHandler2 extends Handler {
    constructor() {
        super();
        console.log("ConcreteHandler2 created");
    }
    HandleRequest(request) {
        console.log("ConcreteHandler2 has handled the request");
    }
}

function init_ChainofResponsibility() {
    //creation of handlers and running handling methods with different parameters
    let handle1 = new ConcreteHandler1();
    let handle2 = new ConcreteHandler2();
    //here client is setting the responsibility chain (order in which classes in
    //a chain would be called)
    handle1.setSuccessor(handle2);
    handle1.HandleRequest("run");
    handle1.HandleRequest("stay");
}

init_ChainofResponsibility();
