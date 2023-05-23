const express = require('express');
const path = require('path');

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

app.get("*", async(req, res, next) => {
    const dirPath = path.join(__dirname, 'build', 'index.html');
    res.sendFile(dirPath);
})

app.listen(PORT, () => console.log(`Server working on port ${PORT}`));