const express = require('express');
const serverless = require('serverless-http');
const url = require('url');

const app = express();

const router = express.Router();

router.get('/welcome', (req, res) => {
    const name = url.parse(req.url,true).query.name;
    res.write('Tere, ' + name);
    res.end();
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
