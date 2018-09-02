const Twit = require('twit')
const config = require('config');

// Cria o client passando as configurações/tokens do twitter
const T = new Twit({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret,
})

// Retweeta
const retweet = (tweet) => {
  T.post(`statuses/retweet/:id`, { id: tweet.id_str }, function (err) {
    //O Erro 327, são tweets que já foram retweetados. As vezes o stream duplica os tweets
    if(err && err.code !== 327) {
      console.log(err);
    }
  });
}

//Começa a fazer o Stream, procurando por #CodandoJuntas
const stream = T.stream('statuses/filter', { track: '#CodandoJuntas' });

stream.on('tweet', function (tweet) {
  retweet(tweet);
});

stream.on('error', function(err){
  console.log(err);
});