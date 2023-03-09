const express = require('express');
const app = express();
 
app.get('/printHellowWorld', (request, response) => {
  response.send('Hello World!')
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

