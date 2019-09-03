/*
DEFINITION
Adapter is a structural design pattern that allows objects with incompatible 
interfaces to collaborate.

+----------+          +------------------+
|  Client  | +------> |  TargetObject    |
+----------+          +------------------+
                      |    request()     |
                      +------------------+

                               ^
                               |
                               |
                               +

                        +-------------+            +-----------------+
                        |   Adapter   |            |  AdaptedObject  |
                        +-------------+ +--------> +-----------------+
                        |  request()  |            |    request()    |
                        +-------------+            +-----------------+
*/

//target, class that we want to convert (allow our adaptee to use functions
//specific to target object) our adaptee (adapted class), later we will be using
//this class to create adapter
class Target {
    constructor(type) {
        let result;
        if (type == "adapter") {
            result = new Adapter();
        } else {
            result = null;
        }
        return result;
    }

    Request() {}
}

//class that needs to be adapted in our code to a target
class Adaptee {
    constructor() {
        console.log("Adaptee created");
    }

    SpecificRequest() {
        console.log("Adaptee request");
    }
}

//adpater extends adaptee and can access all adaptee data and functions
class Adapter extends Adaptee {
    constructor() {
        super();
        console.log("Adapter created");
    }

    Request() {
        return this.SpecificRequest();
    }
}

function init_Adapter() {
    let f = new Target("adapter");
    f.Request();
}

init_Adapter();
