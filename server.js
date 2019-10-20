const express = require('express');
const Twitter = require('twitter');
require("dotenv").config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const app = express();

app.get('/search', (req, res) => {
  const { searchBy } = req.query;

  if (searchBy) {
    client
      .get(`https://api.twitter.com/1.1/users/search.json?q=${searchBy}`, {})
      .then(response => {
        console.log('server', response);
        res.json({ users: response })
      })
      .catch(err => {
        console.log({ err });
        return res.status(500).json({ error: 'Invalid request' });
      })
  }
})

app.get('/tweets', (req, res) => {
  const { screenName } = req.query;
  console.log('server', screenName)
  client
    .get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=5`, {})
    .then(response => {
      console.log('server', response);
      res.json({ tweets: response })
    })
    .catch(err => {
      console.log({ err });
      return res.status(500).json({ error: 'Invalid request' });
    })
})

app.listen(3001)
console.log("Listening on port 3001");

