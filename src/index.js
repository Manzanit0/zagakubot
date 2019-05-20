const express = require('express');
const request = require('request');

// Slack API credentials
const clientId = '<client Id here>';
const clientSecret = '<secret here>';

const app = express();

// The endpoint for the webhook
app.post('/command', (req, res) => res.send('Your ngrok tunnel is up and running!'));

app.get('/oauth', (req, res) => {
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
    } else {
        request({
            url: 'https://slack.com/api/oauth.access',
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
            method: 'GET',

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);
            }
        })
    }
});

const PORT = 4390;
app.listen(PORT, () => console.log("Example app listening on port " + PORT));
