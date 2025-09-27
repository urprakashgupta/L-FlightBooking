const express = require('express');
const { PORT } = require("./config")
const app = express();

app.get('/', (req, res) => {
    res.send("hello from the server frow new account");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})