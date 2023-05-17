const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'build'));

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT ?? 8000;

app.get('/', async(res, req, next) => {
    const dirPath = path.join(__dirname, 'build', 'index.html');
    console.log(dirPath);
    res.render(dirPath);
})

app.listen(port, () => console.log(`Server working on port ${port}`));