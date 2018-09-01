const Twitter = require('twitter');
const config = require('config');

// Cria o client passando as configurações/tokens do twitter
const client = new Twitter({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token_key: config.accessTokenKey,
  access_token_secret: config.accessTokenSecret,
});

// Retweeta
const retweet = (tweet) => {
  client.post(`statuses/retweet/${tweet.id}`, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

// Começa a fazer o Stream, procurando por #CodandoJuntas
client.stream('statuses/filter', { track: '#CodandoJuntas' }, (stream) => {
  stream.on('data', (tweet) => {
    retweet(tweet);
  });

  stream.on('error', (error) => {
    console.log(error);
  });
});
