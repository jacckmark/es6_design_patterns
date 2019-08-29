/* 
+------------------+
|    Singleton     |
+------------------+
| unique instance  |
| getInstance()    |
| (method creating |
| new singleton or |
| returning existi |
| ng one)          |
+------------------+
*/

//variable holding a singleton (by default it is null, thats how we know if
//there is already some singleton created in memory)
let _singleton = null;

//class defining our singleton
class Singleton {
    //singleton constructor
    constructor(data) {
        //we are always checking if there is some instance of this class already
        //created, if we find something then we are returning it and if not we
        //are creating new singleton
        if (!_singleton) {
            this.data = data;
            _singleton = this;
        } else return _singleton;
        console.log("Singleton class created");
    }

    //methods inside our singleton
    SingletonOperation() {
        console.log("SingletonOperation");
    }

    //method getter returning our singleton data
    GetSingletonData() {
        return this.data;
    }
}

//function creating some singleton
function init_Singleton() {
    //creation of sngleton
    let singleton1 = new Singleton("data1");
    //we are showing here that creation of another singleton is not possible,
    //returned values in console are indicating that singleton2 is also pointing
    //on our singleton and is in fact equal to singleton1, singleton data is still
    //equal "data1"
    let singleton2 = new Singleton("data2");
    console.log(`singleton1 data: ${singleton1.GetSingletonData()}`);
    console.log(`singleton2 data: ${singleton2.GetSingletonData()}`);
    console.log(
        `Is singleton1 an instance of class Singleton: ${singleton1 instanceof
            Singleton}`
    );
    console.log(
        `Is singleton2 an instance of class Singleton: ${singleton2 instanceof
            Singleton}`
    );
    console.log(
        `Is singleton1 equal to singleton2: ${singleton1 === singleton2}`
    );
}

init_Singleton();
