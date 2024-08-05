// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-bmi', (req, res) => {
    const { weight, height } = req.body;
    const bmi = weight / (height * height);
    res.json({ bmi: bmi.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
