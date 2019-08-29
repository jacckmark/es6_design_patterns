/* 
               +---------------+
               |   Component   |
        +----> +---------------+ <-------+
        |      |  operation()  |         |
        |      +---------------+         |
        |                                |
        |                                |
        +                                +

+-----------------+              +---------------+
|ConcreteComponent|              |   Decorator   |
+-----------------+       +----> +---------------+ <---+
|   operation()   |       |      |  operation()  |     |
+-----------------+       |      +---------------+     |
                          |                            |
                          |                            |
                          +                            +

                 +------------------+        +------------------+
                 |ConcreteDecoratorA|        |ConcreteDecoratorB|
                 +------------------+        +------------------+
                 |   operation()    |        |   operation()    |
                 |  added state or  |        |  added state or  |
                 |     behavior     |        |     behavior     |
                 +------------------+        +------------------+
*/

//main dish class, superclass of all dishes
class Dish {
    constructor() {}
    getPrice() {}
    getDescription() {}
}

//one of the dishes which will be decorated by sidedishes
class Steak extends Dish {
    constructor() {
        super();
    }
    getPrice() {
        return 13;
    }
    getDescription() {
        return "Steak";
    }
}

//main decorator class, all sidedishes are inheriting from class sidedish, which
//always has common superclass with class that will be decorated by subclasses
//(subclasses of this decorator)
class SideDish extends Dish {
    constructor(dish) {
        super();
        this.dish = dish;
    }
    getPrice() {
        return this.dish.getPrice();
    }
    getDescription() {
        return this.dish.getDescription();
    }
}

//concrete decorator nr 1
class Pommes extends SideDish {
    constructor(dish) {
        super(dish);
    }
    getPrice() {
        return super.getPrice() + 9;
    }
    getDescription() {
        return super.getDescription() + " Pommes";
    }
}

//concrete decorator nr 2
class Mayonnaise extends SideDish {
    constructor(dish) {
        super(dish);
    }
    getPrice() {
        return super.getPrice() + 12;
    }
    getDescription() {
        return super.getDescription() + " Mayonnaise";
    }
}

//actual decorating of steak with Pommes and Mayonnaise classes
let dish = new Mayonnaise(new Pommes(new Steak()));
console.log(dish.getDescription());
console.log(dish.getPrice());
