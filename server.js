const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/statistics', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'statistic.html'));
});

const bmiRoutes = require('./Routes/bmiRoutes.js');
app.use('/', bmiRoutes);


const tipsRoutes = require('./Routes/tipsRoutes.js');
app.use('/', tipsRoutes);

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
