it('should 1', function () {
    const base = (method, url, data = {}) => {
        return fetch(`${jwtConfig.fetchUrl}${url}`, {
            method,
            headers: customHeader(),
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => res)
            .catch(error => ({error: 'Server Error'}));
    };

    const SuperFetch = {};
    ['get', 'post', 'put', 'delete'].forEach(method => {
        SuperFetch[method] = base.bind(null, method);
    });


    console.log("hello!");
    console.log(SuperFetch);
});


it('should 2', function () {
    const SuperFetch = {};
    ['get', 'post', 'put', 'delete'].forEach(value => {
        console.log(value);
        SuperFetch[value] = value + "test";
    });

    console.log(SuperFetch);
});


it('should 3', function () {
    const obj = {
        func1() {
            console.log("func1");
            console.log(this);
        },
        func2: function () {
            console.log("func2");
            console.log(this);
        },
        func3: () => {
            console.log("func3");
            console.log(this);
        }

    };


    const func = (arg) => {
        console.log("arg :", arg);
    }

    let func1 = func.bind("arg");

    func1();
    // console.log(obj);
    // obj.func1();
    // obj.func2();
    // obj.func3();

});

it('should 4', function () {

    var example = function (a, b, c) {
        return a + b + c;
    };
    example(1, 2, 3);
    example.call(null, 1, 2, 3);
    example.apply(null, [1, 2, 3]);

});

it('should 5', function () {
    function f() {
        console.log(arguments);
    }

    f(1, 2, 3);
});


it('should 6', function () {
    var obj = {
        string: 'zero',
        yell: function () {
            console.log(this.string);
        }
    };
    var obj2 = {
        string: 'what?'
    };
    obj.yell(); // 'zero';
    obj.yell.call(obj2); // 'what?'

});

it('should 7', function () {
    var obj = {
        string: 'zero',
        yell: function (arg1, arg2) {
            console.log(this.string);
            console.log(arguments);
            console.log(arg1);
            console.log(arg2);
        }
    };
    var obj2 = {
        string: 'what?'
    };
    var yell2 = obj.yell.bind(obj2, "bind arg");
    yell2("real arg"); // 'what?'
});


const Api = () => {
    return new Promise(resolve => {
        setTimeout(() => (resolve("done")), 1000);
    });
}


const ApiF = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => (reject("fail!")), 1000);
    })
}


const  af = async ()=>{
    return "done";
}
it('should ', async function () {
    let done = await af();
    console.log(done);

});