/*
DEFINITION
Template Method is a behavioral design pattern that defines the skeleton of an 
algorithm in the superclass but lets subclasses override specific steps of the 
algorithm without changing its structure.
 
          +----------------------+
          |     AbstractClass    |
          +----------------------+
          | templateMethod()     |
          | primitiveOperation1()|
          | primitiveOperation2()|
          | primitiveOperation3()|  
          +----------------------+
                    ^
                    |
                    |
                    +

          +-----------------------+      
          |     ConcreteClass     |
          +-----------------------+ 
          | primitiveOperation1() |
          | primitiveOperation2() |
          | primitiveOperation3() |
          +-----------------------+            
*/

//contains template method
class AbstractClass {
    constructor() {}
    //our template method that consist of some steps which implementation is
    //left for inheriting classes (PrimitiveOperation1 and PrimitiveOperation2)
    //or already implemented in abstract class (PrimitiveOperation3)
    TemplateMethod() {
        this.PrimitiveOperation1();
        this.PrimitiveOperation2();
        this.PrimitiveOperation3();
    }
    //empty methods that are the parts (steps) of our template method, they should
    //be implemented in inheriting classes
    PrimitiveOperation1() {}
    PrimitiveOperation2() {}
    //template method can also have steps that are already implemented
    PrimitiveOperation3() {
        console.log("ConcreteClass PrimitiveOperation3");
    }
}

//concrete class contains implementation of our steps (elementar or primitive
//methods)
class ConcreteClass extends AbstractClass {
    constructor() {
        super();
        console.log("ConcreteClass created");
    }

    //implementation of primitive methods inherited from abstract class
    PrimitiveOperation1() {
        console.log("ConcreteClass PrimitiveOperation1");
    }
    PrimitiveOperation2() {
        console.log("ConcreteClass PrimitiveOperation2");
    }
}

function init_TemplateMethod() {
    //concrete class creation
    let class1 = new ConcreteClass();
    //running of a template method
    class1.TemplateMethod();
}

init_TemplateMethod();
