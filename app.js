const express = require('express');;;;;;;;;
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Helloa');
})

app.listen(port);

console.log(`Losten on port ${port}`);
