const express = require('express');
 
const app = express();
 
app.get('/getHTMLFile', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
 
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
