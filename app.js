const express = require('express');;;;;;;;;
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello momoomomomom');
})

app.listen(port);

console.log(`Losten on port ${port}`);
