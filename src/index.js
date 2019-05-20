const express = require('express');

const app = express();

// The endpoint for the webhook
app.post('/command', (req, res) => res.send('Your ngrok tunnel is up and running!'));

const PORT = 4390;
app.listen(PORT, () => console.log("Example app listening on port " + PORT));
