/*
DEFINITION
Factory Method is a creational design pattern that provides an interface for 
creating objects in a superclass, but allows subclasses to alter the type of 
objects that will be created.

                                    +-----------------+
                                    |    Creator      |
                                    +-----------------+
+---------------+                   | factoryMethod() |
|    Product    |                   |   operation()   |
+---------------+                   +-----------------+

        ^                                    ^
        |                                    |
        |                                    |
        +                                    +

+---------------+                   +-----------------+
|ConcreteProduct| <---------------+ | ConcreteCreator |
+---------------+                   +-----------------+
                                    | factoryMethod() |
                                    +-----------------+
*/

//class blueprint for creating concrete products created by concrete creators
//(like italianPizza created only by a italianPizzaPlace)
class Product {
    constructor() {}
}

//class extending product class, this class is the result of creating a product
//with fabricating method (beware class ConcreteProduct1 can be created only by
//class ConcreteCreator1) (if we would like to create pizza factory this class
//will be named italianPizza)
class ConcreteProduct1 extends Product {
    constructor() {
        super();
        console.log("ConcreteProduct1 created");
    }
}

//another product/result of running fabricating method (one of creators) (if we
//would like to create pizza factory this class will be named americanPizza)
class ConcreteProduct2 extends Product {
    constructor() {
        super();
        console.log("ConcreteProduct2 created");
    }
}

//our interface (class) created for making one type of product (if we would like
//to create pizza factory this class will be named a pizzaPlace)
class Creator {
    constructor() {}

    FactoryMethod() {}

    AnOperation() {
        console.log("AnOperation()");
        this.product = this.FactoryMethod();
        console.log(
            `Is created (right now) product an instance of a ConcreteProduct1: ${this
                .product instanceof ConcreteProduct1}.`
        );
        console.log(
            `Is created (right now) product an instance of a ConcreteProduct2: ${this
                .product instanceof ConcreteProduct2}.`
        );
    }
}

//extends our inerface (class) for making one product and fills all methods with
//proper implementation, also we say that this class decides what type of product
//we are making (if we would like to create a pizza factory this class will be
//named for example italianPizzaPlace)
class ConcreteCreator1 extends Creator {
    constructor() {
        super();
        console.log("ConcreteCreator1 created");
    }

    FactoryMethod() {
        return new ConcreteProduct1();
    }
}

//another fabricating method (could be named for example americanPizzaPlace)
class ConcreteCreator2 extends Creator {
    constructor() {
        super();
        console.log("ConcreteCreator2 created");
    }

    FactoryMethod() {
        return new ConcreteProduct2();
    }
}

//here we are running our fabricating methods and creating concrete products (like
//for example pizza)
function init_FactoryMethod() {
    //creation of a factory method
    let factory1 = new ConcreteCreator1();
    let factory2 = new ConcreteCreator2();
    //running method which creates as a result some products (concrete products)
    factory1.AnOperation();
    factory2.AnOperation();
}

init_FactoryMethod();
