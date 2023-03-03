    const express = require('express');
    const app = express();

    // this app(application) has bunch of usefull methods.

    // app.get();
    // app.post();
    // app.put();
    // app.delete();



    /* 
        its an end point.
        it takes two argument 'the path' and a 'callback function'.
    */

    app.get('/', (request, response) => {
        response.send("Hello World.");
    });


    /* 
        its another end point.
        it also takes two argument 'the path' and a 'callback function'.
    */

    app.get('/courses', (request, response) => {
        response.send([1,2,3,4,5]);
    });

    /*
        how to creatre a route to get single course. 
        for that our end point should be like this 
        the path will be: /courses/1
    */

    app.get('/courses/:courseId', (request, response) => {
        response.send(request.params.courseId );
    });


    /*

        To get the post from this year and month we are passing the
        two parameters in the end point.

        
        for this:  (path: /post/2018/4)
            response.send(request.params) 

            response will be :  {"year":"2018","month":"4"}

        for this: (path: /post/2018/4/?sortBy=name

        response.send(request.query);

        response will be: {"sortBy":"name"}
         

    */

        app.get('/post/:year/:month', (request, response) => {
            response.send(request.params);
            response.send(request.query);

        });

        app.get('/post/:year/:month', (request, response) => {
            response.send(request.query);

        });

    /*

        Port is an global enviroment variable to set the port dinamically
        or you can say automatically.
        if that port variable is set out side the application then the app-
        -cation will use that port number other-wise use the defined
        port number (4000). 

        this is how you set the Port variable in terminal
        export Port=5000 (press enter and run file again)

    */

    const port = process.env.Port || 4000;
    
    app.listen(port, () => console.log(`Now we using the port ${port}....`));

