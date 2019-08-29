/* 
+--------+                 +---------------+
| Client |+--------------> |    Subject    |
+--------+          +----> +---------------+ <-----+
                    |      |   request()   |       |
                    |      +---------------+       |
                    |                              |
                    |                              |
                    +                              +

            +---------------+              +-------------+
            |  RealSubject  |              |    Proxy    |
            +---------------+ <----------+ +-------------+ 
            |   request()   |              |  request()  |     
            +---------------+              +-------------+                                        
*/

//subject template, realsubject and proxy need to extend this class, this allows
//clients to talk to proxy like they would be to a normal realsubject
class Subject {
    constructor() {}

    Request() {}
}

//real subject does all the hard work, proxy controls access to this class
class RealSubject extends Subject {
    constructor() {
        super();
        console.log("RealSubject created");
    }

    //this is method (could be one of many) that client wants to run and we want
    //to protect or to which we have to provide access (using proxy)
    Request() {
        console.log("RealSubject handles request");
    }
}

//proxy should have an association with our realsubject (this allows proxy to run
//realsubject methods)
class Proxy extends Subject {
    constructor() {
        super();
        console.log("Proxy created");
    }

    //proxy request which runs realsubject request method
    Request() {
        this.realSubject = new RealSubject();
        this.realSubject.Request();
    }
}

function init_Proxy() {
    //proxy creation
    let proxy = new Proxy();
    //running method request of realsubject
    proxy.Request();
}

init_Proxy();
