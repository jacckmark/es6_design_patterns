/* 
+-------------------+                +----------+
| Flyweight Factory |                |  Client  |
+-------------------+                +----------+
|  getFlyweight()   | <--------+          |
+-------------------+          |          |
                               |          |
          +                    |          v
          |                    |    +-------------+
          |                    |    |   Context   |
          v                    +--+ +-------------+
                               |    | operation() |
   +-------------+             |    +-------------+
   |  Flyweight  |             |
   +-------------+ <-----------+
   | operation() |
   +-------------+
*/

//this class manages an array of existing flyweights
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
        console.log("FlyweightFactory created");
    }

    //returns flyweight if present or creates new one if not
    GetFlyweight(key) {
        if (this.flyweights[key]) {
            return this.flyweights[key];
        } else {
            this.flyweights[key] = new ConcreteFlyweight(key);
            return this.flyweights[key];
        }
    }

    CreateGibberish(keys) {
        return new UnsharedConcreteFlyweight(keys, this);
    }
}

class Flyweight {
    constructor() {}

    Operation(extrinsicState) {}
}
//contains portion of original objects state that can be shared between multiple
//objects
class ConcreteFlyweight extends Flyweight {
    constructor(key) {
        super();
        this.intrinsicState = key;
        console.log("ConcreteFlyweight created");
    }

    Operation(extrinsicState) {
        //state stored inside flyweight is called intrinsic and state passed to a
        //flyweight is called extrinsic
        return extrinsicState + this.intrinsicState;
    }
}

//contains portion of original objects state that can be shared between multiple
//objects
class UnsharedConcreteFlyweight extends Flyweight {
    constructor(keys, flyweights) {
        super();
        this.flyweights = flyweights;
        this.keys = keys;
        console.log("UnsharedConcreteFlyweight created");
    }

    Operation(extrinsicState) {
        let key,
            word = "";

        for (let i = 0; i < extrinsicState; i++) {
            //random key
            key = this.keys[Math.floor(Math.random() * this.keys.length)];
            word = this.flyweights.GetFlyweight(key).Operation(word);
        }
        console.log("UnsharedConcreteFlyweight Operation: ");
        console.log(word);
    }
}

function init_Flyweight() {
    let flyweights = new FlyweightFactory();
    let gibberish = flyweights.CreateGibberish(["-", "+", "*"]);
    gibberish.Operation(5);
    gibberish.Operation(10);
}

init_Flyweight();
