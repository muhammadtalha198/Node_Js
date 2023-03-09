const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/getHelloWorld', (request, response) => {
    response.send('Hello World!')
});

//data should be send in the body by any api testing tool like post man.
 
app.post('/sendData', (request, response) => {
    let data = request.body.data;
    response.send('Data Received: ' + JSON.stringify(data));
});


const port = 4000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
