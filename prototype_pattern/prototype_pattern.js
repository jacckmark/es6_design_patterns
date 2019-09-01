/* 
+---------------+                  +---------------+
|    Client     | +--------------> |   Prototype   |
+---------------+                  +---------------+
                              +--> |    clone()    | <--+
                              |    +---------------+    |
                              |                         |
                              |                         |
                              |                         |
                              +                         +

                  +---------------------+    +---------------------+
                  |  ConcretePrototpe1  |    |  ConcretePrototpe2  |
                  +---------------------+    +---------------------+
                  |      clone()        |    |       clone()       |
                  +---------------------+    +---------------------+
*/

//prototype blueprint, declares cloning methods
class Prototype {
    constructor(prototype) {}

    Clone() {}
}

//concrete prototype classes, they usually define cloning methods
class ConcretePrototype1 extends Prototype {
    constructor() {
        console.log("ConcretePrototype1 created");
        super();
        this.feature = "feature 1";
    }

    setFeature(key, val) {
        this[key] = val;
    }

    Clone() {
        console.log("custom cloning function");
        let clone = new ConcretePrototype1();
        let keys = Object.keys(this);

        keys.forEach(k => clone.setFeature(k, this[k]));

        console.log("ConcretePrototype1 cloned");
        return clone;
    }
}
class ConcretePrototype2 extends Prototype {
    constructor() {
        console.log("ConcretePrototype2 created");
        super();
    }

    Clone() {
        console.log("ConcretePrototype2 cloned");
        return clone;
    }
}

function init_Prototype() {
    let proto1 = new ConcretePrototype1();
    proto1.setFeature("feature", "feature 22");
    let clone1 = proto1.Clone();
    console.log(clone1.feature);
}

init_Prototype();
