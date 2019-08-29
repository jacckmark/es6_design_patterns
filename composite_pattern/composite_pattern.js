/* 
+----------+             +-------------------+
|  Client  | +---------> |     Component     |
+----------+             +-------------------+
                         |    Operation()    |
                         |   Add(Component)  |
               +-------> | Remove(Component) | <----+
               |         |   GetChild(key)   |      |
               |         +-------------------+      |
               |                                    |
               |                                    |
               |                                    |
               +                                    +

     +-------------------+                   +-------------+
     |     Composite     |                   |    Leaf     |
     +-------------------+                   +-------------+
     |    Operation()    |                   | Operation() |
     |   Add(Component)  |                   +-------------+
     | Remove(Component) |
     |   GetChild(key)   |
     +-------------------+
*/

//component is a blueprint for classes that are more complex (they have children)
//and also for classes that are simple (regular leafs without children)
class Component {
    constructor() {}

    //all required operations for leafs and composites (if the operation should
    //not work for example we cannot add to a leaf because it is not a list, we
    //are just ignoring implementation and leave it empty)
    Operation() {}
    Add(Component) {}
    Remove(Component) {}
    GetChild(key) {}
}

//single leaf (no children)
class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
        console.log("Leaf created");
    }
    //only one function that leaf needs is a function returning this leaf (we
    //cannot add/remove elements from singe leaf (this is not a list))
    Operation() {
        console.log(this.name);
    }
}

//composite is responsible for defining behaviours of leafs that have children
//(are complex lists inside list)
class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
        console.log("Composite created");
    }

    //composite methods (we can add, remove elements, see one single child
    //element and also run method operation which will return whole list of
    //elements)
    Operation() {
        console.log("Composite Operation for: " + this.name);
        for (let i in this.children) this.children[i].Operation();
    }
    Add(Component) {
        this.children.push(Component);
    }
    Remove(Component) {
        for (let i in this.children)
            if (this.children[i] === Component) this.children.splice(i, 1);
    }
    GetChild(key) {
        return this.children[key];
    }
}

function init_Composite() {
    let composite1 = new Composite("C1");
    composite1.Add(new Leaf("L1"));
    composite1.Add(new Leaf("L2"));
    let composite2 = new Composite("C2");
    composite2.Add(composite1);
    composite1.GetChild(1).Operation();
    composite2.Operation();
}

init_Composite();
