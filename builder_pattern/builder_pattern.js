/*
DEFINITION
Builder is a creational design pattern that lets you construct complex objects 
step by step. The pattern allows you to produce different types and 
representations of an object using the same construction code.
 
+-----------+                +--------------------+
|  Director | +------------> |       Builder      |
+-----------+                +--------------------+
                        +--> | construction steps | <--+
                        |    +--------------------+    |
                        |                              |
                        |                              |
                        +                              +

              +--------------------+         +--------------------+
              | ConcreteBuilderA   |         | ConcreteBuilderB   |
              +--------------------+         +--------------------+
              | construction steps |         | construction steps |
              +--------------------+         +--------------------+
                        +                              +
                        |                              |
                        v                              v
                   +----------+                  +----------+
                   | ProductA |                  | ProductB |
                   +----------+                  +----------+
*/

//this class defines in which order construction steps should be called
class Director {
    constructor() {
        //here we define an order in which things are beeing build
        this.structure = ["Maze", "Wall", "Door"];
        console.log("Director class created");
    }
    //actual building
    Construct() {
        for (let all in this.structure) {
            let builder = new ConcreteBuilderA();
            builder.BuildPart(this.structure[all]);
            builder.GetResult();
        }
    }
}

//builder blueprint
class Builder {
    constructor() {}

    BuildPart() {}
}

//concrete builder, concrete builders differ in production steps implementation
class ConcreteBuilderA extends Builder {
    constructor() {
        super();
        console.log("ConcreteBuilderA class created");
    }

    BuildPart(rawmaterial) {
        console.log("ConcreteBuilderA BuildPart()");
        let material = rawmaterial;
        this.product = new ProductA(material);
    }

    GetResult() {
        console.log(JSON.stringify(this.product));
        return this.product;
    }
}

//product class (here ProductA created by a ConcreteBuilderA), products created
//by different builders don't even have to belong to the same class hierarchy
class ProductA {
    constructor(material) {
        console.log("ProductA class created");
        this.data = material;
    }
}

function init_Builder() {
    let director = new Director();
    director.Construct();
}

init_Builder();
