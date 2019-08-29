/* 
              +------------------+              +---------------+            +-----------------+
              |  AbstractFactory | <----------+ |    Client     | +--------> |AbstractProductA |
         +--> +------------------+ <---+        +---------------+        +-> +-----------------+ <-+
         |    | createProductA() |     |                                 |                         |
         |    | createProductB() |     |                                 +                         +
         |    +------------------+     |
         |                             |                         +----------------+       +---------------+
         |                             |                         |   ProductA1    |       |   ProductA2   |
         +                             +                         +----------------+       +---------------+

+------------------+        +------------------+
| ConcreteFactory1 |        | ConcreteFactory2 |                             +-----------------+
+------------------+        +------------------+                             |AbstractProductB |
| createProductA() |        | createProductA() |                         +-> +-----------------+ <-+
| createProductB() |        | createProductB() |                         |                         |
+------------------+        +------------------+                         +                         +

                                                                 +----------------+       +----------------+
                                                                 |   ProductB1    |       |   ProductB2    |
                                                                 +----------------+       +----------------+
*/

//class blueprint for creating concrete factories (if we would like to create
//pizza ingredients factory it will be a pizzaIngredientsFactory)
class AbstractFactory {
    constructor() {}
    //concrete methods for creating a concrete products (for example createCheese)
    createProductA(product) {}
    createProductB(product) {}
}

//one of the factories which is creating whole bunch of products (for example
//italianPizzaIngredientsFactory), methods which are responsible for creating
//products in abstract fabric are often implemented as factory methods (look
//design pattern factory method)
class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory1 class created");
    }

    //we are filling methods provided by an abstract factory
    createProductA(product) {
        console.log("ConcreteFactory1 createProductA");
        //here we are defining what type of concrete product we are expecting
        //when running a createProductA with this particular type of factory
        return new ProductA1();
    }

    createProductB(product) {
        console.log("ConcreteFactory1 createProductB");
        return new ProductB1();
    }
}

//one of the factories which is creating whole bunch of products (for example
//americanPizzaIngredientsFactory)
class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory2 class created");
    }

    createProductA(product) {
        console.log("ConcreteFactory2 createProductA");
        return new ProductA2();
    }

    createProductB(product) {
        console.log("ConcreteFactory2 createProductB");
        return new ProductB2();
    }
}

//defines a group of products (product families) that are in definition the same
//but differ a little like for example pizzaBottom can be thin or thick etc.
class AbstractProductA {
    constructor() {}
}
//another group of products
class AbstractProductB {
    constructor() {}
}
//concrete product based on a blueprint AbstractProductA (for example thinPizzaBottom)
class ProductA1 extends AbstractProductA {
    constructor() {
        super();
        console.log("ProductA1 created");
    }
}
//another product based on AbstractProductA
class ProductA2 extends AbstractProductA {
    constructor() {
        super();
        console.log("ProductA2 created");
    }
}
//product based on another abstract product class (AbstractProductB)
class ProductB1 extends AbstractProductB {
    constructor() {
        super();
        console.log("ProductB1 created");
    }
}
//another product based on another abstract product class (AbstractProductB)
class ProductB2 extends AbstractProductB {
    constructor() {
        super();
        console.log("ProductB2 created");
    }
}

//function running our abstract factory and creating some products
function init_AbstractFactory() {
    //create factory (ConcreteFactory1)
    let factory1 = new ConcreteFactory1();
    //create product (from group of products named B)
    let productB1 = factory1.createProductB();

    //create factory (ConcreteFactory2)
    let factory2 = new ConcreteFactory2();
    //create product (from group of products named A)
    let productA2 = factory2.createProductA();
}

init_AbstractFactory();
