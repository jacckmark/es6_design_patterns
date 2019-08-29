/* 
                          +-------------+
      +-----------------> | FacadeClass | <----------------+
      |         +-------> +-------------+ <-----+          |
      +         |                               |          +
                |                ^              |
+----------+    |                |              |     +----------+
|  Class1  |    |                |              |     |  Class5  |
+----------+    +                +              +     +----------+

           +----------+    +----------+    +----------+
           |  Class2  |    |  Class3  |    |  Class4  |
           +----------+    +----------+    +----------+
*/

//facade is a class that is creating and running tasks (functions/methods) in
//bulk when we need to, so we do not have to run this every single time in client
//class, we just create facade object and run our bulk function (here run())
class Facade {
    constructor() {
        console.log("Facade class created");
        this.class1 = new Class1();
        this.class2 = new Class2();
        this.class3 = new Class3();
        this.class4 = new Class4();
        this.class5 = new Class5();
    }
    //one function to rule them all
    run() {
        this.class1.runSomeClass1Task();
        this.class2.runSomeClass2Task();
        this.class3.runSomeClass3Task();
        this.class4.runSomeClass4Task();
        this.class5.runSomeClass5Task();
    }
}

//some classes with  methods that we need to run
class Class1 {
    constructor() {}
    runSomeClass1Task() {
        console.log("some class1 task running...");
    }
}
class Class2 {
    constructor() {}
    runSomeClass2Task() {
        console.log("some class2 task running...");
    }
}
class Class3 {
    constructor() {}
    runSomeClass3Task() {
        console.log("some class3 task running...");
    }
}
class Class4 {
    constructor() {}
    runSomeClass4Task() {
        console.log("some class4 task running...");
    }
}
class Class5 {
    constructor() {}
    runSomeClass5Task() {
        console.log("some class5 task running...");
    }
}

function init_Facade() {
    let facade = new Facade();
    facade.run();
}

init_Facade();
